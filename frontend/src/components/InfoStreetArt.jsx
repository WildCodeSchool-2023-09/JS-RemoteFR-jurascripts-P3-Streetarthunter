import PropTypes from "prop-types";
import "./InfoStreetArt.scss";

function InfoStreetArt({ streetArtInfo, artistInfo }) {
  if (!streetArtInfo || !artistInfo) {
    return null;
  }

  const { title, description, picture } = streetArtInfo;
  const { name, bio } = artistInfo;

  return (
    <div className="info-street-art">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={picture} alt="Artwork" />
      <h3>Artiste: {name}</h3>
      <p>Bio: {bio}</p>
    </div>
  );
}

InfoStreetArt.propTypes = {
  streetArtInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }),
  artistInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
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
