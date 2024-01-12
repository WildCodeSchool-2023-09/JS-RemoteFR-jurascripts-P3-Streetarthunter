import PropTypes from "prop-types";

function InfoStreetArt({ streetArtInfo, artistInfo }) {
  if (!streetArtInfo || !artistInfo) {
    return null;
  }

  return (
    <div>
      <h2>{streetArtInfo.title}</h2>
      <p>{streetArtInfo.description}</p>
      <img src={streetArtInfo.picture} alt="Artwork" />

      <h3>Artiste: {artistInfo.name}</h3>
      <p>Bio: {artistInfo.bio}</p>
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
