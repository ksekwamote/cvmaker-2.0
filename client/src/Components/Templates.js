import React, { Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "./css/template.css"
import $ from 'jquery';

export class Templates extends Component {

    constructor(props){
        super(props)
		this.onChangeValue = this.onChangeValue.bind(this);
        this.state={
				index:0,
				temp:""
				
    
        }
    }

    componentDidMount () {

        $(document).ready(function(){


            $("input[type='radio']").click(function(){
                var radioValue = $("input[name =template]:checked").val();
                $("."+radioValue).css({'filter':'brightness(130%)', 'box-shadow': '0px 0px 10px #fff'})
                var radio = "."+radioValue;
                $("img:not("+radio+")").css({'filter':'', 'box-shadow':''})

                
            })

    })     
	}
	
	onChangeValue(value) {

		return event =>{
		console.log(event.target.value)
		 this.setState({temp:event.target.value})
		}
	  }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      }


render(){

	const {value ,onChangeTemplate} = this.props;

	//let stat = this.state.temp = value.template;
	//let stat = this.state.temp = value.temp;

	const ed ={

		fieldOfStudy:"Field Of Study",
		schoolName:"School Name",
		startDate:"Start Date",
		gradDate:"Graduation Date",
	}

   return(

    <MuiThemeProvider>
<React.Fragment>
       <div>
	   
                    
	<div align="center">
	<div className="wrapper">
		
			<h2>Templates</h2>
		<div onChange= {onChangeTemplate} className="radio-toolbar">
			
		<div id="flex">	
			<div id="pad">
			
				<ul>
					<li id="imgList">
						<img id="myImg" className="template1" src={require("../images/templates/template 1.png")} alt="Snow"></img>
							<div id="myModal" className="modal">
  								<span className="close">&times;</span>
  								<img className="modal-content" id="img01"></img>
							</div>
					</li>

					<li id="imgList">
					
					
							<input type="radio" id="template1" name="template" value="template1" ></input>
							<label for="template1">Template 1</label>

					</li>
				</ul>
			</div>


			<div id="pad">		

				<ul>
					<li id="imgList">
						<img id="myImg2" className="template2" src={require("../images/templates/template 2.jpg")} alt="Snow"></img>
							<div id="myModal" className="modal">
								<span className="close">&times;</span>
									<img className="modal-content" id="img01"></img>
  							</div>
  					</li>

  					<li id="imgList">
								
						<input type="radio" id="template2" name="template" value="template2"></input>
						<label for="template2">Template 2 </label>
					</li>
				</ul>
			
			</div>


		</div>

		<div id="flex">




			<div id="pad">
				<ul>
					<li id="imgList">
						<img id="myImg3"  className="template3" src={require("../images/templates/template 3.png") } alt="Snow"></img>
							<div id="myModal" className="modal">
								<span className="close">&times;</span>
									<img className="modal-content" id="img01"></img>
							</div>
					</li>
		
					<li id="imgList">
						<input type="radio" id="template3" name="template" value="template3"></input>
						<label for="template3">Template 3 </label>
					</li>
				</ul>				
		 	</div>

		 	<div  id="pad">	
				 <ul>
					<li id="imgList">		
						<img id="myImg4" src={require("../images/templates/template 4.jpg")} className="template4" alt="Snow"></img>
							<div id="myModal" className="modal">
								<span className="close">&times;</span>
  									<img className="modal-content" id="img01"></img>
  							</div>
					</li>
		

					<li id="imgList">
						<input type="radio" id="template4" name="template" value="template4"></input>
						<label for="template4">Template 4 </label>
					</li>
				</ul>
			</div>


		</div>

		
			


		
		<br/>
		<br/>

		<div className="block">

		<button className="cont" onClick={this.continue}>Continue</button>
	</div>





	</div>

	</div>

       </div>

       </div>

	  

       </React.Fragment>
           </MuiThemeProvider>
   )


}

}


export default Templates;