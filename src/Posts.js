import Post from "./Post"

export default function Posts(){

const posts = [
    {userImage:"assets/img/meowed.svg",
    userName: "meowed",
    postImage:"assets/img/gato-telefone.svg",
    likedImage:"assets/img/respondeai.svg" ,
    likedBy: "respondeai",
    likes:101523,
    },
    {userImage:"assets/img/barked.svg",
    userName: "barked",
    postImage:"assets/img/dog.svg",
    likedImage:"assets/img/adorable_animals.svg" ,
    likedBy: "adorable_animals",
    likes:99159,
    }

]


return (
        <div className="posts">
            {posts.map((post => <Post 
            key={post.userName}
            userImage={post.userImage} 
            userName={post.userName}
            postImage={post.postImage}
            likedImage={post.likedImage}
            likedBy={post.likedBy}
            likes={post.likes}          
            
            
            />))} 
               
                </div>
    )
}


