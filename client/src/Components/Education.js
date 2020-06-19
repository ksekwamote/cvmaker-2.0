import React, { Component , useRef} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
import $ from "jquery";
import Educate from "./child/Educate";
import ReactHtmlParser from 'react-html-parser'
import ReactDOM from "react-dom";


export class Education extends Component {

    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this);
        this.state={
                index:0,
                button: false
     
    
        }


            }
        

    handleClick = value =>{

        if(value==1){

            this.state.button= false;

        }

        else{

            this.state.button=true;
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
        let btn_class = this.state.black ? "blackButton" : "whiteButton";
        const ed ={

            fieldOfStudy:"Field Of Study",
            schoolName:"School Name",
            startDate:"Start Date",
            gradDate:"Graduation Date",
        }

        console.log(value.education.length)

        return (
           <MuiThemeProvider>
               <React.Fragment>
               <div align="center">

        <div className="wrapper"  >

             <div className="job">

                <div id="clone">

               <div>
                    {value.education.map(item => (

                        <Educate value={item} />

                    ))}

               </div>
             
                

</div>
                
          

</div>

<div id="inline">

    <button className="contback" onClick={this.back} >Back</button>

    
    <button className={value.button ? "conc":"remove"} onClick={popEducationArray(ed)}>-</button>
    <button className="conc" onClick={addToEducationArray(ed , value)}>+</button>

    <button className="contback"  >Continue</button>
</div>


</div>

</div>

               </React.Fragment>
           </MuiThemeProvider>
        )
    }
}


export default Education;


