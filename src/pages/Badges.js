import React from 'react'
import NavBar from '../components/NavBar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import header from '../img/badge-header.svg'
import '../styles/Badges.css'
import api from '../api'
import BadgesList from '../components/BadgesList'
import { Link } from 'react-router-dom'
class Badges extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount(){
        this.fetchData()
    }
    fetchData = async () => {
        this.setState({loading:true, error:null})
        try {
            const data = await api.badges.list()
            this.setState({loading:false, data:data})
        }
        catch(error){
            this.setState({loading:false, error:error})
        }
    }
    render() {
        if(this.state.loading === true){
            return 'loading...'
        }
        if (this.state.error){
            return 'Hubo un error we, tene cuidado. '+this.state.error
        }
        return (
            <React.Fragment>
                <div className='Badges'>
                    <div className='Badges__hero'>
                        <div className='Badges__container'>
                            <img className='badges_conf-logo' src={header}></img>
                        </div>
                    </div>
                    <div className='Badges__container'>
                        <div className='Badges__buttons'>
                            <Link className='linkButton' to='/badges/new'>Nuevo</Link>
                        </div>
                    </div>
                </div>
                <div className='Badges__list'>
                    <div className='Badges__container'>
                        <BadgesList badges={this.state.data}></BadgesList>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges