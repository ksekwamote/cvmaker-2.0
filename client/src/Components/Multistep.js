import React, { Component } from 'react'
import axios from 'axios';
import PersonalInfo from './PersonalInfo';
import Objective from './Objective';
import Experience from './Experience';
import Qualities from './Qualities'
import Education from './Education';
import Reference from './Reference';
import Interests from './Interests';
import Educate from "./child/Educate";
import "./css/multistep.css";


export class Multistep extends Component {

    constructor(props){
        super(props);
        //this.onSubmit = this.onSubmit.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        this.state={

            step: 1,
            button:false,
            firstname:"Firstname",
            surname:"Surname",
            email:"Email",
            phoneNumber:"Phone Number",
            dob:"Date Of Birth",
            address:"Address",
            
            objective:"Objective",
    
            employer:"Employer",
            jobTitle:"Job Title",
            jstartDate:"Start Date",
            jendDate:"End Date",
            jobObjective:"Job Objective",
    
            qualities:"Qualities",
    
            interests:"Interests",
    
            fieldOfStudy:"Field Of Study",
            schoolName:"School Name",
            startDate:"Start Date",
            gradDate:"Graduation Date",

            education:[
                {
            
                    fieldOfStudy:"Field Of Study",
                    schoolName:"School Name",
                    startDate:"Start Date",
                    gradDate:"Graduation Date"}
                  

            ],

            myArray:[],
    
            rname:"Referent Name",
            roccupation:"Occupation",
            remployer:"Employer",
            remail:"Email",
            rphone:"Phone Number"
    
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
    handleChange= input => val => e => {

        this.setState({[input]: val});

    }

    handleArray = input => e =>{

        this.setState({ myArray: [...this.state.myArray, 'new value']})


    }

    addToEducationArray = input => e => {
    
        this.setState({ education: [...this.state.education, input ]})

        if(this.state.education.length>=1){

                this.state.button=true;
        }
        else{
            this.state.button=false;

        }

    }

    popEducationArray = input => e => {

    if (this.state.education.length>1){

        this.state.education.pop();

        this.setState({education: this.state.education})

       
    }

    if(this.state.education.length>1){

        this.state.button=true;
    }
    else{
        this.state.button=false;

        }

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
        const {button,firstname, surname,email,phoneNumber,dob,address,objective,employer,jobObjective,jobTitle,jstartDate,jendDate,qualities , interests,fieldOfStudy,startDate,gradDate,schoolName,education,rname,roccupation,remployer,remail,rphone} = this.state;
        const values = {button,firstname, surname,email,phoneNumber,dob,address,objective,employer,jobObjective,jobTitle,jstartDate,jendDate,qualities, interests, fieldOfStudy,startDate,gradDate, schoolName,education,rname,roccupation,remployer,remail,rphone};
 
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
                        addToEducationArray = {this.addToEducationArray}
                        popEducationArray = {this.popEducationArray}
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
