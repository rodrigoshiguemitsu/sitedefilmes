import { Link } from 'react-router-dom'

import './Series.css'

function Series(){
    return(
        <div>
        <div className='submenu'>
        <span><h1 className='pointer'>Series</h1></span>
        
        <div className='submenu-content'>
                
                <ul >
                    <li>
                       <Link to='./ExibirHoje' className='subcategorias'><span>Exibir Hoje</span></Link>
                    </li>
                    <li>
                       <Link to='./NaTvAgora' className='subcategorias'><span>Na Tv Agora </span></Link>
                    </li>
                    <li>
                       <Link to='./PopularesAgora' className='subcategorias'><span>Populares Agora </span></Link>
                    </li>
                    
                   
                </ul>
        </div>

        

        </div>
        </div>
    )
}

export default Series