import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding:30px;
    background-color: #EEEFFB;
    margin-top:50px;
`
const Wrapper = styled.div`
    max-width: 1140px;
    margin: 10px auto;
    display: flex;
    align-items:center ; 
    justify-content: space-between;
    gap:35px;
    flex-wrap : wrap;
`
const Data = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap :50px;
    margin-bottom: auto;

`
const Logo = styled.h3`
    color : black;
    font-size:25px;
`
const InputGroup = styled.div`
    display : flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    background-color: white;

`
const Input = styled.input`
    border: none;
    outline: none;
    padding: 5px;
    flex : 3;
    width: 100%;
    background-color:transparent;

`
const Button = styled.button.attrs({type:'submit'})`
    color: white;
    font-size: 15px;
    background-color: #FB2E86;
    padding: 10px 20px;
    font-family: 'Josefin Sans', sans-serif;
    border: none;
    outline: none;
    cursor: pointer !important;
    transition:all .5s linear;
    &:hover{
        scale: .93;
    }
`
const ContactInfo = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap: 15px;
    color : rgba(21, 24, 117,.35);

`
const ContactInfoTitle = styled.h5`
    font-size: 13px;
    font-weight: bold;
`
const Address = styled.p`
        font-size: 13px;
        width: 80%;
`
const Section = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content: center;
    flex-direction: column;
    gap:30px;
    margin-bottom: auto;

`
const Title = styled.h3``

const List  = styled.ul`
    list-style:none;
    display:flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    gap : 20px;
    color : rgba(21, 24, 117,.35);
    font-size: 14px;
`
const ListItem = styled.li`
    width : 100%;
`
const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Data>
                <Logo>Hekto</Logo>
                <InputGroup>
            <Input type='text' placeholder='Enter Email Adress'></Input>
            <Button>Sign Up</Button>
            </InputGroup>
            <ContactInfo>
                <ContactInfoTitle>
                    Contact Info
                </ContactInfoTitle>
                <Address>17 Princess Road, London, Greater London NW1 8JR, UK</Address>
            </ContactInfo>
            </Data>
        <Section>
            <Title>Catagories</Title>
            <List>
                <ListItem>Laptops & Computers</ListItem>
                <ListItem>Cameras & Photography</ListItem>
                <ListItem>Smart Phones & Tablets</ListItem>
                <ListItem>Video Games & Consoles</ListItem>
                <ListItem>Waterproof Headphones</ListItem>
            </List>
            </Section> 
        <Section>
            <Title>Customer Care</Title>
            <List>
                <ListItem>My Account</ListItem>
                <ListItem>Discount</ListItem>
                <ListItem>Returns</ListItem>
                <ListItem>Orders History</ListItem>
                <ListItem>Order Tracking</ListItem>
            </List>
            </Section> 
        <Section>
            <Title>Pages</Title>
            <List>
                <ListItem>Blog</ListItem>
                <ListItem>Browse the Shop</ListItem>
                <ListItem>Category</ListItem>
                <ListItem>Pre-Built Pages</ListItem>
                <ListItem>Visual Composer Elements</ListItem>
                <ListItem>WooCommerce Pages</ListItem>
            </List>
            </Section> 
      
        </Wrapper> 
    </Container>

  )
}

export default Footer
