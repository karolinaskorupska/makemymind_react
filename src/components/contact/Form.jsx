import React, { Component } from 'react';
// formularz kontrolowany: imię i nazwisko nie może być puste, email musi zawierać @, wiadomość też nie może być pusta
//fontawesome:
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    faCheckCircle,
    faInfoCircle,
    faTimesCircle
   } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(
    fab,
    faCheckCircle,
    faInfoCircle,
    faTimesCircle
  );

  
class Form extends Component{

    state={
        name:'',
        email:'',
        message:'',
        errorName:'',
        errorEmail:'',
        errorMessage:'',
        isValidated:false,
    }

    createNewContact=()=>{
        const {name, email, message}= this.state;

        const newContact = {
            name :name,
            email:email,
            message:message
        }
        
        fetch('http://localhost:4000/contactForm',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newContact),
        })
        .then((response)=>response.json())
        .then((newContact)=>{
            console.log({newContact})
        })
    }

    handleChange=(event)=>{
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    validate =()=>{

        const {name, email, message}=this.state;
        let isValid= true;

        if(name === ''){
            isValid=false;
            this.setState({ errorName:"Uzupełnij dane"})
        }else{
            this.setState({errorName:''});
        }

        if(message === ''){
            isValid=false;
            this.setState({ errorMessage:"Uzupełnij dane"})
        }else{
            this.setState({errorMessage:''});
        }

        if(email === '' || email.indexOf("@") === -1){
            isValid=false;
            this.setState({ errorEmail:"Uzupełnij dane o @"})
        }else{
            this.setState({errorEmail:''});
        }
        return isValid;
    }
    handleSubmit=(event)=>{
        event.preventDefault();

        this.validate();

        if(this.validate()){
            this.setState({
                isValidated: true,
                name: '',
                email: '',
                text: '' ,
                message:''
            });
            // console.log("zwalidowano");
            this.createNewContact();
        }
      
      }
    render(){
        const{name, email, message, errorName,errorMessage,errorEmail,isValidated}=this.state;
        

        return(
            <>
                <form>
                        <div className="personal-data">
                            <div className="name">
                                <label >Wpisz imię i nazwisko </label>
                                <input 
                                type="text" 
                                name="name" 
                                value={name}
                                onChange={this.handleChange} 
                                placeholder="np. Anna Nowak"/>
                            </div>  
                            <div className="email">
                                <label> Wpisz adres e-mail </label>
                                <input 
                                value={email}
                                type="email" 
                                name="email" 
                                onChange={this.handleChange}
                                placeholder="np. anna.nowak@gmail.com" />    
                            </div>
                        </div>
                        <div className="textarea">
                            <label>Wpisz treść wiadomości </label>
                                <textarea 
                                wrap="on" 
                                rows="10" 
                                placeholder="np. Chcę się umówić na zajęcia!"
                                name="message"
                                value={message}
                                onChange={this.handleChange}></textarea>
                            
                        </div>
                </form>

                    
                <button className="wyslij-wiadomosc"
                type="submit" value="Wyślij" 
                onClick={this.handleSubmit}>Wyślij wiadomość</button>
               
                {isValidated && <div className="alert green ok">
                    <FontAwesomeIcon icon={['fas', 'check-circle']}
                                                className="fas fa-check-circle"
                                                fixedWidth></FontAwesomeIcon>Dziękujemy!</div>}
                {errorName && <div className =" alert red error">
                <FontAwesomeIcon icon={['fas', 'times-circle']}
                                                className="fas fa-times-circle"
                                                fixedWidth></FontAwesomeIcon>{errorName}</div>}
                {errorEmail && <div className ="alert red error">
                <FontAwesomeIcon icon={['fas', 'times-circle']}
                                                className="fas fa-times-circle"
                                                fixedWidth></FontAwesomeIcon>{errorEmail}</div>}
                {errorMessage && <div className ="alert red error">
                <FontAwesomeIcon icon={['fas', 'times-circle']}
                                                className="fas fa-times-circle"
                                                fixedWidth></FontAwesomeIcon>{errorMessage}</div>}

            </>
        ) 
    }
}

export default Form;