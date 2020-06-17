import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import {makeStyles} from '@material-ui/core/styles';
import axios from 'axios';
import {saveAs} from 'file-saver';
import "./css/person.css";

class PersonalInfo  extends Component {


    constructor(props){
            super(props);

            
            this.onSubmit = this.onSubmit.bind(this);

       


    }

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    };

    

    
   onSubmit() {

       return event => {
        event.preventDefault();

         axios.get('http://localhost:5000/pdfcreate/download', {responseType: 'blob'})
                .then((res) => {
                    const pdfBlob = new Blob([res.data], {type: 'application/pdf'});

                    saveAs(pdfBlob, 'newPdf.pdf');


                })
    }

    }

    

 
  

    render() {    
        
        const{value , handleChange , onSubmit} = this.props;

       
        return (

            <MuiThemeProvider>
            <React.Fragment>

    <div align="center">

    <div className="wrapper" >

        <h1 id ="headline">cvmaker</h1>

            <ul>
                
                    <div class="buttonc">
                        <li>
                        <input type="" name="firstname" placeholder="Firstname"></input>
                        </li>
                    </div>
                
            

        <div className="buttonc">
            <li>
                    <input type="" name="surname" placeholder="Surname"></input>

            </li>
        
        </div>

        <div className="buttonc">
            <li>

                    <input type="" name="email" placeholder="Email"></input>
                

            </li>
        
        </div>

        <div className="buttonc">
            <li>

                    <input type="" name="phoneNumber" placeholder="PhoneNumber"></input>
                

            </li>
        
        </div>

        <div className="buttonc">

            <li>
                    <input type="" name="dob" placeholder="Date Of Birth"></input>

            </li>
        
        </div>

        <div className="buttonc">
            <li>
                    <input type="" name="address" placeholder="Address"></input>
            </li>
        </div>

     <button onClick={this.continue} >Continue</button>
   

    </ul>


        



    </div>

    </div>

    </React.Fragment>
           </MuiThemeProvider>
          
        )
    }
}

const styles={

    button:{

        padding: "100px"
        
    }

}


export default PersonalInfo;