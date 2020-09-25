import React, {
  useEffect,
  useState
} from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  Input,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  Row
} from 'reactstrap';

import firebase from 'firebase'
import Logo from './images/logo.png'

function App() {

  const [user, setUser] = useState(null)
  const [tasks, setUserTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const provider = new firebase.auth.GoogleAuthProvider();

  const pollUserTasks = (curUser) => {
    firebase.database().ref(curUser.uid).on('value', (snapshot) => {
      if (snapshot.val()){
        setUserTasks(snapshot.val());
      }
      else
        setUserTasks([])
    })
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user)
        pollUserTasks(user);
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
          pollUserTasks(user);
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

  const addTask = (event) => {
    event.preventDefault();
    var newUserTasks = [...tasks, {text: newTask, check: false}]
    firebase.database().ref(user.uid).set(newUserTasks).then(() => {
      setUserTasks(newUserTasks)
      setNewTask('')
    }).catch((error) => {
      console.log(error)
    });
  }

  const toggleCheck = (index) => {
    var newUserTasks = [...tasks];
    newUserTasks[index].check = !newUserTasks[index].check;
    firebase.database().ref(user.uid).set(newUserTasks).then(() => {
      setUserTasks(newUserTasks)
      setNewTask('')
    }).catch((error) => {
      console.log(error)
    });
  }

  const deleteTask = (index) => {
    var newUserTasks = [...tasks];
    newUserTasks.splice(index, 1);
    firebase.database().ref(user.uid).set(newUserTasks).then(() => {
      setUserTasks(newUserTasks)
      setNewTask('')
    }).catch((error) => {
      console.log(error)
    });
  }

  if (!user)
    return ( 
      <Container fluid className="d-flex align-items-center justify-content-center bg-dark" style={{height: '100vh', overflow: 'hidden'}}>
        <Row>
          <Col className="shadow-lg rounded-lg bg-white text-center py-5 px-3 px-lg-5">
            <img src={Logo} alt="" width="100px" className="mb-3" />
            <p className=" font-weight-bold text-dark mb-4">Welcome, Please login to proceed...</p>
            <Button onClick = {signIn} color="danger" className="w-75 py-2"> Continue with Google </Button>
          </Col>
        </Row>
      </Container>
    )
  else
    return ( 
      <div className="bg-dark">
        <Navbar color="dark" className="shadow" style={{height: "60px"}}>
          <Container fluid className="px-0 px-lg-5">
            <NavbarBrand>
              <img src={Logo} alt="" width="30px" />
            </NavbarBrand>
            <Nav>
              <NavItem className="ml-auto">
                <Button onClick = {signOut} color="danger" size="sm" > Sign Out </Button> 
              </NavItem>  
            </Nav>
          </Container>
        </Navbar>
        <Container className="text-white" style={{height: "calc(100vh - 60px)", overflow: "hidden"}}>
          <h3 className="font-weight-bold mt-4 border-bottom pb-2 mb-2">Take Notes</h3> 
          <div style={{overflowY: "auto", height: "65vh"}}>
            {tasks.map((data, i) => {
              return (
                <div key={i} className="py-2 d-flex align-items-center " style={{borderBottom: "1px solid rgba(222, 226, 230, 0.1)"}}>
                  <Input type="checkbox" checked={data.check} onChange={() => toggleCheck(i)} className="m-0" />
                  <p className={`mb-0 ml-3 pl-2 ${data.check ? "strikeThrough" : ""}`}>{data.text}</p>
                  <div className="ml-auto">
                    <Button size="sm" className="rounded-circle" onClick={() => deleteTask(i)} style={{padding: "0.1rem 0.35rem"}} color="danger">&#10006;</Button>
                  </div>
                </div>
              )
            })} 
          </div>
          <Container className="fixed-bottom mb-3 mb-lg-5">
            <Form onSubmit={addTask}>
              <Row>
                <Col className="pr-0">
                  <Input placeholder = "Enter your task here" onChange = {inputHandler} value={newTask} /> 
                </Col>
                <Col xs="auto">
                  <Button type="submit" color="success" > Add Task </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </Container>
      </div>
    );
}

export default App;