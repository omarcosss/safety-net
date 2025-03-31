import { useParams } from "react-router";
import { getPostById, getPosts } from "../data/posts";
import "./post.scss";
import Header from "../components/header";
import type { Route } from "../routes/+types/home";
import React from "react";
import ArticleCard from "~/components/ArticleCard";
import Footer from "~/components/Footer";
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';


export function meta({}: Route.MetaArgs) {
  const { id } = useParams();
  const post = getPostById(id!);

  if (!post) {
    return [
      { title: "Safety Net" },
      { name: "", content: "Post não encontrado" },
    ];
  }
  return [
    { title: "Safety Net" },
    { name: post.title, content: "" },
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
        <div className="flex flex-col">
          <div className="font-serif text-sm">Referências:</div>
          <div className="flex flex-col text-sm font-sans font-light italic px-4">
            <ul>
              {post.refs?.map((ref) => (
                <li key={ref.id} >
                  <a target="_blank" 
                    href={ref.link}
                    className="text-dark-blue"
                  >
                      {ref.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full border-b border-dark-blue opacity-30"></div>
        <a target="_blank" 
          href="https://docs.google.com/forms/d/e/1FAIpQLScUFbGk1K2wa1I8fyTHT6q5zSf0_32kMPz3fvVNC4FgQJiD1g/viewform?usp=header" 
          className="bg-dark-blue text-white w-full max-w-96 p-2.5 font-serif flex justify-center gap-2.5 rounded-sm mx-auto">
          <ThumbsUpDownIcon />
          O que está achando? Nos dê um feedback
        </a>
        
      </div>
      <Footer/>
    </>
  );
}