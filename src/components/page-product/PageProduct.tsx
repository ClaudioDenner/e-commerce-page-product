import styles from './PageProduct.module.css'
import { useContext, useState } from 'react'
import { CartContext, StatusCartContext} from '../../App'
import Image01 from '/images/image-product-1.jpg'
import Image02 from '/images/image-product-2.jpg'
import Image03 from '/images/image-product-3.jpg'
import Image04 from '/images/image-product-4.jpg'
import Thumb01 from '/images/image-product-1-thumbnail.jpg'
import Thumb02 from '/images/image-product-2-thumbnail.jpg'
import Thumb03 from '/images/image-product-3-thumbnail.jpg'
import Thumb04 from '/images/image-product-4-thumbnail.jpg'
import iconCart from '/images/icon-cart-white.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';







function PageProduct() {

  const item = {
    name:'Fall Limited Edition Sneakers',
    price:125.00,
    manufacturer:'SNEAKER COMPANY',
    discount:0.5

  }

  const cart = useContext(CartContext)
  const statusCart = useContext(StatusCartContext)
  const [quantCart, setQuantCart] = useState(1)
  

  function addToCart (){
    //
    cart.setCart({
      item: item.name,
      quant:cart.cart.quant+quantCart,
      valueUnit:item.price,
      total:(cart.cart.quant+quantCart)*item.price
    })
    setQuantCart(1)
    statusCart.setStatusCart(true)
  }


  

  
  return (
    <div  className={styles.container}>
        <div className={styles.image_product}>
          {/* imagem cover para desktop */}


          <img src={Image01} className={styles.image_cover}/>

          {/* carrossel p/mobile */}

          <div className={styles.caroussel}>
          <Swiper
          pagination={true}
          modules={[Navigation, Pagination]}
          navigation={true}
          spaceBetween={50}
          slidesPerView={1}
          
          >
              <SwiperSlide><img src={Image01} alt="Image 1"/></SwiperSlide>
              <SwiperSlide><img src={Image02} alt="Image 2"/></SwiperSlide>
              <SwiperSlide><img src={Image03} alt="Image 2"/></SwiperSlide>
              <SwiperSlide><img src={Image04} alt="Image 2"/></SwiperSlide>
        </Swiper>
        </div>
          

          <div className={styles.container_thumbnails}>
            <img src={Thumb01} className={styles.Thumb}/>
            <img src={Thumb02} className={styles.Thumb}/>
            <img src={Thumb03} className={styles.Thumb}/>
            <img src={Thumb04} className={styles.Thumb}/>
          </div>
        </div>

        <div className={styles.description_product}>
            <span className={styles.description_manufacturer}>{item.manufacturer}</span>
            <h1 className={styles.description_title}>{item.name}</h1>
            <p className={styles.description_product_detail}>
              These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withsand everything the weather can offer.
            </p>
            <span className={styles.description_price}>
              ${item.price.toFixed(2)} <span className={styles.price_discount}>{item.discount*100}%</span>
              <span className={styles.description_last_price2}>${(item.price/item.discount)}</span>
            </span>
            <span className={styles.description_last_price}>${(item.price/item.discount)}</span>
            
            <div className={styles.description_area_buttons}>
              <div className={styles.description_container_1}>
                <span className={styles.button_decrement} onClick={()=> quantCart == 1? setQuantCart(1): setQuantCart(quantCart-1) } >-</span>
                <span className={styles.display_quant}>{quantCart}</span>
                <span className={styles.button_increment} onClick={()=> setQuantCart(quantCart+1)}>+</span>
              </div>
                <button className={styles.button_add_cart} onClick={addToCart}>
                  <img src={iconCart} className={styles.icon_cart}/>
                  Add to cart
                </button>
            </div>
        </div>
    </div>
  )
}

export default PageProduct