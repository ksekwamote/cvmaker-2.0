import React, {Component}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';



class Objective extends Component {
    
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
      const obj = {

        obj: value.objective
      }

      axios.post('http://localhost:5000/objective/add' ,obj)
      .then(res =>console.log(res.data))
    }

  }



    render(){
  
      const {value , handleChange} = this.props;
   
  
    return (
       <MuiThemeProvider>
             <AppBar title="Objective"/>
        <br/>
        <br/>
    
          <TextField
            id="outlined-textarea"
            label="Objectives"
            placeholder="List you objective"
            multiline
            variant="outlined"
            rows="5"
            onChange={handleChange('objective')}
            defaultValue={value.objective}
          />
          <br/>
          <br/>

              <RaisedButton
                    label="Back"
                    primary={false}
                    onClick= {this.back}
                    
                
                />

                <br/>
                <br/>

                <RaisedButton
                    label="Continue"
                    primary={true}
                    onClick= {this.continue}
                   
                
                />

                <RaisedButton
                    label="Submit"
                    primary={true}
                    onClick ={this.onSubmit(value)}
                    
                    
                />    
         
    
    



        </MuiThemeProvider>
    );
    }
  }

export default Objective;