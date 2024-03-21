import React from "react";
import img1 from "./img/cake-one.png";
import img2 from "./img/cake-two.png";
import img3 from "./img/cake-three.png";
import img4 from "./img/cake-four.png";
import imgwhite from "./img/cake-white.png";

const Bannar = () => {
  return (
    <>
      <div className="bannar" style={{ backgroundColor: '#FCAEAE', padding: '10rem' }}>
        <div className="text" style={{ textAlign: 'center', color: '#F4F3EF', position: 'relative', bottom: '5rem' }}>
          <h2 style={{ fontSize: '40px', fontFamily: 'cursive' }}><b>. Beautiful .</b></h2>
          <h1 style={{ letterSpacing: '7px', textShadow: '-1px 3px 0px #f57f7f', fontSize: '60px' }}><b>CUPCAKES</b></h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src={img1} alt="" style={{ position: 'absolute', bottom: '10%' }} />
          </div>
          <div className="col-md-3">
            <img src={img2} alt="" style={{ position: 'absolute', bottom: '10%' }} />
          </div>
          <div className="col-md-3">
            <img src={img3} alt="" style={{ position: 'absolute', bottom: '10%' }} />
          </div>
          <div className="col-md-3">
            <img src={img4} alt="" style={{ position: 'absolute', bottom: '10%' }} />
          </div>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: '#A0ECD9', padding: '6px' }}>
      </div>
      <div className="row" style={{ backgroundColor: '#23CFA7', padding: '3rem' }}>
      </div>
      <div className="row" style={{ backgroundColor: '#A0ECD9', padding: '6px' }}>
      </div>
      <div className="row" style={{ backgroundColor: '#A593C2', padding: '3rem' }}>
        <div className="text" style={{ paddingRight: '18rem', paddingLeft: '18rem', textAlign: 'center', color: 'white' }}>
          <img src={imgwhite} alt="" style={{ width: '2rem', paddingBottom: '2rem' }} />
          <h5>Toffee sugar plum halvah liquorice <b> brownie gummies </b>
            chocolate bar muffin candy canes.
            Dessert jelly-o tootsie roll jelly sesame snaps icing.</h5>
        </div>
      </div>

    </>
  );
};

export default Bannar;
