import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/actions';
import l1 from "../assets/img/l1.jpeg"
import l2 from "../assets/img/l2.jpg"
import l3 from "../assets/img/l3.jpg"

const NEWPOSTS = [
  {
    name: "Igor",
    avatar: l1,
    nickname: "@Igor",
    image: "https://tut-cikavo.com/images/Nauka/gsfdhsfhsrh.jpg",
  },

  {
    name: "Lilia",
    avatar: l2,
    nickname: "@Lilia",
    image: "https://cdnimg.rg.ru/img/content/193/00/48/dinozavr_d_850.jpg",
  },

  {
    name: "Liza",
    avatar: l3,
    nickname: "@Liza",
    image: "https://zooblog.ru/wp-content/uploads/2021/01/joshua-j-cotten-uffvghtoqhc-unsplash-1140x694.jpg",
  }
]
export default function CreatePost() {
  const [name, setName] = useState("Igor")
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const onCreatePost = (event) => {
    event.preventDefault();
    const selectedName = NEWPOSTS.find((post) => post.name === name);
    let today = new Date().toISOString().slice(0, 10)
    const comment = 0, retweet = 0, likes = 0;
    const id = Date.now().toString();
    dispatch(addPost({
      name: selectedName.name,
      avatar: selectedName.avatar,
      nickname: selectedName.nickname,
      content,
      date: today,
      comment,
      retweet,
      likes,
      image: selectedName.image,
      id,
    }));
    setName("Rey");
    setContent("");
    setImage("");
  };

  return (
    <form className="post" onSubmit={onCreatePost}>
      <select onChange={(e) => setName(e.target.value)}>
        {NEWPOSTS.map((post, index) => (
          <option value={post.name} key={index}>{post.name}</option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Post text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      
      <select onChange={(e) => setImage(e.target.value)}>
        {NEWPOSTS.map((post, index) => (
          <option value={post.image} key={index}>{post.image}</option>
        ))}
      </select>

      <button type="submit" onClick={onCreatePost}>
        Create
      </button>
    </form>
  );
}