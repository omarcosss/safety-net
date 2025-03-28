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
      <div className="page-content max-w-[700px] mx-auto">
        <h1>{post.title}</h1>
        <img src={post.image} alt="" className="post-image"/>
        {post.content}
        <div className="w-full border-b border-dark-blue opacity-30"></div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScUFbGk1K2wa1I8fyTHT6q5zSf0_32kMPz3fvVNC4FgQJiD1g/viewform?usp=header" className="bg-dark-blue text-white w-full max-w-96 p-2.5 font-serif flex justify-center gap-2.5 rounded-sm mx-auto">
          <img src="/feedback.svg" alt="" className="w-6"/>
          O que está achando? Nos dê um feedback
        </a>
      </div>
      <Footer/>
    </>
  );
}