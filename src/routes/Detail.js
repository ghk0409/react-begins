import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <h2>Loading...</h2>
    ) : (
        <div>
            <img src={movie.large_cover_image} alt={movie.title} />
            <h2>
                {movie.title} ({movie.year})
            </h2>
            <h4>Uploaded: {movie.date_uploaded}</h4>
            <h4>Rating: {movie.rating}</h4>
            <p>{movie.description_full}</p>
            <ul>
                {/* genres가 존재할 경우에만(Optional Chanining) */}
                {movie.genres?.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

export default Detail;
