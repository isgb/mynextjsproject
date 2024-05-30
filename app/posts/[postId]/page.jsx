import Posts from "../page";
import { Suspense } from "react";

async function loadComponents(id){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  // console.log(data);
  return data;
}

async function Page ({params}) {

    // console.log(params);
   const post = await loadComponents(params.postId);
  //  console.log(post.title);

  return (
    <div>
       <h1>{post.id} {post.title}</h1>
       <p>{post.body}</p>
       <hr/>
       <h3>otras Publicaciones</h3>
       <Suspense fallback={<div>
          Cargando publicaciones...
       </div>}>
        <Posts/>
       </Suspense>
    </div>
  )

}

export default Page;