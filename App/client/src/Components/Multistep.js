import React, { Component } from 'react'
import axios from 'axios';
import PersonalInfo from './PersonalInfo';
import Objective from './Objective';
import Experience from './Experience';
import Qualities from './Qualities'
import Education from './Education';
import Reference from './Reference';
import Interests from './Interests';




export class Multistep extends Component {

    constructor(props){
        super(props);
        //this.onSubmit = this.onSubmit.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        this.state={

            step: 1,
            firstname:"",
            surname:"",
            email:"",
            phoneNumber:"",
            dob:"",
            address:"",
            
            objective:"",
    
            employer:"",
            jobTitle:"",
            jstartDate:"",
            jendDate:"",
            jobObjective:"",
    
            qualities:"",
    
            interests:"",
    
            fieldOfStudy:"",
            schoolName:"",
            startDate:"",
            gradDate:"",
    
            rname:"",
            roccupation:"",
            remployer:"",
            remail:"",
            rphone:""
    
        }
    


    }
    
    //Proceed to next step
    nextStep =() =>{

        const {step } = this.state;
        this.setState({

            step: step +1
        });

    }
    /// go to previous step
    prevStep =() =>{

        const {step } = this.state;
        this.setState({

            step: step -1
        });

    }

    
    //handle fields change
    handleChange= input => e => {

        this.setState({[input]: e.target.value});

    }

    //retrieve state value
     getStateValue = input => e =>{

            return ("hello World");

     }

     

     onSubmit(){

        //e.preventDefault();

        const personal = {
        firstname:this.state.firstname,
        surname: this.state.surname,
        email: this.state.email,      
        phoneNumber: this.state.phoneNumber,
        dob: this.state.dob,
        address: this.state.address
        }

        axios.post('http://localhost:5000/personal/add' , personal)
            .then(res => console.log(res.data))
        
        window.Location = '/';

    }


   

    render() { 
        const {step} = this.state;
        const {firstname, surname,email,phoneNumber,dob,address,objective,employer,jobObjective,jobTitle,jstartDate,jendDate,qualities , interests,fieldOfStudy,startDate,gradDate,schoolName,rname,roccupation,remployer,remail,rphone} = this.state;
        const values = {firstname, surname,email,phoneNumber,dob,address,objective,employer,jobObjective,jobTitle,jstartDate,jendDate,qualities, interests, fieldOfStudy,startDate,gradDate, schoolName,rname,roccupation,remployer,remail,rphone};

        switch(step){
               case 1:
                   return(
                    <PersonalInfo
                        nextStep = {this.nextStep}
                        handleChange= {this.handleChange}
                        onSubmit = {this.onSubmit}
                        //getStateValue = {this.getStateValue}
                        value={values}
                        
                    />
                    );
                   
                    

                case 2:
                    return <Objective
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleChange= {this.handleChange}
                    value={values}
                    
                    
                    />
                case 3:
                    return <Experience
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleChange= {this.handleChange}
                    value={values}
                    
                    />

                    
                case 4:
                        return <Qualities
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange= {this.handleChange}
                        value={values}
                        
                        />

                case 5:
                        return <Education
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange= {this.handleChange}
                        value={values}
                            
                            
                            />
                 case 6:
                        return <Interests
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange= {this.handleChange}
                        value={values}
                                    
                                    
                                    />
                 case 7:
                        return <Reference
                        prevStep = {this.prevStep}
                        handleChange= {this.handleChange}
                        value={values}
                        />


                    
        }
    }
}

export default Multistep;
