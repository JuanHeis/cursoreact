import React from 'react'
import Badges from '../pages/Badges'

class BadgesList extends React.Component {
    render() {
        return (
            <ul className='list-unstyled'>
                {this.props.badges.map(badge => {
                   
                })}
            </ul>

        )
    }
}
export default BadgesList