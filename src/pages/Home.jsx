import React from 'react'
import BlogPosts from '../components/BlogPosts'
import Callout from '../components/Callout'
import DisountItem from '../components/DisountItem'
import { FeatureProducts } from '../components/FeatureProducts'
import Footer from '../components/Footer'
import LatestProducts from '../components/LatestProducts'
import { NavBar } from '../components/NavBar'
import { PreNav } from '../components/PreNav'
import { Promotion } from '../components/Promotion'
import ShopexPros from '../components/ShopexPros'
import Socials from '../components/Socials'
import TopCategories from '../components/TopCategories'
import TrendingProducts from '../components/TrendingProducts'
import UniqueFeatures from '../components/UniqueFeatures'
import WaterMark from '../components/WaterMark'

export const Home = () => {
  return (
    <>
    <PreNav/>
    <NavBar/>
    <Promotion/>
    <FeatureProducts/>
    <LatestProducts/>
    <ShopexPros/>
    <UniqueFeatures/>
    <TrendingProducts/>
    <DisountItem/>
    <TopCategories/>
    <Callout/>
    <WaterMark/>
    <BlogPosts/>
    <Footer/>
    <Socials/>
    </>
  )
}
