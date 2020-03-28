import React from 'react'
import Badges from '../pages/Badges'

class BadgesList extends React.Component {
    render() {
        return (
            <ul className='list-unstyled'>
                {this.props.badges.map(badge => {
                    return (
                        <div className='row'>
                            <div className='col-12'>
                            <p>{badge.firstName}, {badge.lastName},{badge.email}, {badge.twitter}</p>
                            </div>
                        </div>
                    )
                })}
            </ul>

        )
    }
}
export default BadgesList