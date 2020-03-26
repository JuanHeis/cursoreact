import React from 'react'
import logoConf from '../img/badge-header.svg'
import '../styles/styles.css'
class Badge extends React.Component {


    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={logoConf} alt="logo conf   "></img>
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avatar" src={this.props.avatarUrl} alt="Logo user"></img>
                    <h1>
                        {this.props.firstName} <br></br>{this.props.lastName}
                    </h1>
                </div>
                <div className='Badge__section-info'>
                    <h3>{this.props.jobTitle}</h3>
                    <p>@{this.props.twitter}</p>
                </div>
                <div className="Badge__footer">
                    Platizi conf
               </div>
            </div>
        )
    }
}

export default Badge;