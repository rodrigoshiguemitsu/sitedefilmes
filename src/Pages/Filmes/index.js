import { Link } from 'react-router-dom'

import './Style.Filmes.css'

function Filmes(){
    return(
        <div>
        <div className='submenu'>
        <span><h1 className='pointer'>Filmes</h1></span>
        
        <div className='submenu-content'>
                
                <ul>
                    <li>
                       <Link to='./Cartaz' className='subcategorias'><span>Cartaz</span></Link>
                    </li>
                    <li>
                        <Link to='./Estreia'className='subcategorias'><span>Estreia</span></Link>
                    </li>
                    <li>
                        <Link to='./Popular'className='subcategorias'><span>Popular</span></Link>
                    </li>
                </ul>
        </div>

        

        </div>
        </div>
    )
}

export default Filmes