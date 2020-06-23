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

<div align="center">

<div class="wrappers">
  <h2 id="headline2">Interests</h2>


<div id="cover">
  
 <textarea onChange={handleChange("interests")}  placeholder={value.interests}></textarea>
  
</div>




<div id="inline">

  <button onClick={this.back}> Back </button>

  <button onClick={this.continue} >Continue</button>

</div>
</div>
</div>
       



   </MuiThemeProvider>
      
    );
  }
}

export default Interests;