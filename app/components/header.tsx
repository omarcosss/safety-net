import "./header.scss"

export default function Header() {
  const today = new Date();
  const month = today.getMonth()+1;
  const year = today.getFullYear();
  const date = today. getDate();
  const currentDate = date + " de " + month + " de " + year;

  return (
    <header>
      <a href="/">
        <img src="/public/logo.svg" alt="" className="h-8 w-fit" />
      </a>
      <span>{currentDate}</span>
    </header>
  );
}