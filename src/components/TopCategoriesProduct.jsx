import React from 'react'
import styled from 'styled-components'



const CardHeader = styled.div`
    position: relative;
    flex : 2;
    background-color : #F6F7FB;
    width: 100%;
    padding: 30px;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    &::before{
        content: '';
    position: absolute;
    width: 29px;
    max-width: 0;
    height: 55%;
    bottom: 0;
    left: 0;
    display: block;
    background-color: #9877E7;
    z-index: 1;
    border-radius: 16px;
    transform: skew(38deg);
    transition: all 1s ease-in-out;

    }
`
const CardImage = styled.img`
    width: 75% ;
    object-fit: cover;
    display: block;
    margin: 20px;
`


const CardButton = styled.button`
    border:none;
    outline: none;
    color : white;
    background-color: #08D15F;
    position: absolute;
    bottom: 0;
    left: 50%;
    translate: -50% -20px;
    cursor: pointer;
    font-size: 10px;
    display : block ;
    max-width : 0;
    overflow: hidden;
    transition:  max-width 1s linear , padding 1.2s linear;
    
`




const CardBody = styled.div`
    flex : 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 20px 10px;
    width: 100%;
    transition: all .5s linear ;
`
const CardTitle = styled.h1`
    color: ${({theme})=> theme.colors.secondary};
    font-size: 18px;
    font-weight: bold;
    transition: all .3s ease-in-out;
    font-family: Lato;
`


const Price = styled.span`
    transition: all .3s ease-in-out;
    font-size: 14px;
    color : #151875;
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    max-width: 200px;
    max-height: 500px;
   
  
    &:hover ${CardButton}  {
        max-width: 100vw;
     padding: 10px 15px;

    }
    &:hover ${CardHeader} {
        &::before {
            max-width: 100%;
        }
    }
   
    
    
`
const TopCategoriesProduct = () => {
  return (
    <Card>
        <CardHeader>
            <CardImage src='images/chair1.png' alt='Chair'></CardImage>
           
            <CardButton type="submit">View Shop</CardButton>
        </CardHeader>
        <CardBody>
            <CardTitle>
            Cantilever chair
            </CardTitle>           
            <Price>$42.00</Price>
        </CardBody>
    </Card>
  )
}

export default TopCategoriesProduct
