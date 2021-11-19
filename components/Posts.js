import Post from "./Post"

const posts = [
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
]

function Posts() {
    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} id={post.id}
                username={post.username}
                userImg={post.img}
                caption={post.caption}

                />

            ))}

            
            

        </div>
    )
}

export default Posts
