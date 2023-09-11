import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import './favoritos.style.css'

function Favoritos(){

    const [ filmes, setFilmes]= useState ([])
    useEffect(() => {
        const minhaLista = localStorage.getItem('@filmesfavoritos')
        setFilmes(JSON.parse(minhaLista)|| [])
    }, [])
    
    function excluirFilme(id){
        let filtroFilmes= filmes.filter((item)=>{
            return(item.id !== id)
        } )
        setFilmes (filtroFilmes)
        localStorage.setItem(`@filmesfavoritos`,JSON.stringify(filtroFilmes))

}
    return(
        <div>
            
            <h1> Favoritos </h1>
            <ul>
                {filmes.map((filme)=>{
                    return(
                        <div >
                            <div>
                                <li key={filme.id}>
                                    <span>{filme.title}</span>
                                </li>
                            </div>
                            <div>
                                <Link to={`/Detalhes/${filme.id}`}>Ver Detalhes</Link>
                                <button onClick={()=>excluirFilme(filme.id)}>Excluir</button>
                            </div>
                        </div>

                    )}
                )}
            
            </ul>
        </div>
    )
}

export default Favoritos