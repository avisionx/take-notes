import React, { useEffect, useState } from 'react';
import { Button, Container, FormGroup, Input } from 'reactstrap';

import firebase from 'firebase'

function App() {

  const [user, setUser] = useState(null)
  const provider = new firebase.auth.GoogleAuthProvider();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
       setUser(user)
      } else {
       setUser(null)
      }
    });
  }, [])

  const signOut = () => {
    firebase.auth().signOut().then(() => {
      setUser(null);
    })
  }

  const signIn = () => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
      return firebase.auth().signInWithPopup(provider).then(function(result) {
        var user = result.user;
        setUser(user);
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
      })
    });
  }
  
  if(!user)
    return(
      <>
        <Button onClick={signIn}>Sign In</Button>
      </>
    )
  else
    return (
      <Container>
        <Button onClick={signOut}>Sign Out</Button>
        <p>Message 1</p>
        <p>Message 1</p>
        <p>Message 1</p>
        <p>Message 1</p>
        <FormGroup inline>
          <Input placeholder="task add" />
          <Button>Send</Button>
        </FormGroup>
      </Container>
    );
}

export default App;
