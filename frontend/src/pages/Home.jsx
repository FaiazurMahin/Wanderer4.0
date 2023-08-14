import React from 'react';
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import experienceImg from "../assets/images/experience.png";

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';

import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';

import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';

import Testimonials from '../components/Testimonial/Testimonials';

const Home = () => {
  return <>
  <section>
    <Container>
      <Row>
        <Col lg="6">
          <div className="hero__content">
            <h1>Traveling opens the door to creating <span className="highlight">memories</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nam. Vero deserunt deleniti aliquid. Magnam illo doloribus dolorum nisi ullam dignissimos velit odit? Ut enim suscipit unde asperiores quasi cum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod totam provident. Nesciunt enim ex soluta quod omnis voluptate voluptas sequi accusantium? Accusantium, temporibus deleniti. Fugiat quod aliquid adipisci totam.</p>
          </div>
        </Col>

        <Col lg="2">
        <div className="hero__img-box">
          <img src={heroImg} alt="" />
        </div>
        </Col>

        <Col lg="2">
        <div className="hero__img-box mt-4">
          <video src={heroVideo} alt="" />
        </div>
        </Col>

        <Col lg="2">
        <div className="hero__img-box">
          <img src={heroImg02} alt="" />
        </div>
        </Col>

        <SearchBar/>

      </Row>
    </Container>
  </section>
  {/* hero section starts here */}
  <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className='subtitle'>What we serve</h5>
          <h2 className='services__title'>We offer our best services</h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
  </section>

  {/* featured tour section starts here */}
  <section>
    <Container>
      <Row>
        <Col lg='12' className='mb-5'>
          <h5 className='subtitle'>Explore the world</h5>
          <h2 className='featured__tour-title'>Our Featured Tours</h2>
        </Col>
        <FeaturedTourList/>
      </Row>
    </Container>
  </section>

  {/* experience section starts here */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
        <div className="experience__content">
          <h5 className='subtitle'>Experience</h5>
          <h2 className='experience__title'>With our all experience <br/> we will serve you the best</h2>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem fugiat sit ea hic illum minus at blanditiis eligendi voluptatem, explicabo sapiente ipsam possimus molestiae fuga dolorum magnam, beatae est consequuntur.</p>

        </div>
        
        <div className="counter__wrapper d-flex align-items-center gap-5">
          <div className="counter__box">
            <span>12K+</span>
            <h6>Successful Trips</h6>
          </div>

          <div className="counter__box">
            <span>2K+</span>
            <h6>Regular Clients</h6>
          </div>

          <div className="counter__box">
            <span>15</span>
            <h6>Years of Experience</h6>
          </div>
        </div>

        </Col>
        <Col lg='6'>
          <div className="experience__ig">
            <img src={experienceImg} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  </section>

  {/* gallery section starts here*/}
  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <div className="gallery">
          <h5 className='subtitle'>Gallery</h5>
          <h2 className='gallery__title'>Have a look at our<br/> customers' tour gallery</h2>
          </div>
        </Col>

        <Col lg='12'>
          <MasonryImagesGallery/>
        </Col>
      </Row>
    </Container>
  </section>

  {/* testimonial section starts here */}
  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <div className="testimonial">
          <h5 className='subtitle'>Testimonials</h5>
          <h2 className='testimonial__title'>What our customers say about us</h2>
          </div>
        </Col>
        <Col lg='12'>
          <Testimonials/>
        </Col>
      </Row>
    </Container>
  </section>
</>
}
export default Home