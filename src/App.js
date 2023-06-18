import './App.css';
import { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } from './services/post'

function App() {
  // const response = useGetAllPostQuery()
  // const response = useGetPostByIdQuery(5)
  // const response =  useGetPostByLimitQuery(3)
  // const [deletePost, response] =  useDeletePostMutation()
  // const [createPost, response] =  useCreatePostMutation()
  const [updatePost, response] =  useUpdatePostMutation()

  console.log(response,'response');

  const newPost = {
    title: 'This is a New Title',
    body: 'This is a New Body',
    userId: 1
  }

  const updatePostData = {
    id:1,
    title: 'This is a Updated Title',
    body: 'This is a Updated Body',
    userId: 1
  }

  // if(response.isLoading) return <div>Loading....</div>
  // if(response.isError) return <h1>An error occurred {response.error.error}</h1>
  return (
    // <div className="App">
    //  <h1>Redux toolKit - RTK Query (Get All Data)</h1>
    //  {
    //   response.data.map((post, i)=>(
    //     <div key={i}>
    //       <h2>{post.id} {post.title}</h2>
    //       <p>{post.body}</p>
    //       <hr/>
    //     </div>
    //   ))
    //  }
    // </div>

   // Get Single Post 
    // <div className="App">
    //   <h1>Redux toolKit - RTK Query (Get Single Data)</h1> 
    //     <h2>{response.data.id}  {response.data.title}</h2>
    //     <p>{response.data.body}</p>
    //  </div>

   // Get Limited Post 
    // <div className="App">
    //  <h1>Redux toolKit - RTK Query (Get Limited Data)</h1>
    //  {
    //   response.data.map((post, i)=>(
    //     <div key={i}>
    //       <h2>{post.id} {post.title}</h2>
    //       <p>{post.body}</p>
    //       <hr/>
    //     </div>
    //   ))
    //  }
    // </div>

    // Delete Data
    // <div className='App'>
    //   <h1>Redux ToolKit - RTK Query (Delete Data)</h1>
    //   <button onClick={()=>{deletePost(2)}}>Delete Post</button>
    // </div>

    
    // Create Data
    // <div className='App'>
    //   <h1>Redux ToolKit - RTK Query (Create Data)</h1>
    //   <button onClick={()=>{createPost(newPost)}}>Create Post</button>
    // </div>

      // Update Data
      <div className='App'>
      <h1>Redux ToolKit - RTK Query (Update Data)</h1>
      <button onClick={()=>{updatePost(updatePostData)}}>Update Post</button>
    </div>
  );
}

export default App;
