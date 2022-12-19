import {useEffect, useState} from 'react';
import api from '../../service/api';

function Home() {

  const [filmes, setFilmes] = useState([]);

  useEffect(()=>{

    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params:{
          api_key: 'd6a798909e4d30b9ae3b40401db36827',
          language: "pt-BR",
          page: 1
        }
      });
      console.log(response.data.results);
    }
    loadFilmes();
  }, []);


    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
  
  export default Home;

