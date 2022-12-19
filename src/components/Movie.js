import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, year, summary, genres }) {
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie__img} />
            <div>
                <h2 className={styles.movie__title}>
                    {/* Link를 통한 브라우저 새로고침 없이 페이지 이동(빠른 전환 가능) */}
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{year}</h3>
                <p>
                    {summary.length > 220
                        ? `${summary.slice(0, 220)} ...`
                        : summary}
                </p>
                <ul className={styles.movie__genres}>
                    {/* genres가 존재할 경우에만(Optional Chanining) */}
                    {genres?.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
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
