import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/actions';
import l1 from "../assets/img/l1.jpeg"
import l2 from "../assets/img/l2.jpg"
import l3 from "../assets/img/l3.jpg"

const NEWPOSTS = [
  {
    name: "Rey",
    avatar: l1,
    nickname: "@Jakku",
    image: "https://lumiere-a.akamaihd.net/v1/images/hb_disneyplus_skywalkersaga_mobile_19267_e964ed2c.jpeg?region=0,0,640,400",
  },

  {
    name: "Mandalorian",
    avatar: l2,
    nickname: "@Mando",
    image: "https://images-na.ssl-images-amazon.com/images/I/71bBDuXUvOL.jpg",
  },

  {
    name: "BB8",
    avatar: l3,
    nickname: "@droid",
    image: "https://lumiere-a.akamaihd.net/v1/images/bb-8-main_72775463.jpeg?region=187%2C40%2C882%2C496",
  }
]
export default function CreatePost() {
  const [name, setName] = useState("Rey")
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
    <form className="post-new" onSubmit={onCreatePost}>
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