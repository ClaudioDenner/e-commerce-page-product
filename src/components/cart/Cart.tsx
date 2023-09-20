import styles from './Cart.module.css'
import {useContext, useEffect} from 'react'
import { CartContext } from '../../App'
import TumbProduct from '/images/image-product-1-thumbnail.jpg'
import icon_trash from '/images/icon-delete.svg'

function Cart() {

    

    useEffect(()=>{
        const cartModal = document.getElementById('cart')
        window.onclick = (event)=>{
            console.log(event.target)
            console.log(cartModal)
        }
    }

      
)

    const cart = useContext(CartContext)

    function clearCart(){
        cart.setCart({
            item:'',
            quant:0,
            valueUnit:0,
            total:0
        })
    }

  return (
    <div className={styles.container} id='cart'>

     <h1>Cart</h1>

     {
        cart.cart.quant == 0 ?
            <div className={styles.content_empty}>Your Cart is Empty</div>
            :
            <div className={styles.content}>
                <img src={TumbProduct}/>
                <div className={styles.content_description}>
                    <span className={styles.content_description_name}>{cart.cart.item}</span>
                    <span>
                        {`$${cart.cart.valueUnit.toFixed(2)} x ${cart.cart.quant} `}
                            <span className={styles.total_cart}>${cart.cart.total.toFixed(2)}</span>
                    </span>
                    
                </div>
                <img src={icon_trash} className={styles.icon_tresh} onClick={clearCart} />
                
            </div>

    }

    </div>
  )
}

export default Cart