import { useParams } from "react-router";
import { getPostById, getPosts } from "../data/posts";
import "./post.scss";
import Header from "../components/header";
import type { Route } from "../routes/+types/home";
import React from "react";
import ArticleCard from "~/components/ArticleCard";
import Footer from "~/components/Footer";



export function meta({}: Route.MetaArgs) {
  const { id } = useParams();
  const post = getPostById(id!);

  if (!post) {
    return [
      { title: "Safety Net" },
      { name: "description", content: "Post não encontrado" },
    ];
  }
  return [
    { title: "Safety Net" },
    { name: "description", content: post.title },
  ];
}

export default function Post() {
  const { id } = useParams();
  const post = getPostById(id!);  
  const posts = getPosts();

  if (!post) {
    return <div>Post não encontrado</div>;
  }

  return (
    <>
      <Header />
      <div className="page-content">
        <h1>{post.title}</h1>
        <img src={post.image} alt=""/>
        {post.content}
        
      </div>
      <Footer/>
    </>
  );
}