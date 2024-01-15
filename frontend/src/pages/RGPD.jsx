import "../styles/modals.scss";
import "../styles/commons.scss";
import "./Rgpd.scss";

import NavBar from "../components/NavBar";

function PolitiqueConfidentialite() {
  return (
    <>
      <NavBar />
      <container>
        <div className="RGPD">
          <h2>Politique de confidentialité</h2>
          <p>
            La présente politique de confidentialité explique comment [nom de
            l'entreprise/organisation] collecte, utilise, stocke et protège les
            données personnelles des utilisateurs conformément au Règlement
            général sur la protection des données (RGPD).
          </p>

          <h3>Collecte des données personnelles</h3>
          <p>
            Nous collectons uniquement les données personnelles nécessaires pour
            fournir nos services ou répondre à vos demandes. Les données
            personnelles que nous pouvons collecter incluent, mais ne sont pas
            limitées à :
          </p>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse électronique</li>
            <li>Identifiant</li>
            <li>Mot de passe</li>
          </ul>

          <h3>Utilisation des données personnelles</h3>
          <p>
            Nous utilisons les données personnelles collectées aux fins
            suivantes :
          </p>
          <ul>
            <li>Fournir les services demandés</li>
            <li>Authentifier votre compte</li>
            <li>Communiquer avec vous</li>
            <li>Gérer votre inscription</li>
            <li>Améliorer nos produits et services</li>
            <li>Répondre aux demandes et aux questions des utilisateurs</li>
            <li>Respecter nos obligations légales</li>
          </ul>

          <h3>Conservation des données personnelles</h3>
          <p>
            Nous conservons les données personnelles aussi longtemps que
            nécessaire pour atteindre les finalités pour lesquelles elles ont
            été collectées, sauf si la loi exige une période de conservation
            plus longue. Nous mettons en place des mesures de sécurité
            appropriées pour protéger les données personnelles contre tout accès
            non autorisé ou toute divulgation.
          </p>

          <h3>Divulgation des données personnelles à des tiers</h3>
          <p>
            Nous ne vendons, ne louons ni ne partageons vos données personnelles
            avec des tiers à des fins de marketing sans votre consentement
            préalable. Cependant, nous pouvons divulguer vos données
            personnelles à des tiers dans les cas suivants :
          </p>
          <ul>
            <li>Si cela est nécessaire pour fournir les services demandés</li>
            <li>
              Si la loi l'exige ou si nous sommes tenus de le faire par une
              autorité compétente
            </li>
          </ul>

          <h3>Droits des utilisateurs</h3>
          <p>
            Vous avez le droit d'accéder, de rectifier, de supprimer ou de
            limiter l'utilisation de vos données personnelles. Vous pouvez
            également vous opposer au traitement de vos données personnelles ou
            demander leur portabilité. Pour exercer ces droits, veuillez nous
            contacter à [adresse électronique/contact].
          </p>

          <h3>Modifications de la politique de confidentialité</h3>
          <p>
            Nous pouvons mettre à jour cette politique de confidentialité de
            temps à autre. Les modifications prendront effet dès leur
            publication sur cette page. Nous vous encourageons à consulter
            régulièrement cette page pour prendre connaissance des éventuelles
            modifications. Voici les Conditions Générales d'Utilisation
          </p>
        </div>
      </container>
    </>
  );
}

export default PolitiqueConfidentialite;
