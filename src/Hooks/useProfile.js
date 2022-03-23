import { useEffect, useState, useContext } from "react";
import RepositoryContext from "../Context/RepositoryContext";

export default function useProfile(userId) {
  const [user, setUser] = useState(null);
  const [profilePosts, setprofilePosts] = useState([]);
  const { repository } = useContext(RepositoryContext);

  useEffect(() => {
    const fetchUser = async () => {
      let userDoc = await repository.getUser(userId);
      // let getPosts = await repository.fetchProfilePosts(userId);
      setUser(userDoc);
      // setprofilePosts(getPosts.docs.map((doc) => doc.data()));
      console.log(userDoc);
    };
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function updateUser(updatedUser) {
      setUser(updatedUser);
  }

  return { user, profilePosts, updateUser };
}

