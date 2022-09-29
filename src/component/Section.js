import React from 'react';
// import styled from 'styled-components';

   const Section = ({title, discription, leftButton, rightButton}) => {
  return (
    <div className='container-section'>
        <text className='container-text'>
            <h1> { title } </h1>
            <p>{ discription  }</p>
        </text>
    <div>
        <section className='button-section'>
            <button className='left-button'>
                { leftButton }
            </button>
            <button  className='right-button'>
                { rightButton }
            </button>
        </section>
        <img src='/images/down-arrow.svg' alt='down-arrow img'/>
     </div>
    </div>
  )
}
export default Section;


// const Wrap =styled.div`
//      width: 100vw;
//      height: 100vh;
//      background-size: cover;
//      background-position: center;
//      background-repeat: no-repeat;
//      background-image: ${props=> `url("/images/${props.bgImage}")`}
// `
// const ItemText=styled.div`
//    padding-top:15vh;
//    text-align:center;

// `
// const ButtonGroup=styled.div`

// `
// const LeftButton=styled.div`
//      background-color:rgba(23,26,32,0.8);
//      height:40px;
//      width:256px;
//      color:white;
//      display:flex;
//      justify-content:center;
//      align-items:center;
//      border-radius:100px;
//      opacity:0.85;
// `
// const RightButton=styled(LeftButton)`
// `
