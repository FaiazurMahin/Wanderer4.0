import React from 'react';
import '../styles/about.css';
import Newsletter from '../shared/Newsletter';

const AboutSection = () => {
    return (
        <><div className="about-section">
            <h2>Welcome to Wanderer</h2>
            <p>Your passport to unforgettable journeys and remarkable adventures around the world!</p>

            <p>At Wanderer, we believe that travel is not just about visiting new places; it's about creating cherished memories, fostering cultural understanding, and enriching your life through unique experiences. With a passion for exploration and a commitment to exceptional service, we are here to turn your travel dreams into reality.</p>

            <h3>Why Choose Wanderer?</h3>
            <ol>
                <li>
                    <strong>Tailored Itineraries:</strong> We understand that every traveler is unique. Our team of experienced travel experts works closely with you to design personalized itineraries that match your interests, preferences, and budget. Whether you're seeking a relaxing beach getaway, an adrenaline-pumping adventure, or a cultural immersion, we've got you covered.
                </li>
                <li>
                    <strong>Worldwide Destinations:</strong> From the sun-soaked beaches of Bali to the majestic peaks of the Swiss Alps, and from the bustling markets of Marrakech to the serene temples of Kyoto, we offer a diverse range of destinations to satisfy every wanderlust.
                </li>
                <li>
                    <strong>Expert Guidance:</strong> Our travel advisors are seasoned globetrotters who possess in-depth knowledge about various destinations. They provide valuable insights, insider tips, and practical advice to ensure you make the most of your journey.
                </li>
                <li>
                    <strong>Seamless Planning:</strong> Planning a trip can be overwhelming, but we're here to simplify the process. We take care of the logistics, accommodations, transportation, and other details, so you can focus on creating unforgettable memories.
                </li>
                <li>
                    <strong>Unparalleled Support:</strong> Your comfort and safety are our top priorities. We offer 24/7 support throughout your journey, ensuring you have a worry-free and enjoyable experience from the moment you step out your door to the moment you return home.
                </li>
                <li>
                    <strong>Sustainability:</strong> We're committed to responsible travel that respects local cultures and environments. We strive to minimize our impact on the destinations we visit, while also contributing positively to the communities we engage with.
                </li>
            </ol>

            <p>Join us on a journey of discovery and adventure that will leave you with stories to tell for a lifetime. Let Wanderer be your trusted partner in turning your travel dreams into cherished memories. Explore the world with us and unlock the wonders that await.</p>

            <p>Contact us today to start planning your next extraordinary escape with Wanderer!</p>
        </div>
        <div className="newsletter-section">
                <Newsletter /> {/* Include the Newsletter component */}
            </div></>
        
    );
}

export default AboutSection;
