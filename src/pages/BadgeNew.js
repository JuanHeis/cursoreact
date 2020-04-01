import React from 'react'
import NavBar from '../components/NavBar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import header from '../img/platziconf-logo.svg'
import '../styles/styles.css'
import api from '../api'
import PageLoading from '../components/PageLoading'
class BadgeNew extends React.Component {
    state={
        loading: false,
        error:null,
        form:{
            firstName:'',
            lastName:'',
            jobTitle:'',
            twitter:'',
            email:''
        }
    }
    handleSubmit= async (e) =>{
        e.preventDefault()
        this.setState({loading:true, error:null})
        try{
           await api.badges.create(this.state.form)
           this.setState({loading:false})
        } catch (error){
            this.setState({loading:false, error:error})
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
        if (this.state.loading){
            return <PageLoading></PageLoading>
        }
        return (
            <div>
                <div className='BadgeNew__hero'>
                    <img className='img-fluid BadgeNew__hero-image' src={header} alt='logo'></img>
                </div>

                <div className='contaiener'>
                    <div className='row'>
                        <div className='col-6'>
                            <Badge formValue={this.state.form}>

                            </Badge>
                        </div>
                        <div className='col-6'>
                            <BadgeForm
                            onSubmit={this.handleSubmit}
                            onChange={this.handleChange}
                            formValues={this.state.form}
                            error={this.state.error}></BadgeForm>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default BadgeNew