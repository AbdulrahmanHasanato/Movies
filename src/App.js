import NavBar from "./components/NavBar"
import MoviesList from "./components/MoviesList"
import { Container } from "react-bootstrap"
import axios from "axios"
import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MovieDetails from "./components/MovieDetails"

function App() {
  const [movies, setMovies] = useState([])
  const [pageCount, setPageCount] = useState(0)

  //Get all movies by Axios
  const getAllMovies = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=<<Your_API_Key>>&language=en")
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
  }

  //Get current page
  const getCurrentPage = async (pageNum) => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=<<Your_API_Key>>&language=en&page=" + pageNum)
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
  }

  useEffect(() => {
    getAllMovies()
  }, [])

  //To search in API
  const search = async (word) => {
    if (word === "") {
      getAllMovies()
    } else {
      const res = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=<<Your_API_Key>>&language=en&query=" + word)
      setMovies(res.data.results)
      setPageCount(res.data.total_pages)
    }
  }

  return (
    <div className="font color-body">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList movies={movies} getPage={getCurrentPage} pageCount={pageCount} />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
