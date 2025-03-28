import type { Route } from "./+types/home";
// import Post from "~/post/post";
import { useParams } from "react-router";
import { getPostById } from "../utils/posts";
import Post from "~/post/post";

const { id } = useParams();
const post = getPostById(id!);

export function meta({}: Route.MetaArgs) {
  return [
    { title: "a" },
    { name: "description", content: "Segurança e Bem Estar Digital" },
  ];
}

export default function Article() {
  return(
    <>
      asas
      
      {/* <Post {...post} /> */}
    </>
  );
}
