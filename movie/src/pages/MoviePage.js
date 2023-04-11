import React ,{useState, useEffect}from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { URL_API } from '../components/Context'

const MoviePage = () => {
  const {id} =  useParams()
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);


  const getMovies = async(url) => {
    try{
      const res = await fetch(url)
      const data = await res.json();
      console.log(data);
      if(data.Response === "True"){
        setLoading(false)
      
        setMovie(data)
      }
      
    }
    catch(error){
      console.log(error)
    }
  };
  useEffect(()=>{
// debouncing code
    let timer = setTimeout(()=>{
      getMovies(`${URL_API}&i=${id}`);
    }, 500)
    return () => clearTimeout(timer)
  }, [id])
  if (loading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <p className="card-text">{movie.Writer}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default MoviePage