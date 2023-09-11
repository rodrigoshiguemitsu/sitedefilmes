import { Link } from 'react-router-dom'

import './Style.Contato.css'

function Contato(){
    return(
        <div>
        <div className='submenu'>
        <span><h1 className='pointer'>Contato</h1></span>
        
        <div className='submenu-content'>
                
                <ul>
                    <li>
                       <Link to='./Formulario' className='subcategorias'><span>Cadastre-se</span></Link>
                    </li>
                    
                   
                </ul>
        </div>

        

        </div>
        </div>
    )
}

export default Contato