import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home '>
      <div className="container">
      <div className='homeLeftSide'>
        <h1>Empower Your Brand with Digital Marketing Strategies</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Aliquam nulla culpa vel qui harum quisquam maiores minus aliquid ex dolor.</p>
        <Link>Learn More</Link>
      </div>
      <div className='homeRightSide'>
        <div className='rightSideHead'>
        <img src='https://img.freepik.com/free-photo/business-people-manager-working-their-new-project-classroom_146671-16297.jpg?w=740&t=st=1690476960~exp=1690477560~hmac=1ee142789cb355b18f8d4caa061f709a252cfc5d3d32116490e17eed9af39437'/>
        <div className='rightSideFade'>
          <h1>150+</h1>
          <p>We have helped numerous clients achieve their digital marketin goals.</p>
        </div>
        </div>
        <img className="fotobody" src='https://img.freepik.com/free-photo/people-analyzing-checking-finance-graphs-office_23-2150377184.jpg?w=740&t=st=1690477128~exp=1690477728~hmac=65801fb2a86820b34bb94c0ac0eb579badcb098715f0739ab7c2200271894c73'/>
      </div>
      </div>
    </div>
  )
}

export default Home