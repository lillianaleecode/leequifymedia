import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import Post from "./Post"
import { useState, useEffect } from "react";
import { db } from "../firebase";

/*const posts = [
    {
        id:'123',
        username: 'leequify',
        userImg: 'https://lillilove.de/wp-content/uploads/2020/04/b3dedd9e-4dbf-4793-9645-93c211bf19ae-247x296.jpg',
        img: 'https://lillilove.de/wp-content/uploads/2020/04/b3dedd9e-4dbf-4793-9645-93c211bf19ae-247x296.jpg',
        caption: 'Hello there!',

    },
    {
        id:'123',
        username: 'lillileech',
        userImg: 'https://lillilove.de/wp-content/uploads/2020/04/b3dedd9e-4dbf-4793-9645-93c211bf19ae-247x296.jpg',
        img: 'https://lillilove.de/wp-content/uploads/2020/04/b3dedd9e-4dbf-4793-9645-93c211bf19ae-247x296.jpg',
        caption: 'Hello there!',

    }
] */

//bring from firebase to the front end
function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(
        () => 
            onSnapshot(
                query(collection(db, 'posts'),orderBy('timestamp', 'desc')), 
            (snapshot) => {
            setPosts(snapshot.docs);
        }
        ),
         [db] );

         console.log(posts)



    return (
        <div>
            {posts.map(post => (
                <Post 
                key={post.id} 
                id={post.id}
                username={post.data().username}
                userImg={post.data().image}
                img={post.data().image}
                caption={post.data().caption}

                />

            ))}

            
            

        </div>
    )
}

export default Posts
