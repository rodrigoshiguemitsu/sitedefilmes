import Filmes from "../../Pages/Filmes"

import Series from "../../Pages/Series"

import Contato from "../../Pages/Contato"

import './Header.css'
import Favoritos from "../../Pages/Favoritos"
import { Link } from 'react-router-dom'



function Header(){
    return(
        <div className="cabecalho">
            <h1>Sinopse de Filmes</h1>
            <div className="subtitulos">
                <Filmes />
            </div>
            <div className="subtitulos">
                <Series />
            </div>
            <div className="subtitulos">
                <Contato />
            </div>

            <div>
                        <Link to='../../../Favoritos'className='subtitulos'><span><Favoritos/></span></Link>
            </div>      

           
        
        </div>
    )
}

export default Header