import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function About() {
  return (
    <div>
        <SectionTitle title="About"/>
        <div className="flex w-full items-center">
            <div className="h-[70vh] w-1/2">
                <lottie-player 
                src="https://lottie.host/0b04061c-63cf-4ab1-a46f-e489e1c508d0/hc0ciNJYmw.json"
                background="transparent"
                speed="1"
                autoplay
                ></lottie-player>
            </div>
            
        </div>
    </div>
  )
}

export default About
