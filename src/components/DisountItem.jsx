import React from 'react'
import styled , {css} from 'styled-components'

const Container = styled.div`
    max-width : 1140px ;
    margin: 100px auto ;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
`
const MainTitle = styled.h1`
    font-size: 53px;
    color: #151875;
    text-align: center;
    width: 100%;
    @media screen and (max-width : 460px){
        font-size: 30px;
    }
`
const HeaderSmallTitle = styled.p`
    color: #FB2E86;
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: bold;
    font-family: Lato;
`
const Desc = styled.p`
    color : rgba(21, 24, 117,.35);
    width:80%;

`
const Links = styled.ul`
    list-style: none;
    width : 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    @media screen and (max-width : 460px){
        gap: 15px;
    }
`
const Link = styled.li`
    display: block;
    color: #151875;
    font-size: 18px;
    cursor: pointer;
    transition: all .4s ease-in-out;
    &:hover {
        color: #FB2E86;
        text-decoration: underline;

    }
    @media screen and (max-width : 460px){
        font-size: 13px;
    }

`

const Wrapper = styled.div`
display: flex;
min-height: 50vh;
max-width: 1140px;
margin: 0 auto;
padding: 20px;
gap:20px;
@media screen and (max-width: 480px){
flex-direction: column-reverse;
gap : 20px;
}
`
const Right = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: flex-start;
    gap: 47px;
`
const Left = styled.div`
    flex: 1;
    position : relative;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Circle = styled.div`
    position: absolute;
    border-radius: 100%;
   opacity: .5;
   
     ${({dir})=>{
        if(dir=== "up")
        {
            return css`
                z-index: -1;
                background-color: rgba(236, 210, 250 , .35);
                width: 80%;
                 height: 80%;
                 top:0;
                    left:0;
                    bottom: 0;
                right: 0;
                margin: auto;
            `            
        }else {
            return css`
                z-index: -2;
                background-color: rgba(236, 210, 250 , .35);
                width: 100%;
                 height: 100%;
                 
            `

        }
    }}
`

const FeaturedImage = styled.img`
    display: block; 
    width : 80%;
    z-index: 0;
`
const Title = styled.h1`
    font-size: 35px;
    font-weight: 600;

    font-family: 'Josefin Sans', sans-serif;
    color: #151875;
    @media screen and (max-width: 500px){
   font-size : 22px;
  }
`
const HeaderButton = styled.button.attrs( {type:'submit'})`
    color: white;
    font-size: 15px;
    background-color: #FB2E86;
    padding: 15px 35px;
    font-family: 'Josefin Sans', sans-serif;
    border: none;
    outline: none;
    cursor: pointer !important;
    transition:all .5s linear;
    &:hover{
        scale: 1.3;
    }
`
const Qualites = styled.ul`
    display: flex;
    width:100%;
    align-items : center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap : 30px;
    padding: 10px;
    list-style: none;
    color : rgba(21, 24, 117,.35);

   
`
const Quality = styled.li`
    width:40%;
     &::before {
    content: "•";  
    font-size: 20px;
    font-weight: bold;
    display: inline-block;
    width: 1em; 
    margin-left: -1em;
    ${({color})=>{
    if(color === "pink"){
        return css`
            color: #FB2E86;
        `
    }else if (color=== "blue"){
        return css`
            color: #2B2BF5;
        `
    }else if (color === "sky" ){
        return css`
            color: #2BF5CC;
        `
    }else if (color === "green" ){
        return css`
            color: #2bf568;
        `
    }
    }}
    }
`
const DisountItem = () => {
  return (
    <Container>
        <MainTitle>Discount Item</MainTitle>
        <Links>
            <Link>Wood Chair</Link>
            <Link>Platic Chair</Link>
            <Link>Wooden Collection</Link>
          
        </Links>
        <Wrapper>
            
          
            <Right>

                <Title>20% Discount Of All Products</Title>
                <HeaderSmallTitle>Eams Sofa Compact</HeaderSmallTitle>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate optio at cum illum a accusantium.</Desc>
                <Qualites>
                    <Quality color= "pink">Material expose like metals</Quality>
                    <Quality color= "blue">Clear lines and geomatric figures</Quality>
                    <Quality color= "sky">Simple neutral colours.</Quality>
                    <Quality color= "green">Material expose like metals</Quality>
                </Qualites>
                <HeaderButton>Shop Now</HeaderButton>
            </Right>
            <Left>
                <FeaturedImage src='images/discountchair.png'></FeaturedImage>
                <Circle dir="up">
                </Circle>
                <Circle dir="down">
                </Circle>
            </Left>
        </Wrapper>
    </Container>
  )
}

export default DisountItem
