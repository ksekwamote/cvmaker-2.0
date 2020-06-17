import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import {saveAs} from 'file-saver';
import $ from "jquery";


export class Reference  extends Component {

    constructor(props){
        super(props);
  
        this.onSubmit = this.onSubmit.bind(this);
        this.createAndDownloadPdf = this.createAndDownloadPdf.bind(this);
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
      
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      }

      createAndDownloadPdf(value) {

        return event => {
            event.preventDefault();

            axios.post('http://localhost:5000/pdfcreate/create/', value)
                .then(() => {  
                    axios.get('http://localhost:5000/pdfcreate/download', {responseType: 'blob'})
                        .then((res) => {
                            const pdfBlob = new Blob([res.data], {type: 'application/pdf'});

                        saveAs(pdfBlob, 'newPdf.pdf');


                })
              
 
                })
        
    }
     }

      onSubmit(value) {

        return event => {
          event.preventDefault();

        const reference= {
            rname: value.rname, 
            roccupation: value.roccupation,
            remployer: value.remployer,
            remail: value.remail,
            rphone: value.rphone,
            
        }

        axios.post("http://localhost:5000/reference/add", reference)
         .then(res => console.log(res.data))
         .catch(err =>console.log('Error found at: '+ err) )
    }

      }

  
    render() {
        const{value, handleChange} = this.props;
        return (
           <MuiThemeProvider>
               <React.Fragment>
               <div align="center">

<div className="wrapper"  >

        <div className="job">

                <div id="clone">
                <h2 id="title"  >Reference</h2>

                <ul>
                <div className="buttonc">
						<li>
						<input onChange={handleChange('rname')} name="rname" placeholder={value.rname}></input>
						</li>
					</div>

                    <div className="buttonc">
			            <li>
					        <input onChange={handleChange('roccupation')} name="roccupation" placeholder={value.roccupation}></input>

			            </li>
		            </div>

                    <div className="buttonc">
			<li>
				<input onChange={handleChange('remployer')} name="remployer" placeholder={value.remployer}></input>
				

			</li>
		</div>

		<div className="buttonc">
			<li>

					<input onChange={handleChange('remail')} name="remail" placeholder={value.remail}></input>
				

			</li>
		
		</div>

			<div className="buttonc">

			<li>
					<input  onChange={handleChange('rphone')} name="rphone" placeholder={value.rphone}></input>

			</li>

				

		
			</div>




                </ul>

</div>

</div>

<div id="inline">

    <button className="contback" onClick={this.back} >Back</button>

    <button id="another" className="conc" >+</button>
    <button id="remove" className="conc" >-</button>
</div>


    



</div>

</div>
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

export default Reference;


