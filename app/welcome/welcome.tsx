import Header from "~/components/homeHeader";
import { getPostById, getPosts } from "../data/posts";

import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import React from "react";
import ArticleCard from "~/components/ArticleCard";
import Footer from "~/components/Footer";

export function Welcome() {
    const posts = getPosts();
  
  return (
    <main className="flex flex-col p-4 gap-8 items-center justify-center pt-[190px] pb-0">
      <Header/>
      {posts.map((p, index) => (
          <React.Fragment key={index}>
            <ArticleCard 
              key={p.id}
              article={p}
            />
          </React.Fragment>
        ))}
        <Footer/>
    </main>
  );
}
