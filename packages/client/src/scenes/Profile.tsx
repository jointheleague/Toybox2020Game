import React, {useEffect, useState} from 'react';
import { Center } from '../components/center';
import firebase from 'firebase/app';
import 'firebase/auth';
import { navigate } from '@reach/router';
import DOMPurify from 'dompurify';

let firebaseApp: any;
let data: any;

try {
  firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCRClPzTZnRSg_fAap6ENnAkxUBQKJGk5w",
    authDomain: "leaguedragoncoin.firebaseapp.com",
    projectId: "leaguedragoncoin",
    storageBucket: "leaguedragoncoin.appspot.com",
    messagingSenderId: "320692217416",
    appId: "1:320692217416:web:04f00569ed1bf7b55e9a7d"
  });
} catch {
  window.location.reload();
}

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState<string>('/icon.png');
  const [currentUser, setCurrentUser] = useState<any>({});
  useEffect(
    () => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log(user);
          if (user.photoURL) {
            setProfilePicture(user.photoURL);
          }
          setCurrentUser(user);
        } else {
          navigate('/');
        }
      });
    }, []
  )
  return (
    <>
      <br /><br /><br />
      <Center>
        <a href="/">Back</a>
        <h1>Profile</h1>
        <img src={profilePicture} alt="Profile" height="50px"/>
        <h1>{currentUser.displayName || currentUser.phoneNumber || (currentUser.isAnonymous ? 'Anonymous' : '')}</h1>
        <h2>Stats</h2>
        <h3><img src="/icon.png" height="20px" /> High Score: 0</h3>
        <h3><img src="/icon.png" height="20px" /> Lifetime Coins: 0</h3>
        <h3><img src="/icon.png" height="20px" /> Dragons Killed: 0</h3>
        <h3><img src="/icon.png" height="20px" /> Badges Earned: 0</h3>
        <h2>Abilities</h2>
        <div style={{
          backgroundColor: '#c60c30',
          color: 'white',
          borderRadius: '5px',
          width: '100px',
          padding: '10px',
          cursor: 'pointer'
        }}>
          <img src="/icon.png" style={{ cursor: 'pointer' }} height="20px" />
          <br />
          <h4 style={{ cursor: 'pointer' }}>Fireballs</h4>
        </div><br />
        <div style={{
          backgroundColor: '#00a1de',
          color: 'white',
          borderRadius: '5px',
          width: '100px',
          padding: '10px',
          cursor: 'pointer'
        }}>
          <img src="/icon.png" style={{ cursor: 'pointer' }} height="20px" />
          <br />
          <h4 style={{ cursor: 'pointer' }}>Snowballs</h4>
        </div><br />
        <div style={{
          backgroundColor: '#f9e300',
          color: 'black',
          borderRadius: '5px',
          width: '100px',
          padding: '10px',
          cursor: 'pointer'
        }}>
          <img src="/icon.png" style={{ cursor: 'pointer' }} height="20px" />
          <br />
          <h4 style={{ cursor: 'pointer' }}>Lightning</h4>
        </div><br />
        <div style={{
          backgroundColor: '#009b3a',
          color: 'white',
          borderRadius: '5px',
          width: '100px',
          padding: '10px',
          cursor: 'pointer'
        }}>
          <img src="/icon.png" style={{ cursor: 'pointer' }} height="20px" />
          <br />
          <h4 style={{ cursor: 'pointer' }}>Poison</h4>
        </div><br />
      </Center>
    </>
  );
}

export default Profile;