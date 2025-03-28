import React from "react";

const posts = [
  {
    "id": "1",
    "title": "Pequenos Ajustes no Celular, Grandes Mudanças na Sua Rotina",
    "image": "/images/1.jpg",
    "content": (
      <div className="post-content">
        <p>O celular pode ser uma ferramenta incrível de produtividade e bem-estar, mas, quando usado sem controle, pode se tornar um grande vilão da nossa rotina. Aqui estão algumas dicas para equilibrar o uso e tornar seu dispositivo um aliado na sua vida diária:</p>
        <h2>1. Controle as Notificações</h2>
        <p>Desative notificações desnecessárias para evitar distrações constantes. No iOS, vá em Ajustes → Notificações e no Android, em Configurações → Apps e notificações. Priorize apenas o essencial!</p>
        <h2>2. Use o Modo "Não Perturbe"</h2>
        <p>Configure horários específicos para evitar interrupções, especialmente antes de dormir e durante momentos de foco.</p>
        <h2>3. Organize a Tela Inicial</h2>
        <p>Deixe na tela principal apenas os apps que ajudam na sua rotina (calendário, notas, produtividade). Redes sociais e entretenimento podem ficar em pastas separadas para reduzir o uso impulsivo.</p>
        <h2>4. Monitore Seu Tempo de Tela</h2>
        <p>No iPhone, o Screen Time (Tempo de Uso) e no Android, o Bem-estar Digital ajudam a visualizar e limitar o tempo gasto em cada app.</p>
        <h2>5. Adote o "Modo Preto & Branco"</h2>
        <p>Ativar essa configuração reduz o apelo visual dos apps e pode diminuir o uso compulsivo. Teste e veja a diferença!</p>
        <h2>6. Substitua Hábitos Digitais por Alternativas</h2>
        <p>Troque o hábito de checar redes sociais antes de dormir por um livro digital ou app de meditação. Apps como One Sec ajudam a repensar o uso impulsivo.</p>
        <p>Seu celular deve trabalhar a seu favor, não contra você. Pequenas mudanças podem fazer uma grande diferença no seu bem-estar digital!</p>
      </div>
    )
  },
  {
    "id": "2",
    "title": "Foco e Produtividade: Apps que Podem Transformar Sua Rotina",
    "image": "/images/2.jpg",
    "content": (
      <>
        <p>React Router helps manage navigation in React apps...</p>
      </>
    )
  },
  {
    "id": "3",
    "title": "Foco e Produtividade: Apps que Podem Transformar Sua Rotina",
    "image": "/images/2.jpg",
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
  return post ? { ...post } : null; 
}