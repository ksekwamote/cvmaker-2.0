import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import {saveAs} from 'file-saver';
import $ from "jquery";
import Refer from "./child/Refer"


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
            const{value, handleChange ,addToReferenceArray,popToReferenceArray} = this.props;

                    const refe = {

                        rname:"Referent Name",
                        roccupation:"Occupation",
                        remployer:"Employer",
                        remail:"Email",
                        rphone:"Phone Number"
                    }
                    return (
                    <MuiThemeProvider>
                        <React.Fragment>
                        <div align="center">

            <div className="wrappers"  >

                    <div className="job">

                            <div id="clone">
                            <br/> <br/>

                                <div>
                                    {value.reference.map(item=>(

                                            <Refer value={item}/>

                                    ))


                                    }

                                </div>
                            

                                </div>

            </div>

            <div id="inline">

                <button className="contback" onClick={this.back} >Back</button>

                <button className="conc" onClick={addToReferenceArray(refe , value)} >+</button>
                <button className={value.rbutton ? "conc":"remove"} onClick={popToReferenceArray(refe)}>-</button>
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


