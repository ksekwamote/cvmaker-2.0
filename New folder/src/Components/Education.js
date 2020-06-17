import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

export class Education  extends Component {

    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)

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
        const education = {
            fieldOfStudy: value.fieldOfStudy,
            schoolName: value.schoolName,
            startDate: value.startDate,
            gradDate: value.gradDate

        }

        axios.post("http://localhost:5000/education/add" ,education)
        .then(res => console.log(res.data))
    }

      }


  
    render() {

        const {value, handleChange} = this.props;

        return (
           <MuiThemeProvider>
               <React.Fragment>
                <AppBar title="Education"/>
                <br/>
                <TextField
                    hintText="Enter your Qualification"
                    floatingLabelText="Field Of Study"
                    onChange= {handleChange('fieldOfStudy')}
                    defaultValue={value.fieldOfStudy}
                 />
                <br/>

                <TextField
                    hintText="Enter your School Name"
                    floatingLabelText="School Name"
                    onChange={handleChange('schoolName')}
                    defaultValue={value.schoolName}
                />
                
                <br/>
                
                <TextField
                 id="date"
                 floatingLabelText="Starting Date"
        
                type="date"
                defaultValue="2019-05-05"
                onChange={handleChange('startDate')}
                defaultValue={value.startDate}
        
                InputLabelProps={{
                shrink: true,
                }}
                />

                <br/>

                <TextField
                 id="date"
                 floatingLabelText="Graduation Date"
        
                type="date"
                defaultValue="2017-05-24"
                onChange={handleChange('gradDate')}
                default={value.gradDate}
        
                InputLabelProps={{
                shrink: true,
                }}
                />

                <br/>

                <RaisedButton
                    label="Back"
                    primary={false}
                    //style={styles.button}
                    onClick={this.back}
                 
                
                />
                <br/>
                <br/>

                <RaisedButton
                    label="Continue"
                    primary={true}
                    //style={styles.button}
                    onClick={this.continue}
                  
                
                />

                <RaisedButton
                    label="Submit"
                    primary={false}
                    onClick={this.onSubmit(value)}
                 
                
                />  
            
            
              <br/>
              


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

export default Education;


