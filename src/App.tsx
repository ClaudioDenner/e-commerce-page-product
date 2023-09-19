import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import PageProduct from './components/page-product/PageProduct'
import { createContext, useState} from 'react';


type cartType = {
  item:string,
  quant:number,
  valueUnit:number,
  total:number
}
type PropsContextCart = {
    cart:cartType,
    setCart: React.Dispatch<React.SetStateAction<cartType>>
}

const DEFAULT_VALUE_CART = {
  cart:{
    item:'',
    quant:0,
    valueUnit:0,
    total:0
  },
  setCart: ()=>{}
}

export const CartContext = createContext<PropsContextCart>(DEFAULT_VALUE_CART)



function App() {


  const [cart, setCart] = useState(DEFAULT_VALUE_CART.cart)
  

  return (
    <>
    <CartContext.Provider value={{cart, setCart}}> 
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<PageProduct />}/>
        </Routes>
      </BrowserRouter>
      </CartContext.Provider>
    </>
  )
}

export default App
