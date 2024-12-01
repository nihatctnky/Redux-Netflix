import { useState, useEffect } from "react"
import api from "../../api";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { baseImgUrl } from './../../constants/index';
import { Link } from 'react-router-dom';

const MovieList = ({ genre }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const params = {
            with_genres: genre.id,
        };
        api
            .get("/discover/movie", { params })
            .then((res) => setMovies(res.data.results));

    }, [])

    console.log(movies);

    return (
        <div className="my-10">
            <h1 className="text-3xl  font-semibold mn-3">{genre.name}</h1>

            <Splide options={{ autoWidth: true, gap: "20px", pagination: false, type: "loop" }}>

                {movies?.map((movie, key) =>
                (<SplideSlide key={key}>
                    <Link to={`/movie/${movie.id}`}>
                        <img className="max-w-[300px] cursor-pointer rounded transition hover:scale-[1.01] " src={baseImgUrl + movie.poster_path} />
                    </Link>
                </SplideSlide>))}

            </Splide>

        </div>
    )
}

export default MovieList