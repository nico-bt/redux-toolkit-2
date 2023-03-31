import "./App.css"
import AddPostForm from "./features/posts/AddPostForm"
import PostsList from "./features/posts/PostsList"

function App() {
  return (
    <main className="App">
      <h1>APP</h1>
      <AddPostForm />
      <PostsList />
    </main>
  )
}

export default App
