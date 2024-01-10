import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/modals.scss";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleLoginRegister = (event) => {
    const { name, value } = event.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  // créer la fonction handleLogin avec ses filtres pour vérifier que tous les champs sont remplis et que l'adresse mail n'existe pas déjà + récupérer le JWT token

  return (
    <container className="backdrop">
      <section className="modal">
        <header>
          <div>
            <Link to="/" className="img-modal">
              <img
                src="src/assets/picto/yellow/cross_yell.svg"
                alt="close-window"
              />
            </Link>
            <div>
              <h2>Connexion</h2>
            </div>
          </div>
          <p>Tu n'as pas encore de compte ? Crééer le maintenant !</p>
        </header>
        <main className="content">
          <form>
            <input
              type="text"
              name="email"
              placeholder="votremail@gmail.com"
              value={loginInfo.email}
              onChange={handleLoginRegister}
            />
            <input
              id="password"
              type="text"
              name="password"
              placeholder="Votre mot de passe"
              value={loginInfo.password}
              onChange={handleLoginRegister}
            />
          </form>
        </main>
        <footer className="footer-modal">
          <Link to="/profile">
            <button className="button-yellow" type="button">
              Se connecter
            </button>
          </Link>
        </footer>
      </section>
    </container>
  );
}

export default Login;
