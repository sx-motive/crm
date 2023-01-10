import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

import { app } from './api/firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});


function App() {
  return (
    <>
      {/* <MainLayout /> */}
      <AuthLayout />
    </>
  );
}

export default App;
