import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
    // URL parameter 값 가져오기
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();

    // 영화 id 값을 이용한 해당 영화 정보 API 호출 및 state 설정
    const getMovieDetail = useCallback(async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();

        setMovie(json.data.movie);
        setLoading(false);
    }, [id]);

    useEffect(() => {
        getMovieDetail();
    }, [getMovieDetail]);

    return loading ? (
        <div className={styles.loader}>
            <span>Loading...</span>
        </div>
    ) : (
        <div className={styles.container}>
            <div className={styles.movie}>
                <img
                    src={movie.medium_cover_image}
                    alt={movie.title}
                    className={styles.movie__img}
                />
                <div>
                    <h2 className={styles.movie__title}>{movie.title}</h2>
                    <h3 className={styles.movie__year}>{movie.year}</h3>
                    <h4>Uploaded: {movie.date_uploaded}</h4>
                    <h4>Rating: {movie.rating}</h4>
                    <p>{movie.description_full}</p>
                    <ul className={styles.movie__genres}>
                        {/* genres가 존재할 경우에만(Optional Chanining) */}
                        {movie.genres?.map((g) => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Detail;
