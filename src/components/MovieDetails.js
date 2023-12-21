import React, { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

const MovieDetails = () => {
    const param = useParams()
    console.log(param.id)
    const [movieDetails, setMovieDetails] = useState([])

    //Get movie details
    const getMovieDetails = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=<<Your_API_Key>>&language=en`)
        setMovieDetails(res.data)
    }

    useEffect(() => {
        getMovieDetails()
    }, [])

    return (
        <div className="">
            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-4">
                    <div className="card-details d-flex align-items-center">
                        <img className="img-movie w-30" src={`https://image.tmdb.org/t/p/w500/` + movieDetails.poster_path} alt="asd" />
                        <div className="justify-content-center text center mx-auto">
                            <p className="card-text-details border-bottom">
                                Movie name: {movieDetails.title}
                            </p>
                            <p className="card-text-details border-bottom">
                                Movie Date: {movieDetails.release_date}
                            </p>
                            <p className="card-text-details border-bottom">
                                Vote count: {movieDetails.vote_count}
                            </p>
                            <p className="card-text-details border-bottom">
                                Vote average: {movieDetails.vote_average}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-1">
                    <div className="card-story d-flex flex-column align-items-start">
                        <div className="text-end p-4">
                            <p className="card-text-title border-bottom">Story:</p>
                        </div>
                        <div className="text-end px-2">
                            <p className="card-text-story">{movieDetails.overview}</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md="10" xs="12" sm="12" className="mt-2 d-flex justify-content-center">
                    <Link to="/" >
                        <button style={{ backgroundColor: "#b45b35", border: "none" }} className="btn btn-primary mx-2">Back to main page</button>
                    </Link>
                    <a href={movieDetails.homepage} target="_blank">
                        <button style={{ backgroundColor: "#b45b35", border: "none" }} className="btn btn-primary mx-2">Watch movie</button>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default MovieDetails