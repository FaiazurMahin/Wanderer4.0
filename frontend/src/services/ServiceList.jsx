import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Calculate Weather`,
      desc: `Compute atmospheric conditions, predict forecasts, calculate weather's ever-changing tapestry with precision and insight.`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `Engaging, knowledgeable, personable guide creating unforgettable journeys, turning exploration into an enriching experience.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `Tailor your tour, craft unique memories. Personalized adventures designed just for you, a journey unlike any other.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList