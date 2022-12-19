import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../service/api";

function Filme() {

  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadingFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: 'd6a798909e4d30b9ae3b40401db36827',
          language: "pt-BR"
        }
      })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("NAo encontrado");
        })
    }

    loadingFilme();


    return ()=>{
      console.log("Componente desmontado");
    }

  }, []);


  if(loading){
    return(
      <div className='filme-info'>
        <h2>Carregando Detalhes</h2>
      </div>
    );
  }

  return (
    <div className='filme-info'>
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliaçao: {filme.vote_average}</strong>
    </div>
  );
}

export default Filme;