import PostCard from "../../components/PostCard";

async function loadPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    // console.log(data);
    return data;
}

async function PostPage(){

   const posts = await loadPosts();
   console.log(posts);
    return(
        <div>
            {
                posts.map(post => (
                    <PostCard post={post} key={post.id}/>
                ))
            }
        </div>
    )
}

export default PostPage