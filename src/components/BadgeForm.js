import React from 'react'

class BadgeForm extends React.Component {
    state = {
        firstName:"",
        lastName:"",
        email:"",
        twitter:"",
        jobTitle:""
    }

    handleClick = e => {
        e.preventDefault()
        console.log('Hola!')
    }
    render(
    ) {
        return (
            <div>
                <h1> New attendet</h1>
                <form>
                    <div className='form-group'>
                        <label>First Name</label>
                        <input name='firstName'
                            id='firstName'
                            onChange={this.props.onChange}
                            className='form-control'
                            >
                            
                        </input>

                        <label>Last Name</label>
                        <input name='lastName'
                            id='lastName'
                            onChange={this.props.onChange}
                            className='form-control'
                            
                            >
                        </input>

                        <label>e-Mail</label>
                        <input name='email'
                            id='email'
                            type='email'
                            onChange={this.props.onChange}
                            className='form-control'
                            >
                        </input>
                        
                        <label>Job Title</label>
                        <input name='jobTitle'
                            id='jobTitle'
                            onChange={this.props.onChange}
                            className='form-control'
                            >
                        </input>


                        <label>Twitter</label>
                        <input name='twitter'
                            id='twitter'
                            onChange={this.props.onChange}
                            className='form-control'
>
                        </input>
                        <button onClick={this.handleClick} className='btn btn-primary'>Save!</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default BadgeForm