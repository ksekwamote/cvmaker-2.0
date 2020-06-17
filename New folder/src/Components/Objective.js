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
      <React.Fragment>

      <div align="center">

	<div class="wrapper">

		<h1 id="headline">cvmaker</h1>
			<h2 id="headline2">Objectives</h2>

				
					<div id="cover">
						
						<textarea type="" style="" name="firstname" placeholder="Objective/Summary"></textarea>
					
					</div>


		

		<div id="inline">

		<button onClick={this.back} >Back</button>

		<button onClick={this.continue} >Continue</button>
	</div>



	</div>

	</div>

  </React.Fragment>
           </MuiThemeProvider>
      
    );
    }
  }

export default Objective;