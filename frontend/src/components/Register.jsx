import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../styles/modals.scss";
import CrossButton from "../assets/picto/yellow/cross_yell.svg";

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
    // créer les fonctions pour vérifier que tous les input sont remplis + regex
    // const { firstname, password } = registerInfo;

    // if (firstname === "" || password === "") {
    //   return;
    // }

    try {
      const resregister = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/register`, // créer la route dans le back....
        registerInfo
      );

      if (resregister.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
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
              <h2>Inscription</h2>
            </div>
          </div>
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
              value={registerInfo.lastname}
              onChange={handleChangeRegister}
            />
            <input
              type="text"
              name="pseudo"
              placeholder="Pseudo"
              value={registerInfo.pseudo}
              onChange={handleChangeRegister}
            />
            <input
              type="text"
              name="email"
              placeholder="example@gmail.com"
              value={registerInfo.email}
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
              value={registerInfo.passwordRepeat}
              onChange={handleChangeRegister}
            />
          </form>
        </main>
        <footer className="footer-modal">
          <p className="checkbox-RGPD">
            <input type="checkbox" name="RGPD-check" value="" /> J'accepte les{" "}
            <Link to="/RGPD">conditions générales d'utilisation.</Link>
          </p>
          <button type="button" onClick={handleRegister}>
            S'inscrire
          </button>
        </footer>
      </section>
    </container>
  );
}
export default Register;
