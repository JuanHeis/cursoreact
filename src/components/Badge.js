import React from 'react'
import logoConf from '../img/badge-header.svg'
import '../styles/styles.css'
import Gravatar from './Gravatar'
class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={logoConf} alt="logo conf   "></img>
                </div>
                <div className="Badge__section-name">
                    <Gravatar className='Badge__avatar' email={this.props.formValue.email}></Gravatar>
                    <h1>
                        {this.props.formValue.firstName || 'FIRST_NAME'} <br></br>{this.props.formValue.lastName || 'LAST_NAME'}
                    </h1>
                </div>
                <div className='Badge__section-info'>
                    <h3>{this.props.formValue.jobTitle|| 'JOB_TITTLE'}</h3>
                    <p>@{this.props.formValue.twitter || 'TWITTER'}</p>
                </div>
                <div className="Badge__footer">
                    Platizi conf
               </div>
            </div>
        )
    }
}

export default Badge;