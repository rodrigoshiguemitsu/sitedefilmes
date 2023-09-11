import {useState,useEffect} from'react'
import { useParams } from "react-router-dom"
import api from '../../services/api'
import React from 'react'
import './detalhes.style.css'





function Detalhes(){
    const{id} = useParams()
    const[detalhes,setDetalhes]=useState([''])

    
    useEffect (() => {
        async function loadDetalhes(){
            const response = await api.get (`/movie/${id}`,{
                params:{
                    api_key:"a28edd9f7de2bff6b5fe24b3abc83a17",
                    language:"pt-br"
                }
            }
            )
            setDetalhes(response.data)
        }
        loadDetalhes()
    },)

    function botaoSalvar(){
        const minhaLista =localStorage.getItem('@filmesfavoritos')
        let filmesSalvos = JSON.parse(minhaLista) || []

        const verificarfilmes = filmesSalvos.some ( ( filmesSalvo )=> filmesSalvo.id===detalhes.id )
        if(verificarfilmes){
            alert('Filme ja esta salvo')
            return
        }
        filmesSalvos.push(detalhes)
        localStorage.setItem('@filmesfavoritos',JSON.stringify(filmesSalvos) )
        alert('FILME SALVO COM SUCESSO')
    }
    return (
           
            <article className='main'>
            <div className='title'>
            <strong>{detalhes.title}</strong><br/><br/>
            </div>
            <div className='imagem'>
            <img  src={`https://image.tmdb.org/t/p/w300/${detalhes.poster_path}`} alt={detalhes.title} /><br/><br/>
            </div>
            <div className='overview'> 
            <strong>{detalhes.overview}</strong><br/><br/>
            </div>
            <div className='botao'>
            <button  onClick={botaoSalvar}>Clicar aqui</button>
            </div>
            
        </article>
        
    )
}


    

export default Detalhes