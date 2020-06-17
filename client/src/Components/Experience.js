import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from "axios";
import "./css/experience.css";
import $ from "jquery";


export class Experience  extends Component {

    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this);


    }

    componentDidMount(){

        const div =  $(document).ready(function(){
            $("#remove").hide();
    
              $('.wrapper').on('click', '#another', function() {
                  $('#another').closest('.wrapper').find('#clone').first().clone().appendTo('.job'); 
    
                          $("#remove").show();
                });
    
    
             $('.wrapper').on('click', '#remove', function() {
                  $('#remove').closest('.wrapper').find('#clone').last().remove();
    
                      var remBut = $('[id^=clone]').length;
                    if(remBut<2){
    
                        $("#remove").hide();
                            }
    
                });
    
    
                
        })
    

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
               <div align="center">

<div className="wrapper"  >  

        <div className="job">

                <div id="clone">
                <h2 id="title"  >Job Experience</h2>

                <ul>
                <div className="buttonc">
						<li>
						<input name="employer" onChange={handleChange('employer')} placeholder={value.employer}></input>
						</li>
					</div>

                    <div className="buttonc">
			            <li>
					        <input onChange={handleChange('jobTitle')} name="jobTitle" placeholder={value.jobTitle}></input>

			            </li>
		            </div>

                    <div className="buttonc">
			<li>
				<input onChange={handleChange('jstartDate')} name="jstartDate" placeholder={value.startDate}></input>
				

			</li>
		</div>

		<div className="buttonc">
			<li>

					<input onChange={handleChange('jendDate')} name="jendDate" placeholder={value.endDate}></input>
				

			</li>
		
		</div>

			<div className="buttonc">

			<li>
					<input onChange={handleChange('jobObjective')} name="jobObjectives" placeholder={value.jobObjective}></input>

			</li>

				

		
			</div>




                </ul>

</div>

</div>

<div id="inline">

    <button className="contback" onClick={this.back} >Back</button>

    <button id="another" className="conc" >+</button>
    <button id="remove" className="conc" >-</button>

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
