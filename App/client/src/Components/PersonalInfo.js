import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import {makeStyles} from '@material-ui/core/styles';
import axios from 'axios';
import {saveAs} from 'file-saver';

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
                <AppBar title="Personal Information"/>
                <br/>
                <TextField
                    hintText="Enter Your First Name"
                    floatingLabelText="First Name"
                    onChange={handleChange('firstname')}
                    defaultValue = {value.firstname}

                   
                />
                <br/>

                <TextField
                    hintText="Enter Your Last Name"
                    floatingLabelText="Last Name"
                    onChange={handleChange('surname')}
                   defaultValue={value.surname}
                />
                <br/>
                <TextField
                    hintText="Enter Your First Email"
                    floatingLabelText="Email"
                   onChange={handleChange('email')}
                  
                    defaultValue={value.email}
                />
                <br/>
                <TextField
                    hintText="Enter Your Phone Number"
                    floatingLabelText="Phone Number"
                    onChange={handleChange('phoneNumber')}
                   defaultValue={value.phoneNumber}
                />
                <br/>
              <TextField
                id="date"

                floatingLabelText="Date Of Birth"

                type="date"

                onChange={handleChange('dob')}

                defaultValue="2017-05-24"
                inputlabelprops={{
                shrink: true,
                }}
                />

            <br/>
            <TextField
                    hintText="Enter Your Address"
                    floatingLabelText="Address"
                    onChange={handleChange('address')}
                   defaultValue={value.address}
                />
              <br/>
              
                <RaisedButton
                    label="Continue"
                    primary={true}
                    onClick ={this.continue}
                    
                    
                />
       
                <RaisedButton
                    label="Submit"
                    primary={false}
                    onClick ={this.onSubmit()}
                    
                />
              


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