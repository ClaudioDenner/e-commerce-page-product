import styles from './Header.module.css'
import logo from '/images/logo.svg'
import iconCart from '/images/icon-cart.svg'
import avatar from '/images/cdenner.png'
import { NavLink, Link } from 'react-router-dom'
import { useContext} from 'react'
import { CartContext, StatusCartContext } from '../../App'
import Cart from '../cart/Cart'
import imgMenuMobile from '/images/icon-menu.svg'




function Header() {



  const valueCart = useContext(CartContext)
  const statusCart = useContext(StatusCartContext)


  

  return (
    <nav className={styles.nav}>

       <div className={styles.container}>  
          <img src={imgMenuMobile} className={styles.buttonMenuMobile}/>
          <Link to="/">
            <img src={logo} className={styles.logo}/>
          </Link>
          


          <ul className={styles.ul}>
            <li>
              <NavLink
                to="/collections"
                className={({isActive, isPending})=> isPending ? "" : isActive ? styles.active : "" }
                >
              Collections
             </NavLink>
            </li>
            <li>
              <NavLink
                to="/men"
                className={({isActive, isPending})=> isPending ? "" : isActive ? styles.active : "" }
                >
              Men
             </NavLink>
            </li>
            <li>
              <NavLink
                to="/women"
                className={({isActive, isPending})=> isPending ? "" : isActive ? styles.active : "" }
                >
              Women
             </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({isActive, isPending})=> isPending ? "" : isActive ? styles.active : "" }
                >
              About
             </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({isActive, isPending})=> isPending ? "" : isActive ? styles.active : "" }
                >
              Contact
             </NavLink>
            </li>

          </ul>

       </div>

       <div className={styles.container}>
          <div className={styles.statusCart} onClick={()=>statusCart.setStatusCart(!statusCart.statusCart)}>
            <img src={iconCart} className={styles.iconCart}/>
              {valueCart.cart.quant ==0 ? '': <span className={styles.quantItemsCart}>{valueCart.cart.quant} </span>}
              {statusCart.statusCart ? <Cart />:''}
              
            </div>
          
          
          <img src={avatar} className={styles.avatar}/>
       </div>
    </nav>
  )
}

export default Header