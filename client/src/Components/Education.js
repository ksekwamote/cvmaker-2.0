import React, { Component , useRef} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import $ from "jquery";
import Educate from "./child/Educate";
import ReactHtmlParser from 'react-html-parser'


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
        this.consolePrint = this.consolePrint.bind(this)
        this.appendEducation = this.appendEducation.bind(this)
        const educater =   '<Educate ref={this.formRef}/>'
        //this.childRef = React.createRef();
        
        this.state={
                index:0
        }


    }

    formRef = React.createRef();
  




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
 
    appendEducation(eduArr){
           // const stateOf  = useRef(null);
            //console.log(stateOf.current.focus())
           // console.log(this.formRef.current)
           //const textInput = useRef(null);
          // textInput.current.focus();

          const refer = this.formRef


          console.log(refer.current.state)

       

                return (
                    <div>
                        {eduArr.map(name =>(

                                <Educate 
                                ref={this.formRef}
                                
                                />
                        ))}
         
                        
                    </div>
                 )
        


       

  


 


    }
         
      

    consolePrint = (e, value) => {
       
        e.preventDefault();
        const ed ={

            fieldOfStudy:"Field Of Study",
            schoolName:"School Name",
            startDate:"Start Date",
            gradDate:"Graduation Date",
        }
       value.education.push(ed);
          
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

        const {value, handleChange ,handleArrayChange ,handleArray} = this.props;
        
        const {index} = this.state;
        const indexState = {index};

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

                <ul>
                <div className="buttonc">
						<li>
						<input onChange={handleChange('fieldOfStudy')}  name="fos" placeholder={value.fieldOfStudy}></input>
						</li>
					</div>

                    <div className="buttonc">
			            <li>
					        <input onChange={handleChange('schoolName')} name="schoolName" placeholder={value.schoolName}></input>

			            </li>
		            </div>

                    <div className="buttonc">
			<li>
				<input onChange={handleChange('startDate')} name="startDate" placeholder={value.startDate}></input>
				 

			</li>
		</div>

		<div className="buttonc">
			<li>

					<input onChange={handleChange('gradDate')} name="endDate" placeholder={value.gradDate}></input>
				

			</li>
		
		</div>

        <Educate 
                                 
                            
                                />
        


            <div>{this.appendEducation(value.education)}</div>
            
         
 

        <div>

            
        </div>

                </ul>
             
                

</div>
                
          

</div>

<div id="inline">

    <button className="contback" onClick={this.back} >Back</button>

    <button id="another" className="conc" >+</button>
    <button id="remove" className="conc" >-</button>
    <button className="conc" onClick={handleArrayChange(ed , indexState)}>ADD </button>

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


