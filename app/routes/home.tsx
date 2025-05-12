import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Safety Net" },
    { name: "description", content: "Segurança e Bem Estar Digital" },
    // Open Graph Meta Tags
    { property: "og:title", content: "Safety Net" },
    { property: "og:description", content: "Segurança e Bem Estar Digital" },
    { property: "og:image", content: "https://projetosafetynet.vercel.app/favicon.ico" },
    { property: "og:type", content: "website" },
  ];
}

export default function Home() {
  return <Welcome />;
}
