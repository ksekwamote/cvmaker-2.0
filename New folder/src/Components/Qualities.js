import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios'

export default class Qualities extends Component {

  constructor(props){
    super(props);
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
    const qualities = {

        qualities: value.qualities

    }
    axios.post("http://localhost:5000/qualities/add", qualities)
     .then(res => console.log(res.data))

  }

  }

  render(){
  

    const {value , handleChange} = this.props;
    
    return (
        <MuiThemeProvider>
             <AppBar title="Qualities"/>
        <br/>
        <br/>
    
          <TextField
            id="outlined-textarea"
            label="Qualities and Qualifications"
            placeholder="List your Capabilties"
            multiline
            variant="outlined"
            rows="5"

            onChange={handleChange('qualities')}
            defaultValue={value.qualities}
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
              primary={false}
              onClick={this.onSubmit(value)}
            />
         
    
    



        </MuiThemeProvider>
    );
       
  }
}