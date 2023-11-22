"use client"
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div style={{overflow:"hidden"}} ref={emblaRef}>
      <div style={{display:"flex",alignItems:"center"}}>
        <div style={{flex:"0 0 100%",
    minWidth:"0"}}><Image src="/Bdome.png" width={500} height={500} alt={"bdome"} /></div>
        <div style={{flex:"0 0 100%",
    minWidth:"0"}}><Image src="/iiser-pune.png" width={500} height={500} alt={"bdome"} /></div>
            <div style={{flex:"0 0 100%",
    minWidth:"0"}}><Image src="/ict-2.png" width={500} height={500} alt={"bdome"} /></div>
      </div>
    </div>
  )
}