import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import {saveAs} from 'file-saver';


export class Reference  extends Component {

    constructor(props){
        super(props);
  
        this.onSubmit = this.onSubmit.bind(this);
        this.createAndDownloadPdf = this.createAndDownloadPdf.bind(this);
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
                            const pdfBlob = new Blob([res.data], {type: ,mb 'application/pdf'});

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
                <AppBar title="Reference"/>
                <br/>
                <TextField
                    hintText="Enter the referent's Name"
                    floatingLabelText="Referent Name"
                    onChange={handleChange('rname')}
                    defaultValue={value.rname}
                 />
                <br/>

                <TextField
                    hintText ="Enter the referent's Occupation"
                    floatingLabelText ="Referent Occupation"
                    onChange={handleChange('roccupation')}
                    defaultValue={value.roccupation}
                   
                />
                <br/>

                <TextField
                    hintText="Enter the referent's Employer"
                    floatingLabelText="Referent Employer"
                    onChange={handleChange('remployer')}
                    defaultValue={value.remployer}
                />
                <br/>

                 <TextField
                    hintText="Enter the referent's Email"
                    floatingLabelText="Referent Email"
                    onChange={handleChange('remail')}
                    defaultValue={value.remail}
                  
                />
                <br/>
                <TextField
                    hintText="Enter the referent's Phone Number"
                    floatingLabelText="Referent Phone Number"
                    onChange={handleChange('rphone')}
                    defaultValue={value.rphone}
                   
                />

                <br/>

                <RaisedButton
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
                 
                
                />
            
              <br/>

              <RaisedButton
                    label="Submit"
                    primary={true}
                    style={styles.button}
                    onClick={this.createAndDownloadPdf(value)}
                />

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


