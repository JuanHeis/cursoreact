import React from 'react'
import platzilogo from '../img/platziconf-logo.svg'
import astronauts from '../img/astronauts.svg'
import '../styles/global.css'
class Home extends React.Component {
    render() {
        return (
            <React.Fragment>

                <div className='Badges'>
                    <div className='Badges__hero'>
                        <div className='Badges__container'>
                            <div className='row'>
                                <div className='col-6'>
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
                                                Start Now!
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

            </React.Fragment>
        )
    }
}
export default Home