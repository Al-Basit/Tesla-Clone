import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description={<p>Leasing starting at $349/mo</p>}
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model Y"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model 3"
        description={<a href="/#">Schedule a Demo Drive</a>}
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model X"
        description={<a href="/#">Schedule a Demo Drive</a>}
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Solar Panels"
        description={<p>Lowest Cost Solar Panels in America</p>}
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Solar Roof"
        description={<p>Produce Clean Energy From Your Roof</p>}
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Accessories"
        backgroundImg="accessories.jpg"
        leftBtnText="Shop now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
