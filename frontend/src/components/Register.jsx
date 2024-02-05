import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../styles/modals.scss";

function Register() {
  const [registerInfo, setRegisterInfo] = useState({
    firstname: "",
    lastname: "",
    pseudo: "",
    email: "",
    password: "",
    is_administrator: false,
    bio: "",
  });
  const [errMessage, setErrMessage] = useState("");
  const [acceptedRGPD, setAcceptedRGPD] = useState(false);

  const navigate = useNavigate();

  const handleChangeRegister = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setRegisterInfo({ ...registerInfo, [name]: newValue });
  };

  const handleRGPDChange = (e) => {
    setAcceptedRGPD(e.target.checked);
  };

  useEffect(() => {
    setErrMessage("");
  }, [registerInfo, acceptedRGPD]);

  const handleRegister = async (event) => {
    event.preventDefault();
    // créer les fonctions pour vérifier regex
    const { firstname, lastname, pseudo, password, email } = registerInfo;
    console.info(registerInfo);
    if (
      firstname === "" ||
      lastname === "" ||
      pseudo === "" ||
      password === "" ||
      email === ""
    ) {
      setErrMessage("Merci de remplir tous les champs");
      return;
    }

    if (!acceptedRGPD) {
      setErrMessage("Merci d'accepter les conditions d'utilisation");
      return;
    }

    setErrMessage("");
    try {
      const resregister = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users`,
        registerInfo
      );

      if (resregister.status === 201) {
        navigate("/connexion");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="backdrop">
      <section className="modal-register">
        <header>
          <div>
            {/* <Link to="/" className="img-modal">
              <img src={CrossButton} alt="close-window" />
            </Link> */}
            <div>
              <h2>Inscription</h2>
            </div>
          </div>
        </header>
        <main className="content">
          <form>
            <label htmlFor="firstname">
              Prénom <span className="yell">*</span>
            </label>
            <input
              type="text"
              name="firstname"
              placeholder="Prénom"
              value={registerInfo.firstname}
              onChange={handleChangeRegister}
            />
            <label htmlFor="lastname">
              Nom <span className="yell">*</span>
            </label>
            <input
              type="text"
              name="lastname"
              placeholder="Nom"
              value={registerInfo.lastname}
              onChange={handleChangeRegister}
            />
            <label htmlFor="pseudo">
              Pseudo <span className="yell">*</span>
            </label>
            <input
              type="text"
              name="pseudo"
              placeholder="Pseudo"
              value={registerInfo.pseudo}
              onChange={handleChangeRegister}
            />
            <label htmlFor="email">
              Adresse email <span className="yell">*</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="example@gmail.com"
              value={registerInfo.email}
              onChange={handleChangeRegister}
            />
            <label htmlFor="password">
              Mot de passe <span className="yell">*</span>
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={registerInfo.password}
              onChange={handleChangeRegister}
            />

            <label htmlFor="bio">Biographie</label>
            <textarea
              id="bio"
              type="text"
              name="bio"
              placeholder="Décrivez-vous et dites-nous pourquoi vous serez un excellent chasseur"
              value={registerInfo.passwordRepeat}
              onChange={handleChangeRegister}
            />
          </form>
        </main>
        <footer className="footer-modal">
          <p className="err-msg">{errMessage}</p>
          <p className="checkbox-RGPD">
            <input
              type="checkbox"
              name="rgpdCheck"
              checked={registerInfo.rgpdCheck}
              id="rgpdCheck"
              onChange={handleRGPDChange}
            />{" "}
            J'accepte les{" "}
            <Link to="/RGPD">conditions générales d'utilisation.</Link>
          </p>
          <button type="button" onClick={handleRegister}>
            S'inscrire
          </button>
          <p>
            J'ai déjà un compte :{" "}
            <Link className="text-link" to="/connexion">
              connexion
            </Link>{" "}
          </p>
        </footer>
      </section>
    </section>
  );
}
export default Register;
