import React, { Component , useRef} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import $ from "jquery";
import Educate from "./child/Educate";
import ReactHtmlParser from 'react-html-parser'
import ReactDOM from "react-dom";


const code = `<div>
        <Educate/>    
</div>`;

const ed ={

    fieldOfStudy:"Field Of Study",
    schoolName:"School Name",
    startDate:"Start Date",
    gradDate:"Graduation Date",
}




export class Education extends Component {

  
    
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        
       // this.appendEducation = this.appendEducation.bind(this)
        //const educater =   '<Educate ref={this.formRef}/>'
        //this.childRef = React.createRef();
        
        this.state={
                index:0
        }


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
        const education = {
            fieldOfStudy: value.fieldOfStudy,
            schoolName: value.schoolName,
            startDate: value.startDate,
            gradDate: value.gradDate

        }

        axios.post("http://localhost:5000/education/add" ,education)
        .then(res => console.log(res.data))
    }

      }

  
    render() {

        const {value, handleChange ,addToEducationArray , popEducationArray} = this.props;
        const ed ={

            fieldOfStudy:"Field Of Study",
            schoolName:"School Name",
            startDate:"Start Date",
            gradDate:"Graduation Date",
        }

        return (
           <MuiThemeProvider>
               <React.Fragment>
               <div align="center">

        <div className="wrapper"  >

             <div className="job">

                <div id="clone">
                <h2 id="title"  >Education</h2>

               <div>
                    {value.education.map(item => (

                        <Educate value={item} />

                    ))}

               </div>
             
                

</div>
                
          

</div>

<div id="inline">

    <button className="contback" onClick={this.back} >Back</button>

    <button id="another" className="conc" >+</button>
    <button id="remove" className="conc" onClick={popEducationArray(ed)} >-</button>
    <button className="conc" onClick={addToEducationArray(ed , value)}>ADD </button>

    <button className="contback" >Continue</button>
</div>


</div>

</div>

               </React.Fragment>
           </MuiThemeProvider>
        )
    }
}


export default Education;


