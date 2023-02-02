import { CalendarTodayOutlined, CreateOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const Card = styled.div`
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 400px;
    max-height: 500px;
   
   border-radius: 20px;
    
`

const CardHeader = styled.div`
    position: relative;
    flex : 2;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
`
const CardImage = styled.img`
    width: 100% ;
    object-fit: cover;
    display: block;
`



const CardBody = styled.div`
    flex : 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    padding: 20px ;
    width: 100%;
    transition: all .5s linear ;
`
const Data = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 30px;
`
const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

`
const Pen = styled(CreateOutlined)`
    font-size: 15px !important;
    color : ${({theme:{colors:{primary}}})=> primary};
`
const Name = styled.p`
  font-size: 17px;
  color : ${({theme:{colors:{secondary}}})=> secondary};

`
const Date = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`
const Calender = styled(CalendarTodayOutlined)`
    font-size: 15px !important;
    color : ${({theme:{colors:{primary}}})=> primary};
`
const Text = styled.p`
    font-size: 17px;
    color : ${({theme:{colors:{secondary}}})=> secondary};

`
const CardTitle = styled.h1`
    font-size: 18px;
    color : ${({theme:{colors:{secondary}}})=> secondary};
    font-weight: bold;
    transition: all .3s ease-in-out;
    cursor: pointer;
    &:hover{
        color : ${({theme:{colors:{primary}}})=> primary};
        
    }
`
const Desc = styled.p`
    color : ${({theme:{colors:{p_color}}})=> p_color};
    line-height: 23px;
`
const Link = styled.a`
    color : ${({theme:{colors:{secondary}}})=> secondary};
    transition: all .3s ease-in-out;
    margin-bottom: 20px;
    &:hover{
        color : ${({theme:{colors:{primary}}})=> primary};
    }
`





const BlogPost = ({src}) => {
  return (
    <Card>
        <CardHeader>
            <CardImage src={src} alt='image for blog post'></CardImage>
        </CardHeader>
        <CardBody>
            <Data>
                <User>
                    <Pen></Pen>
                    <Name>SaberAli</Name>
                </User>
                <Date>
                    <Calender></Calender>
                    <Text>21 August,2020</Text>
                </Date>
            </Data>
            <CardTitle>
                Top esssential Trends in 2021
            </CardTitle>
            <Desc>More off this less hello samlande lied much over tightly circa horse taped mightly</Desc>
            <Link href='#'>Read More</Link>
        </CardBody>
    </Card>
  )
}

export default BlogPost
