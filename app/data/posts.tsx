import React from "react";

const posts = [
  {
    "id": "1",
    "title": "Pequenos Ajustes no Celular, Grandes Mudanças na Sua Rotina",
    "image": "/public/images/1.jpg",
    "content": (
      <>
        <p>React Router helps manage navigation in React apps...</p>
      </>
    )
  },
  {
    "id": "2",
    "title": "Teste 2",
    "image": "/public/images/1.jpg",
    "content": (
      <>
        <p>React Router helps manage navigation in React apps...</p>
      </>
    )
  }
]

export function getPosts() {
  return posts;
}

export function getPostById(id: string) {
  const post = posts.find(post => post.id === id);
  return post ? { ...post } : null; // Return a copy to avoid direct mutation
}