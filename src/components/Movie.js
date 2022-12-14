import PropTypes from "prop-types";

function Movie({ coverImg, title, year, summary, genres }) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2>
                {title} ({year})
            </h2>
            <p>{summary}</p>
            <ul>
                {/* genres가 존재할 경우에만(Optional Chanining) */}
                {genres?.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string), // 장르 없을 경우도 있어서 isRequired X
};

export default Movie;
