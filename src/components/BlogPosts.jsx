import React from 'react'
import styled from 'styled-components'
import BlogPost from './BlogPost'

const Container = styled.div`
    max-width: 1440px;
    margin: 100px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    gap: 80px;
    `
const Title = styled.h1`
    font-size: 53px;
    color: #151875;
    @media screen and (max-width : 460px){
        font-size: 30px;
    }
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 60px;
    flex-wrap: wrap;
`
const BlogPosts = () => {
  return (
    <Container>
    <Title>Latest Blog</Title>
    <Wrapper>
        <BlogPost src = "images/post1.png"/>
        <BlogPost src = "images/post2.png"/>
        <BlogPost src = "images/post3.png"/>
    </Wrapper>
</Container>
  )
}

export default BlogPosts
