import { useParams } from "react-router-dom";
import blogs from "../data/blogs";
import { useEffect, useState } from "react";
import "./Detail.css";

export default function Detail() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [image_url, setImage_url] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    const result = blogs.find((item) => item.id === parseInt(id));
    console.log(result);
    setTitle(result.title);
    setImage_url(result.image_url);
    setContent(result.content);
    setAuthor(result.author);
  }, []);

  return (
    <div className="container">
      <h2 className="title">บทความ : {title}</h2>
      <img src={image_url} alt="title" className="blog_img" />
      <div className="blog-detail">
        <strong>{author}</strong>
        <p>{content}</p>
      </div>
    </div>
  );
}
