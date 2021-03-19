import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';
firebase.initializeApp(firebaseConfig);

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

function App() {

  //User Information Object
  const [userInfo,setUserInfo]=useState({
    name:"",
    image:""
  });


  //Auth Provider
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  var githubProvider = new firebase.auth.GithubAuthProvider();




  const handleGoogleSignIn=()=>{
    //console.log('Clicked using google');
    firebase.auth().signInWithPopup(googleProvider)
    .then(res=>{
      setUserInfo({
        name:res.user.displayName,
        image:res.user.photoURL
      })

    })
    .catch(error =>{
      const errorMessage = error.message;
      console.log(errorMessage);
    })
  }


  const handleFacebookSignIn=()=>{
    firebase.auth().signInWithPopup(facebookProvider)
    .then(res=>{
      setUserInfo({
        name:res.user.displayName,
        image:res.user.photoURL
      })

    })
    .catch(error =>{
      const errorMessage = error.message;
      console.log(errorMessage);
    })
  }



  const handleGithubSignIn=()=>{
    firebase.auth().signInWithPopup(githubProvider)
    .then(res=>{
      setUserInfo({
        name:res.user.displayName,
        image:res.user.photoURL
      })

    })
    .catch(error =>{
      const errorMessage = error.message;
      console.log(errorMessage);
    })
  }








  
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Sign In Using Google</button>
      <button onClick={handleFacebookSignIn}>Sign In Using Facebook</button>
      <button onClick={handleGithubSignIn}>Sign In Using Github</button>
      <button >Sign In Using Twitter</button>
      <div>
        <h3>{userInfo.name}</h3>
        <img src={userInfo.image} alt={userInfo.name}/>
      </div>
    </div>

  );
}

export default App;
