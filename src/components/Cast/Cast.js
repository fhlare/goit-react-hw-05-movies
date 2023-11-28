import { BASE_POSTER_URL } from "imgLinks/imgLinks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "servers/api";



export const Cast = () => {
  const [cast, setCast] = useState(null)
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getCast() {
      try {
        const showCast = await fetchCast(movieId);
        console.log(showCast.cast);
        setCast(showCast.cast);
      } catch (error) {
        console.error(error);
      }
    }
    getCast();
    
  }, [movieId])
  return (
    <div>
      <ul>

      </ul>
      {cast.map(({id, name, character, profile_path }) => {
        return (
          <li key={id}>
            <img src={`${BASE_POSTER_URL + profile_path}`} alt={name} width="200"/>
            <p>Name: {name}</p>
            <p>Character: {character}</p>
          </li>
        )
      })}
    </div>
  );
}