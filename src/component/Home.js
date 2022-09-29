import React from 'react';
import Section from "./Section";

 const Home = () => {
  return (
    <div className='Container-home'>
        <Section
            title= "Model-S"
            discription="This is the latest tesla car"
            leftButton="Custom Order"
            rightButton="Existing Inventory"
            backgroundImage="images/model-s.jpg"

        />
        <Section
         title= "Model-3"
         discription="This is the latest tesla car"
         leftButton="Custom Order"
         rightButton="Existing Inventory"
         backgroundImage="images/model-3.jpg"


        />
        <Section
         title= "Model-X"
         discription="This is the latest tesla car"
         leftButton="Custom Order"
         rightButton="Existing Inventory"
         backgroundImage="images/model-x.jpg"

/>
        <Section
         title= "Model-Y"
         discription="This is the latest tesla car"
         leftButton="Custom Order"
         rightButton="Existing Inventory"
         backgroundImage="images/model-y.jpg"

/>
        {/* <Section
         title= "Model-S"
         discription="This is the latest tesla car"
         leftButton="Custom Order"
         rightButton="Existing Inventory"
/> */}

    </div>
  )
}
export default Home;

// const Container= styled.div`
//        height:100vh;
// `
