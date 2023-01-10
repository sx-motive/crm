import Layout from './layouts/Layout';
import { app } from './api/firebase'
import { getAuth } from "firebase/auth";

const auth = getAuth(app);
console.warn(auth)


function App() {
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
