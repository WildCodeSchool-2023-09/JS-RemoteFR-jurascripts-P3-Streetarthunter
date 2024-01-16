import PropTypes from "prop-types";
import "./InfoStreetArt.scss";

function InfoStreetArt({ streetArtInfo, artistInfo }) {
  if (!streetArtInfo || !artistInfo) {
    return null;
  }

  const { title, description, picture } = streetArtInfo;
  const { name, bio } = artistInfo;

  const getFirstSentence = (text) => {
    if (text === null || text === undefined) {
      return ""; // Retourne une chaîne vide si le texte est null ou undefined
    }

    const sentences = text.split("."); // Supposant que les phrases se terminent par un point
    const firstSentence = sentences[0].trim();
    return firstSentence;
  };

  return (
    <div className="info-street-art">
      <h2>{title}</h2>
      <p>{getFirstSentence(description)}.</p>
      <img src={picture} alt="Artwork" />
      <h3>Artiste : {name}</h3>
      <p>{getFirstSentence(bio)}.</p>
    </div>
  );
}

InfoStreetArt.propTypes = {
  streetArtInfo: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    picture: PropTypes.string.isRequired,
  }),
  artistInfo: PropTypes.shape({
    name: PropTypes.string,
    bio: PropTypes.string,
  }),
};

InfoStreetArt.defaultProps = {
  streetArtInfo: {
    title: "",
    description: "",
    picture: "",
  },
  artistInfo: {
    name: "",
    bio: "",
  },
};

export default InfoStreetArt;
