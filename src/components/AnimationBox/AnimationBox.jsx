import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
 import './animation.css';// Custom styles for the component
import People from '../../assets/image10@2x.png';
import People1 from '../../assets/image11@2x.png';
import People2 from '../../assets/image12@2x.png';
import Image from '../../assets/people.svg';
import Symbol from '../../assets/Ethereum-icon-purple_2 1.svg';
import FullScreen from  '../../assets/fullscreen.svg';
import Arrow from '../../assets/arrows.svg';


export const ImageComponent = ({ src }) => {
  return <img className="image-component" alt="Image" src={src} />;
};

export const ArrowComponent = ({ src }) => {
  return <img className="arrow-component" alt="Arrow" src={src} />;
};

export const SymbolComponent = ({ src }) => {
  return <img className="ethereum-icon-purple" alt="Symbol" src={src} />;
};

export const AnimationBox = () => {
  return (
    <div className="background">
      <div className="fullbox">
        <div className="box">
          <div className="weekly-top-nfts-wrapper">
            <div className="weekly-top-nfts">
              <div className="products">
                <div className="card">
                  <div className="bottom">
                    <div className="button">
                      <div className="overlap-group">
                        <div className="text-wrapper">Bid Now</div>
                      </div>
                    </div>
                    <div className="people">
                      <div className="overlap">
                        <img className="ellipse" alt="Ellipse" src={Image} />
                      </div>
                    </div>
                    <div className="text">
                      <div className="price">
                        <div className="div">3.2 ETH</div>
                        <img
                          className="ethereum-icon-purple"
                          alt="Ethereum icon purple"
                          src={Symbol}
                        />
                      </div>
                      <div className="text-wrapper-2">Splash Statue</div>
                    </div>
                  </div>
                  <div className="image">
                    <div className="overlap-2">
                      <div className="bg" />
                      <img className="image-2" alt="Image" src={People} />
                      <img className="fullscreen-svgrepo" alt="Fullscreen svgrepo" src={FullScreen} />
                      <div className="element">
                        <div className="div-wrapper"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-1">
                <div className="card">
                  <div className="bottom">
                    <div className="button">
                      <div className="overlap-group">
                        <div className="text-wrapper">Bid Now</div>
                      </div>
                    </div>
                    <div className="people">
                      <div className="overlap">
                        <img className="ellipse" alt="Ellipse" src={Image} />
                      </div>
                    </div>
                    <div className="text-2">
                      <div className="price-2">
                        <div className="div">3.5 ETH</div>
                        <img
                          className="ethereum-icon-purple"
                          alt="Ethereum icon purple"
                          src={Symbol}
                        />
                      </div>
                      <div className="text-wrapper-2">Ball of Life</div>
                    </div>
                  </div>
                  <div className="image">
                    <div className="overlap-2">
                      <div className="bg" />
                      <img className="image-3" alt="Image" src={People1} />
                      <img className="fullscreen-svgrepo" alt="Fullscreen svgrepo" src={FullScreen} />
                      <div className="element">
                        <div className="overlap-group-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-2">
                <div className="card">
                  <div className="bottom">
                    <div className="button">
                      <div className="overlap-group">
                        <div className="text-wrapper">Bid Now</div>
                      </div>
                    </div>
                    <div className="people">
                      <div className="overlap">
                        <img className="ellipse" alt="Ellipse" src={Image} />
                      </div>
                    </div>
                    <div className="text-3">
                      <div className="price-3">
                        <div className="div">5.0 ETH</div>
                        <img
                          className="ethereum-icon-purple"
                          alt="Ethereum icon purple"
                          src={Symbol}
                        />
                      </div>
                      <div className="text-wrapper-2">Shell Artwork</div>
                    </div>
                  </div>
                  <div className="image">
                    <div className="overlap-2">
                      <div className="bg" />
                      <img className="image-4" alt="Image" src={People2} />
                      <img className="fullscreen-svgrepo" alt="Fullscreen svgrepo" src={FullScreen} />
                      <div className="element">
                        <div className="overlap-group-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img className="arrows-icon" alt="" src={Arrow} />
              <div className="text-4">
                <p className="p">
                  Outsource your nft collection project and get it quickly done and delivered remotely online.
                </p>
                <h1 className="h-1">Weekly Top NFTs</h1>
                <div className="text-wrapper-4">New Collection</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationBox;
