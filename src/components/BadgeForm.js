import React from 'react'

class BadgeForm extends React.Component {
    handleClick = e => {
        e.preventDefault()
        console.log('Hola!')
    }
    render(
    ) {
        return (
            <div>
                <h1> New attendet</h1>
                <form 
                onSubmit={this.props.onSubmit}>
                    <div className='form-group'>
                        <label>First Name</label>
                        <input name='firstName'
                            id='firstName'
                            onChange={this.props.onChange}
                            value={this.props.formValues.firstName}
                            className='form-control'
                            >
                            
                        </input>

                        <label>Last Name</label>
                        <input name='lastName'
                            id='lastName'
                            onChange={this.props.onChange}
                            className='form-control'
                            value={this.props.formValues.lastName}
                            >
                        </input>

                        <label>e-Mail</label>
                        <input name='email'
                            id='email'
                            type='email'
                            onChange={this.props.onChange}
                            className='form-control'
                            value={this.props.formValues.email}
                            >
                        </input>
                        
                        <label>Job Title</label>
                        <input name='jobTitle'
                            id='jobTitle'
                            onChange={this.props.onChange}
                            className='form-control'
                            value={this.props.formValues.jobTitle}
                            >
                        </input>


                        <label>Twitter</label>
                        <input name='twitter'
                            id='twitter'
                            onChange={this.props.onChange}
                            className='form-control'
                            value={this.props.formValues.twitter}>   
                        </input>
                        <button className='btn btn-primary'>Save!</button>
                        {(this.props.error)?
                        <p>Ocurrio un error</p>
                        :<p></p>
                        }
                    </div>
                </form>
            </div>
        )
    }
}

export default BadgeForm