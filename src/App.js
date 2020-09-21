import React, {
  useEffect,
  useState
} from 'react';
import {
  Button,
  Container,
  Input
} from 'reactstrap';

import firebase from 'firebase'

function App() {

  const [user, setUser] = useState(null)
  const [tasks, setUserTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const provider = new firebase.auth.GoogleAuthProvider();

  const fetchUserTasks = (curUser) => {
    firebase.database().ref(curUser.uid).once('value').then((snapshot) => {
      if (snapshot.val()){
        setUserTasks(snapshot.val());
      }
      else
        setUserTasks([])
    }).catch((error) => {
      console.log("no interner");
    })
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user)
        fetchUserTasks(user);
      } else {
        setUser(null)
      }
    });
  }, [])

  const signOut = () => {
    firebase.auth().signOut().then(() => {
      setUser(null);
      setUserTasks([]);
      setNewTask('');
    })
  }

  const signIn = () => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        return firebase.auth().signInWithPopup(provider).then(function (result) {
          var user = result.user;
          setUser(user);
          fetchUserTasks(user);
          setNewTask('');
        }).catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          console.log(errorCode, errorMessage, email, credential);
        })
      });
  }

  const inputHandler = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    var newUserTasks = [...tasks, newTask]
    firebase.database().ref(user.uid).set(newUserTasks).then(() => {
      setUserTasks(newUserTasks)
      setNewTask('')
    }).catch((error) => {
      console.log(error)
    });
  }

  if (!user)
    return ( 
      <Button onClick = {signIn}> Sign In </Button>
    )
  else
    return ( 
    <Container>
      <Button onClick = {signOut} > Sign Out </Button> 
      {
        tasks.map((data, i) => ( 
          <p key = {i}> {data} </p>
        )
      )} 
      <Input placeholder = "task add" onChange = {inputHandler} value={newTask} /> 
      <Button onClick = {addTask} > Send </Button>
      </Container>
    );
}

export default App;