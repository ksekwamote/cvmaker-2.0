import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios'
import "./css/objective.css";

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
            <React.Fragment>

<div align="center">

<div class="wrapper">
  <h2 id="headline2">Qualities</h2>


<div id="cover">
  
 <textarea onChange={handleChange('qualities')}  placeholder={value.qualities}></textarea>
  
</div>




<div id="inline">

  <button onClick={this.back}> Back </button>

  <button onClick={this.continue} >Continue</button>

</div>
</div>
</div>

</React.Fragment>

        </MuiThemeProvider>
    );
       
  }
}