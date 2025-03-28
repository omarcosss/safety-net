import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Safety Net" },
    { name: "description", content: "Segurança e Bem Estar Digital" },
  ];
}

export default function Home() {
  return <Welcome />;
}
