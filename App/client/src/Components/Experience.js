import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from "axios";

export class Experience  extends Component {

    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this);


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

        const{value , handleChange} = this.props;
   
        return (
           <MuiThemeProvider>
               <React.Fragment>
                <AppBar title="Work Experience"/>
                <br/>
                <TextField
                    hintText="Enter the name of your Employer"
                    floatingLabelText="Employer"
                    onChange={handleChange('employer')}
                    defaultValue={value.employer}
                 />
                <br/>

                <TextField
                    hintText="Enter your Job Title"
                    floatingLabelText="Job Title"
                    onChange={handleChange('jobTitle')}
                    defaultValue={value.jobTitle}
                />
                
                <br/>
                
                <TextField
                    hintText="e.g December 2019, July 2014"
                    floatingLabelText="Start Date"
                    onChange={handleChange('jstartDate')}
                    defaultValue={value.startDate}
                />

                <br/>

                <TextField
                    hintText="e.g January 2019, Present"
                    floatingLabelText="End Date"
                    onChange={handleChange('jendDate')}
                    defaultValue={value.endDate}
                />

                <br/>

                <TextField
                    hintText="Outline your Job Acheivements and Objectives"
                    floatingLabelText="Job Objectives"
                    multiLine
                    rows="4"
                    onChange={handleChange('jobObjective')}
                    defaultValue={value.jobObjective}
                />
                <br/>

                <RaisedButton
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
                 
                
                />
                <br/>

                <RaisedButton
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                  
                
                />

              <br/>

              <RaisedButton
                    label="Submit"
                    primary={false}
                    style={styles.button}
                    onClick={this.onSubmit(value)}
                 
                
                />
              


               </React.Fragment>
           </MuiThemeProvider>
        )
    }
}

const styles={

    button:{

        margin:15

    }

}

export default Experience;
