import React, { useEffect } from 'react'
import { CardsInformation } from '../ui/CardsInformation/CardsInformation'
import { CategoriesHero } from '../ui/CategoriesHero/CategoriesHero'
import { CategoriesSlider } from '../ui/CategoriesSlider/CategoriesSlider'
import { Hero } from '../ui/Hero/Hero'

export const Home = () => {

  useEffect(() => {
    window.scrollTo({ top: 0});
  }, [])


  return (
    <>
      <Hero/>
     {/*  <CategoriesHero/> */}
      <CategoriesSlider/>
      <CardsInformation/>
    </>
  )
}
