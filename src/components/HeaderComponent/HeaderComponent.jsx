import React from 'react'
import './HeaderComponent.css'
import {Link} from 'react-router-dom'

function HeaderComponent() {
  return (
    <React.Fragment>
        <div className='header'>
            <div className='resume'>
                <Link to='/' className='resume-con'>
                    <p>Portfolio</p>
                </Link>
            </div>
            <div className='calc'>
                <Link to='/calculator' className='calc-con'>
                    <p>Calculator</p>
                </Link>
            </div>
            <div className='api'>
                <Link to='/api' className='api-con'>
                    <p>Rick and Morty</p>
                </Link>
            </div>
        </div>
    </React.Fragment>
  )
}

export default HeaderComponent