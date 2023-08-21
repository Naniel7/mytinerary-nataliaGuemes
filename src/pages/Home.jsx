import React from 'react'
import Hero from '../components/Hero'
import CarouselCreator from '../components/Carousel'

export default function Home({data}) {
  return (
    <>
    <Hero />
    <CarouselCreator data={data}/>
    </>
  )
}
