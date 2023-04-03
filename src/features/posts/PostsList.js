import { useSelector } from "react-redux"
import PostAuthor from "./PostAuthor"
import { selectAllPosts } from "./postsSlice"
import ReactionButtons from "./ReactionButtons"

const PostsList = () => {
  // const posts = useSelector((state) => state.posts)
  //
  // Otra forma de acceder al state:
  // Mejor tener toda la lógica en el slice (postSlice) por si cambiara la estructura del state en el futuro
  // Y tener todo en un sólo lugar, creando el selector dentro del Slice
  const posts = useSelector(selectAllPosts)

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ))

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}
export default PostsList
