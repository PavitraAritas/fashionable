import { useState, useContext, useEffect} from "react";
import FirebaseContext from "../Context/FirebaseContext";

export default function useFeed() {
    const [feedPosts, setFeedPosts] = useState([]);
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        firebase.db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => setFeedPosts(snapshot.docs.map((doc) => doc.data())))
    }, [firebase]);

    return{feedPosts}
}