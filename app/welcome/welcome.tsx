import Header from "~/components/homeHeader";
import { getPostById, getPosts } from "../data/posts";
import React from "react";
import ArticleCard from "~/components/ArticleCard";
import Footer from "~/components/Footer";

export function Welcome() {
    const posts = getPosts();
  
  return (
    <main className="flex flex-col p-4 gap-8 items-center justify-center pt-[190px] pb-0 min-h-dvh">
      <Header/>
      <div className="flex flex-grow">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, index) => (
              <React.Fragment key={index}>
                <ArticleCard 
                  key={p.id}
                  article={p}
                />
              </React.Fragment>
            ))}
        </div>
      </div>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScUFbGk1K2wa1I8fyTHT6q5zSf0_32kMPz3fvVNC4FgQJiD1g/viewform?usp=header" className="bg-dark-blue text-white w-full max-w-96 p-2.5 font-serif flex justify-center gap-2.5 rounded-sm">
        <img src="/feedback.svg" alt="" />
        O que está achando? Nos dê um feedback
      </a>
      <Footer/>
    </main>
  );
}
