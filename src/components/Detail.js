import { useParams } from "react-router-dom";
import blogs from "../data/blogs";
import { useEffect, useState } from "react";

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

  return <h1>รายละเอียก : {id}</h1>;
}
