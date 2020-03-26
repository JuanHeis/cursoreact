import React from 'react'
import NavBar from '../components/NavBar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import header from '../img/badge-header.svg'
import '../styles/styles.css'

class BadgeNew extends React.Component {
    state={
        form:{
            firstName:"",
            lastName:'',
            jobTitle:'',
            twitter:'',
            email:''
        }
    }

    handleChange = e => {
        console.log("pase por aca we", this.state)
        const nextForm = this.state.form
        nextForm[e.target.name] = e.target.value
        this.setState({
            form: nextForm
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
                            <Badge formValue={this.state.form}>

                            </Badge>
                        </div>
                        <div className='col-6'>
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}></BadgeForm>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default BadgeNew