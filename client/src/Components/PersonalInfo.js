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

    back = e => {
        e.preventDefault();
        this.props.prevStep();
      
      }

    

    
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

    <div className="wrappers" >

    <h2 id="headline2">Personal Information</h2>
            <ul>
                
                    <div class="buttonc">
                        <li>
                        <input onChange={handleChange('firstname')}   name="firstname" placeholder={value.firstname}></input>
                        </li>
                    </div>
                
            

        <div className="buttonc">
            <li>
                    <input onChange={handleChange('surname')}   name="surname" placeholder={value.surname}></input>

            </li>
        
        </div>

        <div className="buttonc">
            <li>

                    <input onChange={handleChange('email')}  name="email" placeholder={value.email}></input>
                

            </li>
        
        </div>

        <div className="buttonc">
            <li>

                    <input onChange={handleChange('phoneNumber')}  name="phoneNumber" placeholder={value.phoneNumber}></input>
                

            </li>
        
        </div>

        <div className="buttonc">

            <li>
                    <input type="" onChange={handleChange('dob')} name="dob" placeholder="Date Of Birth"></input>

            </li>
        
        </div>

        <div className="buttonc">
            <li>
                    <input type="" onChange={handleChange('address')} name="address" placeholder={value.address}></input>
            </li>
        </div>

    <button className="contback" onClick={this.back} >Back</button>
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