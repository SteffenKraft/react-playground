import React from 'react'
import { Helmet } from 'react-helmet'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import Checkbox from 'material-ui/Checkbox'
import { connect } from 'react-redux'

import { addTodo, toggleTodo, addImage, likeImage } from '../../redux/actions'


class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            name: '',
            street: '',
            newsletter: false,
            email: '',
            billing: false
        }
        // Start test debugging //
        this.props.addTodo('Learn about actions')
        debugger;
        // this.props.dispatch(addTodo('Learn more about actions'))

        // console.log(this.props.store.getState())
        // END test debugging //
    }

    handleInputChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [target.name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.onTodoClick('thdsf  sfs ')
        // TODO handle fom data from this.state
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Contact - My Reactplay Ground</title>
                    <meta name="description" content="My Reactplay Ground - Contactpage" />
                </Helmet>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        onChange={this.handleInputChange}
                        hintText="Please enter your Firstname"
                        floatingLabelText="Firstname"
                        fullWidth={true}
                        underlineFocusStyle={{ transition: '0ms' }}
                        hintStyle={{ bottom: '9px' }}
                        name="firstname"
                    />
                    <TextField
                        onChange={this.handleInputChange}
                        hintText="Please enter your Name"
                        floatingLabelText="Name"
                        fullWidth={true}
                        hintStyle={{ bottom: '10px' }}
                        underlineFocusStyle={{ transition: '0ms' }}
                        name="name"
                    // errorText="Please put in your Name"
                    />
                    <TextField
                        onChange={this.handleInputChange}
                        hintText="Please enter your Street"
                        floatingLabelText="Street"
                        fullWidth={true}
                        hintStyle={{ bottom: '10px' }}
                        underlineFocusStyle={{ transition: '0ms' }}
                        name="street"
                    />
                    <TextField
                        onChange={this.handleInputChange}
                        hintText="Please enter your Email"
                        floatingLabelText="Email"
                        fullWidth={true}
                        hintStyle={{ bottom: '10px' }}
                        underlineFocusStyle={{ transition: '0ms' }}
                        name="email"
                    />
                    <Checkbox
                        onCheck={this.handleInputChange}
                        label="Newsletter"
                        name="newsletter"
                        style={{ marginTop: '9px' }}
                        iconStyle={{ marginRight: '10px' }}
                    />
                    <Toggle
                        onToggle={this.handleInputChange}
                        label="different address"
                        name="billing"
                        labelStyle={{ textAlign: 'right' }}
                        style={{ marginTop: '9px' }}
                    />
                    <RaisedButton
                        label="Primary"
                        primary={true}
                        fullWidth={true}
                        type="submit"
                        style={{ marginTop: '20px' }}
                    />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => { 
    return {
        todos: state.todos,
        images: state.images
    }
}



export default connect(mapStateToProps, { addImage, addTodo })(Contact)