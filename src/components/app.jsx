import React from 'react'
import { ContactForm } from './contact-form'
import { Message } from './message'
import { UserPanel } from './user-panel'
import setState from 'react'

export class App extends React.Component{

    CONTACT_FORM_DEFAULTS = {
        name: '',
        email: '',
        option:'A',
        select: 1,
        type:'',
        message:''
    }
    constructor(props){
        super(props)
        this.state = {
            contact: {
                ...this.CONTACT_FORM_DEFAULTS,
            },

            sent: false,
            currentUser: null
        }
        
        this.contactChanged = this.contactChanged.bind(this)
        this.sendContact = this.sendContact.bind(this)
        this.logIn = this.logIn.bind(this)
        // this.handleClick = this.handleClick.bind(this)
    }

    contactChanged(contact){
        this.setState({
            contact,
        })
        console.log(this.state)

    }

    sendContact(contact){
        // For now just mark it as `sent`w
        this.setState({
            sent:true
        })
    }

    logIn = () => {   
        this.setState({currentUser:{
            name:'Test User',
            email:'user@example.com'
        }}, () => {this.setState( {
            contact: {
                name: this.state.currentUser.name,
                email: this.state.currentUser.email
            }})
        })
    }
    render(){
        console.log(this?.state?.currentUser?.name)
        return <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="pull-right">
                        <button class="btn btn-default" onClick={this.logIn}>
                            {/* {console.log(this.state)} */}
                            <i className="glyphicon glyphicon-user"></i> Log In
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h2>Contact us</h2>
                    <p>Please fill in form on the right to get fast reply</p>
                    <img style={{width:'100%'}} src="http://via.placeholder.com/300x200"/>
                </div>
                <div className="col-md-8">
                    <UserPanel user={this.state.contact}/>
                    <ContactForm data={this.state.contact} onChange={this.contactChanged} onSubmit={this.sendContact}/>
                    <Message props={this.state.sent}/>
                </div>
            </div>
        </div>
    }
}
