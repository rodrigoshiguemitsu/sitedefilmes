import { BrowserRouter, Routes, Route } from'react-router-dom'

import Header from './Components/Header'

import Cartaz from './Pages/Filmes/Cartaz'
import Estreia from './Pages/Filmes/Estreia'
import Popular from './Pages/Filmes/Popular'
import ExibirHoje from './Pages/Series/ExibirHoje'
import NaTvAgora from './Pages/Series/NaTvAgora/NaTvAgora'
import PopularesAgora from './Pages/Series/PopularesAgora/PopularesAgora'
import Formulario from './Pages/Contato/Formulario/Formulario'
import Detalhes from './Components/Detalhes/detalhes'
import Filmes from './Pages/Filmes'
import Favoritos from './Pages/Favoritos'



function Rotas(){
    return (
        <BrowserRouter>
        <Header />
        
        <Routes>
        
        <Route path='Cartaz' element = {<Cartaz/>} />
        <Route path='Estreia' element = {<Estreia/>} />
        <Route path='Popular' element = {<Popular/>} />
        <Route path='ExibirHoje' element = {<ExibirHoje/>}/>
        <Route path='NaTvAgora' element = {<NaTvAgora/>}/>
        <Route path='PopularesAgora' element ={<PopularesAgora/>}/>
        <Route path='Formulario' element = {<Formulario/>}/>
        <Route path='/Detalhes/:id' element = {<Detalhes/>}/>
        <Route path='Filmes' element = {<Filmes />}/>
        <Route path='Favoritos' element ={<Favoritos />}/>
       
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas