import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, year, summary, genres }) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2>
                {/* Link를 통한 브라우저 새로고침 없이 페이지 이동(빠른 전환 가능) */}
                <Link to={`/movie/${id}`}>
                    {title} ({year})
                </Link>
            </h2>
            <p>
                {summary.length > 220
                    ? `${summary.slice(0, 220)} ...`
                    : summary}
            </p>
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
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string), // 장르 없을 경우도 있어서 isRequired X
};

export default Movie;
