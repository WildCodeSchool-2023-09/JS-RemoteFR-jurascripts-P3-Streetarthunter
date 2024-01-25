import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import "../styles/modals.scss";

import CrossButton from "../assets/picto/yellow/cross_yell.svg";

function Login() {
  const { handleAuth } = useContext(AuthContext);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

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
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        loginInfo
      );
      await localStorage.setItem("token", res.data.token);
      await handleAuth();
      await navigate("/profil");
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <section className="backdrop">
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
              type="password"
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
    </section>
  );
}

export default Login;
