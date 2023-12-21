import React from "react"
import { Row } from "react-bootstrap"
import CardMovie from "./CardMovie"
import Page from "./pagination"

const MoviesList = ({ movies, getPage, pageCount }) => {
    return (
        <div className="">
            <Row className="mt-3">
                {
                    movies.length >= 1 ? (movies.map((movie) => {
                        return (
                            <CardMovie key={movie.id} movie={movie} />
                        )
                    })) :
                        <h2 className="text-center p-5">There are no movies for this</h2>
                }

                {
                    movies.length >= 1 ? (movies.map((movie) => {
                        return (
                            <Page getPage={getPage} pageCount={pageCount} />
                        )
                    })) :
                        null
                }
            </Row>
        </div >
    )
}

export default MoviesList