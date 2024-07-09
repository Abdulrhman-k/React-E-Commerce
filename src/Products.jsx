import React , {useEffect, useState} from 'react'
import { Container, Col,Row  } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import axios from 'axios';



const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get("data.json")
    .then((res) => {
      setProducts(res.data.products);
    })
  } ,[])
  return (
    <section className='products'>
        <Container>
            <Row>
                <Col lg={6} md={5} sm={12} className='col-1'>
                <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {products.slice(0, 4).map((product) => 
            <SwiperSlide key={product.id}><a href={product.link}><img src={product.img} alt="" /></a></SwiperSlide>
        )}
      </Swiper>
    </>
    <h1 className='h-4'>Couchs</h1>
    <a className='a-1' href="/Cartitems">More</a>
                </Col>
                <Col lg={6} md={5} sm={12} className='col-2'>
                <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {products.slice(0, 4).map((product) => 
            <SwiperSlide key={product.id}><a href={product.link}><img src={product.img} alt="" /></a></SwiperSlide>
        )}
      </Swiper>
    </>
    <h1 className='h-2'>Tables</h1>
    <a className='a-3' href="/ProList">More</a>
                </Col>
                <Col lg={6} md={5} sm={12} className='col-3'>
                <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {products .slice(0, 4).map((product) => 
            <SwiperSlide key={product.id}><a href={product.link}><img src={product.img} alt="" /></a></SwiperSlide>
        )}
      </Swiper>
    </>
    <h1 className='h-3'>Chairs</h1>
    <a className='a-1' href="/Plist">More</a>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Products