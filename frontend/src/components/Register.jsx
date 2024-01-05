import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../styles/modals.scss";
// import RGPD from "./RGPD";

function Register() {
  const [registerInfo, setRegisterInfo] = useState({
    firstname: "",
    lastname: "",
    psuedo: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChangeRegister = (event) => {
    const { name, value } = event.target;
    setRegisterInfo({ ...registerInfo, [name]: value });
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const { firstname, password } = registerInfo;

    if (firstname === "" || password === "") {
      return;
    }

    try {
      const resregister = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/register`,
        registerInfo
      );

      if (resregister.status === 201) {
        // créer la route pour rediriger vers la page/modale de login
        navigate("/login");
      }
    } catch (error) {
      // Gérer les erreurs de requête
      console.error(error);
    }
  };

  // Retour à la page d'accueil?
  const closeModal = () => {};

  return (
    <section className="backdrop">
      <section className="modal">
        <header>
          <div>
            <switch className="img-modal" onClick={closeModal}>
              <img
                src="src/assets/picto/yellow/cross_yell.svg"
                alt="close-window"
              />
            </switch>
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
              name="firstname"
              placeholder="Prénom"
              value={registerInfo.firstname}
              onChange={handleChangeRegister}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Nom"
              value={registerInfo.firstname}
              onChange={handleChangeRegister}
            />
            <input
              type="text"
              name="pseudo"
              placeholder="Pseudo"
              value={registerInfo.firstname}
              onChange={handleChangeRegister}
            />
            <input
              type="text"
              name="email"
              placeholder="example@gmail.com"
              value={registerInfo.firstname}
              onChange={handleChangeRegister}
            />
            <input
              id="password"
              type="text"
              name="password"
              placeholder="Mot de passe"
              value={registerInfo.password}
              onChange={handleChangeRegister}
            />
            <input
              id="password-repeat"
              type="text"
              name="password-repeat"
              placeholder="Répète ton mot de passe"
              value={registerInfo.password}
              onChange={handleChangeRegister}
            />
          </form>
        </main>
        <footer className="footer-modal">
          <p className="checkbox-RGPD">
            <input type="checkbox" /> J'accepte les{" "}
            {/* créer la route vers RGPD  */}
            <Link to="/RGPD">conditions générales d'utilisation.</Link>
          </p>
          <button
            className="button-yellow"
            type="button"
            onClick={handleRegister}
          >
            S'inscrire
          </button>
        </footer>
      </section>
    </section>
  );
}
export default Register;
