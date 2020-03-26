import React from 'react'
import NavBar from '../components/NavBar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import header from '../img/badge-header.svg'
import '../styles/styles.css'

class BadgeNew extends React.Component {
    state={
        form:{}
    }

    handleChange = e => {
        // const nextForm = this.state.form
        // nextForm[e.target.name] = e.target.value
        this.setState({
            ...this.state.form, [e.target.name] : e.target.value
        })
    }
    render() {
        return (
            <div>
                <NavBar />
                <div className='BadgeNew__hero'>
                    <img className='img-fluid' src={header} alt='logo'></img>
                </div>

                <div className='contaiener'>
                    <div className='row'>
                        <div className='col-6'>
                            <Badge firstName='Juan'
                                    lastName='H'
                                    twitter='juani'
                                    jobTitle='Programmer'
                                    avatarUrl=''>        
                            </Badge>
                        </div>
                        <div className='col-6'>
                            <BadgeForm onChange={this.handleChange}></BadgeForm>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default BadgeNew