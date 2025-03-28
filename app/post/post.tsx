import { useParams } from "react-router";
import { getPostById } from "../data/posts";
import "./post.scss";
import Header from "../components/header";

export default function Post() {
  const { id } = useParams();
  const post = getPostById(id!);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Header />
      <div className="page-content">
        <h1>{post.title}</h1>
        <img src={post.image} alt=""/>
        <div className="post-content">{post.content}</div>
      </div>
    </>
  );
}