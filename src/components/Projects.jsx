import React from 'react'
import { Link } from 'react-router-dom'
import dataServices from '../data/servicesData'

const Projects = () => {
  return (
    <div className='projects'>
        <div className="container">
            <div className="projects-head">
                <h1>Showcasing Our Most Successful Projects</h1>
                <div className='projects-head-right'>
                    <p>We take immense pride in our bbest projects that have delievered outstanding results for our clients.</p>
                    <Link> View More </Link>
                </div>
            </div>

           <div className='allCardSerives'>
           {dataServices.map((data)=>
                    <Link key={data.id} className='cardServices'>
                        <img src={data.img}/>
                        <h3>{data.headText}</h3>
                        <p>{data.country}</p>
                    </Link>
                )}
           </div>
                
         


        </div>
    </div>
  )
}

export default Projects