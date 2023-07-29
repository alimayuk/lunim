import React from 'react'
import numberData from '../data/numberData'


const About = () => {
  return (
    <div className='about'>
      <div className="container">
        <p className='head-text'>ABOUT US</p>
        <div className="aboutBody">
        <div className="aboutLeft">
        <h1>Data-Drivem Strategies for Digital Success</h1>          
        <img src="https://img.freepik.com/free-photo/businesswoman-using-tablet-analysis-graph-company-finance-strategy-statistics-success-concept-planning-future-office-room_74952-1410.jpg?w=826&t=st=1690542730~exp=1690543330~hmac=f198d39389ca5e333d63b66903e91314b427806b91bfddb72212658720fd35a8" />
        </div>
        <div className="aboutRight">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quo eaque corrupti tempore facilis excepturi totam est debitis non, veniam quidem quae quia possimus laudantium impedit iste omnis odit ad.</p>
          <div className='numbers'>
            {numberData.map((number) =>(
               <div className='number'>
              <h1>{number.h1}</h1>
              <p>{number.p}</p>
              </div>
            ))}
          </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default About