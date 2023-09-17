//libs resources
import { BrowserRouter, Routes, Route } from 'react-router-dom'



// components
import Header from './components/header/Header'
import PageProduct from './components/page-product/PageProduct'


function App() {


  return (
    <>
    
      <BrowserRouter>
      <Header />

      <Routes>
                <Route path='/' element={<PageProduct />}/>

      </Routes>


      </BrowserRouter>
     
     
    </>
  )
}

export default App
