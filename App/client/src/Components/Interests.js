import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import {makeStyles} from '@material-ui/core/styles';
import axios from 'axios';


export  class Interests extends Component {

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
        const int = {

          interest: value.interests

        }
  
        axios.post('http://localhost:5000/interest/add' ,int)
        .then(res =>console.log(res.data))
      }
  
    }

    render(){ 
          const{value, handleChange} = this.props;
  
    return (


        <MuiThemeProvider>
        <AppBar title="Interests"/>
   <br/>
   <br/>

     <TextField
       id="outlined-textarea"
       floatingLabelText="Hobbies and Interests"
       hintText="Music, Reading, Painting, Soccer"
       multiline
       variant="outlined"
      
       rows="5"
       onChange={handleChange("interests")}
       defaultValue={value.interests}
     />
     <br/>
     <br/>

         <RaisedButton
               label="Back"
               primary={false}
               onClick={this.back}
               
           
           />

           <br/>
           <br/>

           <RaisedButton
               label="Continue"
               primary={true}
               onClick={this.continue}
              
           
           />

           <br/>

          <RaisedButton
                    label="Submit"
                    primary={true}
                    onClick ={this.onSubmit(value)}
                    
                    
                />   
          

    





   </MuiThemeProvider>
      
    );
  }
}

export default Interests;