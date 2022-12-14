import { useEffect, useState } from "react";
import Movie from "./components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    // 영화 목록 생성 함수 (API 호출)
    const getMovies = async () => {
        // API 호출 결과 json 반환
        const json = await (
            await fetch(
                "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
            )
        ).json();

        // 결과 movies 저장
        setMovies(json.data.movies);
        // 로딩 상태 종료
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            year={movie.year}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
export default Home;
