import React, {Component}from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
import "./css/objective.css";



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

      <div class="wrappers">

        <h2 id="headline2">Objectives</h2>

    
      <div id="cover">
        
       <textarea  onChange={handleChange('objective')}   placeholder={value.objective}></textarea>
        
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

export default Objective;