
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut    } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyAvrZYc7q99wULI5C0KzBBtXqTWHn_eYZ8",
    authDomain: "firstproject-22196.firebaseapp.com",
    projectId: "firstproject-22196",
    storageBucket: "firstproject-22196.appspot.com",
    messagingSenderId: "637918926018",
    appId: "1:637918926018:web:e610870e201e848b48d75b",
    measurementId: "G-30ZBNEN5B1"
  };

  // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);

    const Email = document.getElementById("signup_email");
    const Password = document.getElementById("signup_password");
    const Button = document.getElementById("signup_btn");

    const Email_1 = document.getElementById("signin_email");
    const Password_1 = document.getElementById("signin_password");
    const Button_1 = document.getElementById("signin_btn");

    const user_email = document.getElementById("user_email");
    const logout_btn = document.getElementById("logout_btn");

    const auth_container = document.getElementById('auth_container');
    const user_container = document.getElementById('user_container');


    Button.addEventListener('click' , createUserAccount);
    Button_1.addEventListener('click' , SignIn);
    logout_btn.addEventListener('click', logout);



    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log('user is logged in');
          const uid = user.uid;
          auth_container.style.display = "none";
          user_container.style.display = "block";
          user_email.innerText = user.email;
        } else {
            console.log('user is logged out');
            auth_container.style.display = "block";
            user_container.style.display = "none";
            
        }
      });

      function createUserAccount() {
        // console.log('Email' , Email.value);
        // console.log('Password' , Password.value);
        createUserWithEmailAndPassword(auth, Email.value, Password.value)
  .then((userCredential) => {    
    const user = userCredential.user;
    console.log("User=>", user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    
  });

      }
      function SignIn() {
        // console.log('Email_1' , Email_1.value);
        // console.log('Password_1' , Password_1.value);
        signInWithEmailAndPassword(auth, Email_1.value, Password_1.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log('user');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });

      }
      function logout() {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
      }