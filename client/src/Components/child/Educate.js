import React , { Component } from 'react'
import "../css/experience.css"

export default class Educate extends Component {

    constructor(props){
        super(props);

     
        this.state={

            fieldOfStudy:"Field Of Study",
            schoolName:"School Name",
            startDate:"Start Date",
            gradDate:"Graduation Date",

        };

        }

 
handleChange = input => e => {

            this.setState({[input]: e.target.value});
    
        }



render(){


        const{value} = this.props;

        let stat = this.state = value;

        
        //console.log(value);

        console.log("HEY NOW HEY NOW");
 

    return(

       
        
        <div>
    
<div id="clone">
                <h2 id="title"  >Education</h2>

                <ul>
                <div className="buttonc">
						<li>
						<input onChange={e => stat.fieldOfStudy=e.target.value} placeholder={this.state.fieldOfStudy} name="fos" ></input>
						</li>
					</div>

                    <div className="buttonc">
			            <li>
					        <input onChange={e => stat.schoolName = e.target.value } placeholder={this.state.schoolName} name="schoolName" ></input>

			            </li>
		            </div>

                    <div className="buttonc">
			<li>
				<input onChange={e => stat.startDate= e.target.value } placeholder={this.state.startDate} name="startDate" ></input>
				

			</li>
		</div>

		<div className="buttonc">
			<li>

					<input onChange={e =>  stat.gradDate= e.target.value}placeholder={this.state.gradDate} name="endDate" ></input>
				

			</li>
		
		</div>

                </ul>

</div>


        </div>

    )

    }
}

