import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        tittle="Model S"
        image="model-s.jpg"
        discription="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        tittle="Model Y"
        image="model-y.jpg"
        discription="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        tittle="Model X"
        image="model-x.jpg"
        discription="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        tittle="Model 3"
        image="model-3.jpg"
        discription="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        tittle="Lowest Cost Solar Panels in America"
        image="solar-panel.jpg"
        discription="Money back guarentee"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
       <Section
        tittle="Solar for New Roofs"
        image="solar-roof.jpg"
        discription="Solar Roof Coats less Than Plus Solar Panels"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        tittle="Accessories"
        image="accessories.jpg"
        discription="Solar Roof Coats less Than Plus Solar Panels"
        leftBtnText="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
