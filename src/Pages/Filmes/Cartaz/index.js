import {useState,useEffect} from'react'
import api from "../../../services/api"
import { Link } from 'react-router-dom'

import './cartaz.css'



function Cartaz(){
    const[filmes,setFilmes]=useState([''])
    
    useEffect (() => {
        async function loadFilmes(){
            const response = await api.get ("/movie/now_playing",{
                params:{
                    api_key:"a28edd9f7de2bff6b5fe24b3abc83a17",
                    language:"pt-br"
                }
            }
    
            )
            setFilmes(response.data.results)
        }
        loadFilmes ()
    }, [])

    console.log(filmes)
    
    return(
        <div id='principal'>
        <h1>Cartaz</h1>
        
        <div className='container'>
        {filmes.map((filme) => {
            return(
                   
                    <article  key={filme.id}>
                        <div className='titulofilme'>
                    <strong>{filme.title}</strong>
                        </div>
                    <img  src={`https://image.tmdb.org/t/p/w200/${filme.poster_path}`} alt={filmes.title} />
                    <div className='botaodetalhes'>
                    <Link to={`../Detalhes/${filme.id}`}><span>Detalhes</span></Link>
                    
                    </div>
                    </article>
                    
                    
            )
        }
        )
        
    }
    </div>
    </div>
    )
}
export default Cartaz