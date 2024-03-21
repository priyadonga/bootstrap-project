import React, { useRef, useState } from 'react';
import imgpurple from "./img/cake-purple.png";
import one from "./img/cake-blue.png";
import two from "./img/cake-red.png";
import three from "./img/cake-orange.png";
const Card = () => {

  let flavor = useRef()
  let price = useRef()
  let color = useRef()
  let btncolor = useRef()
  const [data, setdata] = useState([
    {
      id: 1,
      price: "40",
      flavor: "Blue Cake’s",
      img: one,
      color: '#4BCFEC',
      btncolor: '#0f86a1'
    },
    {
      id: 2,
      price: "30",
      flavor: "Pink Cake’s",
      img: two,
      color: '#FBA1A1',
      btncolor: '#e3534f'
    },
    {
      id: 3,
      price: "30",
      flavor: "Orange Cake’s",
      img: three,
      color: '#FFBB63',
      btncolor: '#ee8600'
    },
  ]);


  return (
    <>
      <div className="container p-5" style={{ backgroundColor: '#F4F3EF' }}>
        <div className="text" style={{ textAlign: 'center', color: '#A593C2' }}>
          <img src={imgpurple} alt="" style={{ paddingBottom: '1rem' }} />
          <h3 style={{ fontSize: '35px', fontFamily: 'cursive' }}><b>. PRODUCT .</b></h3>
        </div>
      </div>
      {data.map((val) => (
        <div key={val.id} className='col-md-4 py-3' style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#F4F3EF' }}>
          <div className="card border-0" style={{ width: '24rem' }}>
            <div className="image" style={{ position: 'relative', paddingBottom: '1rem', paddingTop: '2rem', paddingLeft: '1rem' }}>
              <h1 style={{ color: val.color, fontSize: '60px' }}><b>${val.price}</b></h1>
              <h2 style={{ color: val.color, fontSize: '25px' }}><b>{val.flavor}</b></h2>
              <h5 style={{ color: val.color, fontFamily: '20px' }}>Lorem ipsum set amet.</h5>
              <img src={val.img} className="card-img-top" alt="..." style={{ width: '10rem', position: 'absolute', top: '0', right: '0' }} />
            </div>
            <div className="card-body" style={{ backgroundColor: val.color, color: '#FFFF' }}>
              <p className="card-text" style={{ paddingRight: '2rem', paddingLeft: '2rem', textAlign: 'center' }}>Cookie apple pie donut gingerbread sweet roll pudding topping marshmallow.</p>
              <button className='btn' style={{ backgroundColor: val.btncolor, color: '#FFFF', margin: '0 auto', display: 'block' }}>ADD TO CART</button>
            </div>
          </div>
        </div>
      ))}
      <div className="container p-5" style={{ backgroundColor: '#F4F3EF' }}>
        <h4 style={{ paddingLeft: '17rem', paddingRight: '17rem', textAlign: 'center', color: '#A1A2A6', fontSize: '22px' }}>Toffee sugar plum halvah liquorice <span style={{ color: '#A593C2' }}><b>brownie gummies</b></span> chocolate bar muffin candy canes.
          Dessert jelly-o tootsie roll jelly sesame snaps icing.</h4>
      </div>
    </>
  );
}

export default Card;
