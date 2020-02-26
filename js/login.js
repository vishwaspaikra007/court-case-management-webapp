 //Get element
 const txtemail = document.getElementById("email");
 const txtpassword = document.getElementById("password");
 const btnlogin = document.getElementById("btnlogin");
 const btnsignup = document.getElementById("btnsignup");
 const btnlogout = document.getElementById("btnlogout");
 const btnLoginGoogle = document.getElementById("loginGoogle");
 const displayNameHTML = document.querySelector(".displayName");
 const displayNameMenu = document.querySelector(".name b");


 console.log("hello")
 // login with google .......................................................................
//  btnLoginGoogle.addEventListener('click', e => {
//     // loading animation
//     loading();
//    var provider = new firebase.auth.GoogleAuthProvider();

//    firebase.auth().signInWithPopup(provider).then(function(result) {
//      // This gives you a Google Access Token. You can use it to access the Google API.
//      var token = result.credential.accessToken;
//      // The signed-in user info.
//      var user = result.user;
//      // ...
//    }).catch(function(error) {
//      // Handle Errors here.
//      var errorCode = error.code;
//      var errorMessage = error.message;
//      // The email of the user's account used.
//      var email = error.email;
//      // The firebase.auth.AuthCredential type that was used.
//      var credential = error.credential;
//      alert("Can't log you in Reason:" + error.message);
//      if(endLoad)
//            endLoading();
//      // ...
//    });
//  });
 //...........................................................................................
 // login event...............................................................................
//  btnlogin.addEventListener('click', e => {
//    // loading animation
//    loading();
//    //get email and pass
//    const email = txtemail.value;
//    const password = txtpassword.value;
//    const auth = firebase.auth();
//    // sign in
//    const promise = auth.signInWithEmailAndPassword(email, password);
//    promise.catch(e => {
//      console.log(e.message);
//      alert("Can't log you in Reason:" + e.message);
//      if(endLoad)
//            endLoading();
//    });
//  });

 function login(e) {
  e.preventDefault();

  // loading();
   //get email and pass
   const txtemail = document.getElementById("email");
   const txtpassword = document.getElementById("password");
   const email = txtemail.value;
   const password = txtpassword.value;
   const auth = firebase.auth();
   // sign in
   const promise = auth.signInWithEmailAndPassword(email, password);
   promise.then(x => {
     console.log(x);
     var scope = angular.element(document.getElementById('idForJS')).scope();
      scope.setPath(x);

   })
   promise.catch(e => {
     console.log(e.message);
     alert("Can't log you in Reason:" + e.message);
     if(endLoad)
           endLoading();
   });


 }
 
  function signup(e) {
    e.preventDefault();
    const txtemail = document.getElementById("email");
    const txtpassword = document.getElementById("password");
   const email = txtemail.value;
   const password = txtpassword.value;
   const auth = firebase.auth();
   // sign in
   const promise = auth.createUserWithEmailAndPassword(email, password);
   promise.then(x => {
    var scope = angular.element(document.getElementById('idForJS')).scope();
		scope.hello(x);
   })
   promise.catch(e => console.log(e.message));

 }
 //...........................................................................................
 //signup event...............................................................................
//  btnsignup.addEventListener('click', e => {
//    //get email and pass
//    // todo check email
//    const email = txtemail.value;
//    const password = txtpassword.value;
//    const auth = firebase.auth();
//    // sign in
//    const promise = auth.createUserWithEmailAndPassword(email, password);

//    promise.catch(e => console.log(e.message));
//  });
//..............................................................................................
// function log out.............................................................................
//  btnlogout.addEventListener('click', e => {
//    firebase.auth().signOut();
//  });
//...............................................................................................
// real time listener............................................................................
 firebase.auth().onAuthStateChanged(fireBaseUser => {
  // alert()
   if(fireBaseUser)  {
     // display name
     var scope = angular.element(document.getElementById('idForJS')).scope();

     if(!fireBaseUser.displayName) {
       var currentUser = firebase.auth().currentUser;
       currentUser.updateProfile({
       displayName: prompt("enter name")
       }).then( e => {
         scope.user.name = fireBaseUser.displayName;
         location.href('/client-signup.html');
         console.log(fireBaseUser.uid);
         fillStorage(fireBaseUser.uid);
       });
      //  loading animation for signUP
      //  location.href('/client-signup.html');
       loading();
     }      
     else {
      //  displayNameHTML.innerHTML = `<span>${fireBaseUser.displayName}</span>`;
      //  displayNameMenu.innerHTML = `<span>${fireBaseUser.displayName}</span>`;
      scope.user.name = fireBaseUser.displayName;
      var scope = angular.element(document.getElementById('idForJS')).scope();
      scope.setPath(firebase.auth().currentUser);
      //  firestorage(fireBaseUser.uid);
        // scope.data = getData();
     }  
    //  console.log(fireBaseUser)
    //  btnlogout.style.display = "inline-block";
    //  btnlogin.style.display = "none";
    //  btnsignup.style.display = "none";
    //  btnLoginGoogle.style.display = "none";
    //  txtemail.style.display = "none";
    //  txtpassword.style.display = "none";
   }
   else {
    //  btnlogout.style.display = "none";
    //  btnlogin.style.display = "inline-block";
    //  btnsignup.style.display = "inline-block";
    //  btnLoginGoogle.style.display = "inline-block";
    //  txtpassword.style.display = "inline-block";
    //  txtemail.style.display = "inline-block";
    //  displayNameHTML.innerHTML = `Guest`;
    //  uid = 0;
    //  timeLocal = 0;
    //  todos = [];
    //  fillStorage();
   }    
 });