import React, { useContext } from 'react'
import { AppContext } from './Context'
import { NavLink } from 'react-router-dom'

const Movies = () => {
  const {movie, loading} = useContext(AppContext);

  if (loading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }
  return (
    <>
    
    <section className='movie-page'>
      <div className='container grid grid-4-col'>
        {
        movie.map((curMovie)=>{
          const {imdbID, Title, Poster} = curMovie
          return(
            
          <NavLink to = {`movie/${imdbID}`} key = {imdbID}>
             <div className='card'>
               <div className='card-info'>
                 <h2>{Title}</h2>
                 <img src={Poster} alt = {imdbID}/>
               </div>
             </div>
          </NavLink>
  
          )
        })
        }
      </div>
    </section>
    </>
  )

  
    
}

export default Movies