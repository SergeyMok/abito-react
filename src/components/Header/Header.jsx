import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-box">
          <Link to={"/"} className="header-logo">
            <img src="/image/logo.svg" alt="logo" />
            <span>Abito</span>
          </Link>
          <div className="header-controls">
            <button className="btn btn-registration">Вход и регистрация</button>
            <button className="btn btn-primary">Подать обьявление</button>
          </div>
          <div className="header-burger">
            <img src="./image/burger.svg" alt="burger" />
          </div>
        </div>
      </div>
    </header>
  );
};
