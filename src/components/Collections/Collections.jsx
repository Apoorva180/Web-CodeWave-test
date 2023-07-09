import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Collections.css';// Custom styles for the component
import { ImageComponent,SymbolComponent ,ArrowComponent} from '../AnimationBox/AnimationBox';
import image1Url from '../../assets2/image@2x.png';
import image2Url from '../../assets2/image1@2x.png';
import image3Url from '../../assets2/image2@2x.png';
import arrowUrl from '../../assets/arrows.svg';
import SymbolUrl from '../../assets/Ethereum-icon-purple_2 1.svg';

export const CollectionsBox = () => {
  
  return (
    <div className="parent-container">
    <div className="creators-collection">
      <div className="card3">
        <button className="button4">
          <div className="bg8" />
          <div className="view-collection">View Collection</div>
        </button>
        <div className="creator">
          
        <ImageComponent src={image1Url}  />
          <div className="text4">
            <div className="bg9" />
            <div className="details">
              <div className="total-spent">
                <div className="eth3">50 ETH</div>
                <div className="ethereum-icon-purple-2-13">
                  <SymbolComponent src={SymbolUrl} />
                  </div>
                <div className="total-spent1">Total Spent</div>
              </div>
              <div className="total-earned">
                <div className="eth4">320 ETH</div>
                <div className="ethereum-icon-purple-2-13">
                  <SymbolComponent src={SymbolUrl} />
                  </div>
                <div className="total-earned1">Total Earned</div>
              </div>
              <div className="michael-joe">Michael Joe</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card4">
        <button className="button4">
          <div className="bg8" />
          <div className="view-collection">View Collection</div>
        </button>
        <div className="creator">
          
        <ImageComponent src={image2Url}  />
          <div className="text4">
            <div className="bg9" />
            <div className="details1">
              <div className="total-spent2">
                <div className="eth5">100 ETH</div>
                <div className="ethereum-icon-purple-2-13">
                  <SymbolComponent src={SymbolUrl} />
                  </div>
                <div className="total-spent1">Total Spent</div>
              </div>
              <div className="total-earned2">
                <div className="eth5">500 ETH</div>
                <div className="ethereum-icon-purple-2-13">
                  <SymbolComponent src={SymbolUrl} />
                  </div>
                <div className="total-earned1">Total Earned</div>
              </div>
              <div className="julia-cortez">Julia Cortez</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card5">
        <button className="button4">
          <div className="bg8" />
          <div className="view-collection">View Collection</div>
        </button>
        <div className="creator">
        <ImageComponent src={image3Url}  />
          <div className="text4">
            <div className="bg9" />
            <div className="details">
              <div className="total-spent2">
                <div className="eth5">150 ETH</div>
                <div className="ethereum-icon-purple-2-13">
                  <SymbolComponent src={SymbolUrl} />
                  </div>
                <div className="total-spent1">Total Spent</div>
              </div>
              <div className="total-earned">
                <div className="eth4">435 ETH</div>
                <div className="ethereum-icon-purple-2-13">
                  <SymbolComponent src={SymbolUrl} />
                  </div>
                <div className="total-earned1">Total Earned</div>
              </div>
              <div className="julia-cortez">Hamza Malik</div>
            </div>
          </div>
        </div>
      </div>
      <div className="arrows-icon1"><ArrowComponent src={arrowUrl} /></div> 
      <b className="view-creators-collections">View Creator’s Collections</b>
      </div>
      </div>

  );
};
export default CollectionsBox;