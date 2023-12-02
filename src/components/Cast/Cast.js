import { BASE_POSTER_URL, DEFAULT_POSTER } from "imgLinks/imgLinks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "servers/api";
import { CastList, CastContainer, CastItem, ImgCast, CastName, CastCharacter} from "./Cast.styled";
import { Loader } from 'components/Loader/Loader';



const Cast = () => {
  const [cast, setCast] = useState([])
  const { movieId } = useParams();
  const [isLiading, setIsLoading] = useState(false);


  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getCast() {
      try {
        setIsLoading(true);
        const showCast = await fetchCast(movieId);
        setCast([...showCast.cast]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getCast();
    
  }, [movieId])
  return (
    <CastContainer>
      {isLiading && (<Loader/>)}
      <CastList>
      {cast.map(({id, name, character, profile_path }) => {
        return (
          <CastItem key={id}>
            <ImgCast src={`${profile_path? BASE_POSTER_URL + profile_path: DEFAULT_POSTER}`} alt={name} />
            <CastName>Name: {name}</CastName>
            <CastCharacter>Character: {character}</CastCharacter>
          </CastItem>
        )
      })}
      </CastList>
    </CastContainer>
  );
}

export default Cast;