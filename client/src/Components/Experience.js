import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from "axios";
import "./css/experience.css";
import $ from "jquery";
import Expe from "./child/Expe"


export class Experience  extends Component {

    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            index:0

        }


    }

    

   
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      }
      
    back = e => {
        e.preventDefault();
        this.props.prevStep();
      }

      onSubmit(value) {

        return event => {
          event.preventDefault();

        const experience= {
            employer: value.employer,
            jobTitle: value.jobTitle,
            startDate: value.jstartDate,
            endDate: value.jendDate,
            jobObjective: value.jobObjective
        }

        axios.post("http://localhost:5000/experience/add", experience)
         .then(res => console.log(res.data))
    }

      }





  
    render() {

        const{value , handleChange ,addToExperienceArray ,popToExperienceArray} = this.props;
        const ex ={
            employer:"Employer",
            jobTitle:"Job Title",
            jstartDate:"Start Date",
            jendDate:"End Date",
            jobObjective:"Job Objective",    

        }


        return (
           <MuiThemeProvider>
               <React.Fragment>
               <div align="center">

                <div className="wrappers"  >  

            <div className="job">

                <div id="clone">
                <br/> <br/>

                    <div>
                            {value.experience.map(item => (

                                    <Expe value ={item}/>

                            ))}

                    </div>
                
                </div>

            </div>

    <div id="inline">

        <button className="contback" onClick={this.back} >Back</button>


        <button className={value.ebutton ? "conc":"remove"} onClick={popToExperienceArray(ex)} >-</button>
        <button id="another" className="conc" onClick={addToExperienceArray(ex)} >+</button>
      

        <button className="contback" onClick={this.continue} >Continue</button>
    </div>

    </div>

    </div>
               </React.Fragment>
           </MuiThemeProvider>
        )
    }
}


export default Experience;
