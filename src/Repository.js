import { db, auth } from "./firebase";
import firebase from "firebase/compat/app";


async function signUp(email, username, password, name) {
    try {
      const authUser = await auth.createUserWithEmailAndPassword(email, password);
      await createProfile(username, email, name, authUser.user.uid);
    } catch (error) {
      alert(error.message);
    }
  }
  
  function signIn(email, password) {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
  }

  async function createProfile(username, email, name, userId) {
    try {
     await db.collection("users").doc(userId).set({
        userId: userId,
        name: name,
        userName: username,
        email: email,
        verified: true,
        joinDate: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } catch (error) {
      alert(error.message);
    }
  }

  async function signOut() {
    await auth.signOut();
  }

  export {
      signIn, signOut, signUp
  }