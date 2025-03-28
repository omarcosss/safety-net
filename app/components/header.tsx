import "./header.scss";

export default function Header() {
  const getMonthName = (monthIndex: number): string => {
    const months = [
      "Janeiro", "Fevereiro", "Março", "Abril", 
      "Maio", "Junho", "Julho", "Agosto",
      "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    return months[monthIndex];
  };

  const today = new Date();
  const monthName = getMonthName(today.getMonth());
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = `${date} de ${monthName} de ${year}`;

  return (
    <header>
      <a href="/">
        <img src="/logo.svg" alt="Logo" className="logo" />
      </a>
      <span>{currentDate}</span>
    </header>
  );
}