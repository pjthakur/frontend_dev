import React, { useEffect, useState } from "react";

const AppContext = React.createContext();
export const URL_API = `https://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

const AppProvider = ({children}) =>{
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState({show:"false", msg:""});
  const [query, setQuery]= useState ("welcome")


  const getMovies = async(url) => {
    try{
      const res = await fetch(url)
      const data = await res.json();
      console.log(data);
      if(data.Response === "True"){
        setLoading(false)
        setError({
          show:false,
          msg:"",
        })
        setMovie(data.Search)
      }
      else{
        setError({
          show:true,
          msg:data.Error,
        })
      }
    }
    catch(error){
      console.log(error)
    }
  };
  useEffect(()=>{
// debouncing code
    let timer = setTimeout(()=>{
      getMovies(`${URL_API}&s=${query}`);
    }, 500)
    return () => clearTimeout(timer)
  }, [query])
// debouncing code
 return  <AppContext.Provider value = {{ movie, error, loading , query, setQuery} }>{children}</AppContext.Provider>
}
export {AppContext, AppProvider};