import { db, auth, storage } from "./firebase";
import firebase from "firebase/compat/app";

async function fetchProfilePosts(userId) {
  try {
    let posts = await db
      .collection("posts")
      .where("userId", "==", userId)
      .orderBy("timestamp", "desc")
      .get();

    
    return posts;
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

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

async function getUser(userId) {
  try {
    let user = await db.collection("users").doc(userId).get();
    return user.data();
  } catch (error) {
    alert(error.message); //catch is used to catch exceptions
  }
}

async function sendPost(
  name,
  message,
  userName,
  postImage,
  avatar,
  userId,
  likes
) {
  let imageURL;
  if (postImage) {
    imageURL = await handleUpload(postImage);
  }
  if (!imageURL) {
    imageURL = "";
  }
  await db.collection("posts").set({
    displayName: name,
    userName: userName,
    verified: true,
    text: message,
    image: imageURL,
    avatar: avatar ?? "",
    userId: userId,
    comments: 0,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    likes: likes,
  });
}

async function handleUpload(image) {
  try {
    const uploadTask = await storage.ref(`images/${image.name}`).put(image);
    let imageUrl = await uploadTask.ref.getDownloadURL();
    return imageUrl;
  } catch (e) {
    console.log(e);
  }
}



export {fetchProfilePosts, signIn, signOut, signUp, getUser, sendPost };
