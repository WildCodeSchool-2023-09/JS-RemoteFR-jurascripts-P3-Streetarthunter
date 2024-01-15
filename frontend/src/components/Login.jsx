import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/modals.scss";
import axios from "axios";
import CrossButton from "../assets/picto/yellow/cross_yell.svg";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  // const connect = axios.create(import.meta.env.VITE_BACKEND_URL);
  const navigate = useNavigate();

  const handleLoginRegister = (event) => {
    const { name, value } = event.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  // créer la fonction handleLogin avec ses filtres pour vérifier que tous les champs sont remplis et que l'adresse mail n'existe pas déjà + récupérer le JWT token
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (email === "" || password === "") {
      return;
    }

    try {
      // Appel à l'API pour demander une connexion
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        loginInfo
      );

      // Redirection vers la page de connexion si la création réussit
      if (response.status === 200) {
        navigate("/Profile");
      } else {
        // Log des détails de la réponse en cas d'échec
        console.info(response);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };

  return (
    <container className="backdrop">
      <section className="modal">
        <header>
          <div>
            <Link to="/" className="img-modal">
              <img src={CrossButton} alt="close-window" />
            </Link>
            <div>
              <h2>Connexion</h2>
            </div>
          </div>
          <p>Tu n'as pas encore de compte ? Créer le maintenant !</p>
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
          <button className="button-yellow" type="button" onClick={handleLogin}>
            Se connecter
          </button>
        </footer>
      </section>
    </container>
  );
}

export default Login;
