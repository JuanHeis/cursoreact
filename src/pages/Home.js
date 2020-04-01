import React from 'react'
import platzilogo from '../img/platziconf-logo.svg'
import astronauts from '../img/astronauts.svg'
import '../styles/global.css'
import { Link } from 'react-router-dom'
class Home extends React.Component {
    render() {
        return (
            <React.Fragment>

                <div className='Badges'>
                    <div className='Badges__hero'>
                        <div className='row justify-content-center'>
                            <div className='col-8'>
                                <div class='row'>

                                    <div className='col-6  align-items-center'>
                                        <div class="row align-items-center">
                                            <div className='col-12'>
                                                <img className='home__Logo' src={platzilogo}></img>
                                            </div>
                                            <div className='col-12'>
                                                <h1 className='homeh1'>PRINT YOUR BADGES</h1>
                                                <span className='spanHome'>The easiest way to manage your conference</span>
                                            </div>
                                            <div className='col-12'>
                                                <button className='linkButton'>
                                                    <Link to='/badges/new'>
                                                        Start Now!
                                                    </Link>
                                        </button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <img className='Home__astronauts' src={astronauts}></img>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </React.Fragment>
        )
    }
}
export default Home