import React from 'react';
import  { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './creaters.css';// Custom styles for the component
import Image1 from '../../assets2/image8@2x-1.png';
import Image2 from '../../assets2/image6@2x-2.png';
import Image3 from '../../assets2/image4@2x-3.png';
import Image4 from '../../assets2/image3@2x-4.png';
import Image5 from '../../assets2/image9@2x-5.png';
import Image6 from '../../assets2/image7@2x-6.png';
import Image7 from '../../assets2/image5@2x-7.png';
import Stars from '../../assets2/stars (1).svg';
import Badge from '../../assets/badge.svg';
import Vector from '../../assets2/Vector (2).svg';

  const TopCreatersBox = () => {
    useEffect(() => {
      const images = document.querySelectorAll('.images img');
      images.forEach((image) => {
        image.addEventListener('mouseover', () => {
          image.style.transform = 'scale(1.2)';
          image.style.transition = 'transform 0.3s ease';
        });
  
        image.addEventListener('mouseout', () => {
          image.style.transform = 'scale(1)';
        });
      });
  
      return () => {
        images.forEach((image) => {
          image.removeEventListener('mouseover', () => {});
          image.removeEventListener('mouseout', () => {});
        });
      };
    }, []);
    return(
  
   <div className="testimonial">
      <div className="data1">
        <div className="data-child" />
        <div className="data-item" />
        <img className="vector-icon" alt="" src={Vector} />
        <div className="images">
        <img id="image1" className="image-icon3" alt="" src={Image4} />
        <img id="image2" className="image-icon4" alt="" src={Image3} />
        <img id="image3" className="image-icon5" alt="" src={Image7} />
         <img id="image4" className="image-icon6" alt="" src={Image2} />
         <img id="image5" className="image-icon7" alt="" src={Image6} />
         <img id="image6" className="image-icon8" alt="" src={Image1} />
         <img id="image7" className="image-icon9" alt="" src={Image5} />
       </div>
        <div className="review">
          <img className="stars-icon" alt="" src={Stars} />
          <div className="nft-will-open">
            NFT will open thousands of new opportunities for this new
            generation. I feel so proud and blessed that I have seen and taken
            advantage of many great opportunities in this world before millions
            of people have seen them.
          </div>
          <div className="name">
            <div className="rectangle" />
            <div className="victory">
              <img className="badge-icon" alt="" src={Badge} />
              <div className="title">
                <img className="title-child" alt="" src="/group-1878.svg" />
                <div className="title1">EXPERT</div>
              </div>
            </div>
            <div className="sr-designer">Sr. Designer</div>
            <div className="jason-roy">Jason Roy</div>
          </div>
        </div>
      </div>
      <b className="our-top-creators">Our Top Creator’s Words</b>
    </div>
  
  );
};

export default TopCreatersBox;
