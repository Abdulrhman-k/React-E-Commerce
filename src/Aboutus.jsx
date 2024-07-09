import React from 'react'
import { Container, Col,Row  } from 'react-bootstrap'
import Image1 from './images/x.jpeg';

const Aboutus = () => {
  return (
    <section className='aboutus'>
      <Container>
        <Row>
          <Col lg={6} md={5} sm={12}>
            <img className='img-5' src={Image1} />
          </Col>
          <Col lg={6} md={7} sm={12}>
            <h1 className='h-5'>Ownered By : Ranin Nasser</h1>
            <p className='p-2'>
              F.A.S for Export 
            We strive to be a pioneer in the field 
of furniture for export 
Made in Egypt , Export all over the world 
To order , in box 
Tax No 538-116-188
            </p>
            <p className='p-2'>
            نطمح ان نكون رواد تصدير الاثاث حول العالم 
صناعة مصرية 🇪🇬 تصدر الى جميع انحاء العالم 🚚
‎للطبات و التواصل عبر الخاص 
‎واتساب / 00201094873854
‎الرقم الضريبي (  538-116-188 )
            </p>
          </Col>
          <Col lg={6} md={5} sm={12}>
          <iframe className='maps' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5031.4801359361145!2d31.248289240450923!3d29.966115119195766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1716925128499!5m2!1sar!2seg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Col>
          <Col className='col-a' lg={6} md={7} sm={12}>
            <a className='a-2' href="https://l.wl.co/l?u=https%3A%2F%2Ft.me%2FfurnitureArabicstyle">https://l.wl.co/l?u=https%3A%2F%2Ft.me%2FfurnitureArabicstyle</a>
            <br />
            <br />
            <a className='a-2' href="https://l.wl.co/l?u=https%3A%2F%2Ft.me%2FStylishOutfitters">https://l.wl.co/l?u=https%3A%2F%2Ft.me%2FStylishOutfitters</a>
            <br />
            <br />
            <a className='a-2' href="raninnasser770@gmail.com">raninnasser770@gmail.com</a>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Aboutus
// 3700 Monroe St, ديربورن MI 48124, الولايات المتحدة, Dearborn, MI, US