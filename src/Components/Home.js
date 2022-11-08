import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
          title = "Model S"
          description= "Order Online for Touchless Delivery"
          backgroundImg= "model-s.jpg"
          leftBtnText = "Customer order"
          rightBtnText = "Existing inventory"
        />
        
        <Section 
           title = "Model Y"
           description= "Order Online for Touchless Delivery"
           backgroundImg= "model-y.jpg"
           leftBtnText = "Customer order"
           rightBtnText = "Existing inventory"
        />
        <Section
           title = "Model 3"
           description= "Order Online for Touchless Delivery"
           backgroundImg= "model-3.jpg"
           leftBtnText = "Customer order"
           rightBtnText = "Existing inventory"
        /> 
        <Section
           title = "Model X"
           description= "Order Online for Touchless Delivery"
           backgroundImg= "model-x.jpg"
           leftBtnText = "Customer order"
           rightBtnText = "Existing inventory"
        /> 

        <Section
          title = "Lowest cost Solar Panels in America"
          description = "Money-back guarantee"
          backgroundImg= "solar-panel.jpg"
          leftBtnText = "Order Now"
          rightBtnText = "Learn More"
        />

        <Section
          title = "Solar for New Roofs"
          description= "Solar Roof costs less than a New Roof Panels"
          backgroundImg = "solar-roof.jpg"
          leftBtnText = "Order Now"
          rightBtnText = " Learn more"
        />

        <Section 
          title = "Accessories"
          description  = ""
          backgroundImg = "accessories.jpg"
          leftBtnText = "Shop Now"
          rightBtnText = ""
        />

    </Container>
  )
}


export default Home

const Container = styled.div`
    height: 100vh;
`