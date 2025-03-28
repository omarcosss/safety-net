import "./headerHome.scss";
import { useState, useEffect } from 'react';


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      };

      window.addEventListener('scroll', handleScroll);
      
      return () => {
      window.removeEventListener('scroll', handleScroll);
      };
  }, []);

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
    <header className={isScrolled ? 'scrolled' : ''}>
        <img src="/bg.svg" alt="" className={isScrolled ? 'scrolled bg' : 'bg'} />
      <a href="/">
        <img src="/logo.svg" alt="Logo" className={isScrolled ? 'scrolled logo' : 'logo'} />
      </a>
      <span className={isScrolled ? 'scrolled date' : 'date'}>{currentDate}</span>
      <span className={isScrolled ? 'scrolled sub' : 'sub'}>Segurança e Bem Estar Digital</span>
    </header>
  );
}