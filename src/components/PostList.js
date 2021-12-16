import { useSelector } from "react-redux";
import CreatePost from "./CreatePost";
import PostItem from "./PostItem";


export default function PostList() {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="posts-wrapper">
      <CreatePost />
      <div>
        {posts.map(post => {
          return (
            <PostItem
              avatar={post.avatar}
              name={post.name}
              nickname={post.nickname}
              content={post.content}
              date={post.date}
              image={post.image}
              comment={post.comment}
              retweet={post.retweet}
              likes={post.likes}
              key={ post.id }/>
          )
        })}
      </div>
    </div>
  );
}