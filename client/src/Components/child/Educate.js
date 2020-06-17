import React , { Component } from 'react'
import "../css/experience.css"

export default class Educate extends Component {

    constructor(props){
        super(props)

     
        this.state={

            fieldOfStudy:"Field Of Study",
            schoolName:"School Name",
            startDate:"Start Date",
            gradDate:"Graduation Date",

        }

        }


handleChange = input => e => {

            this.setState({[input]: e.target.value});
    
        }

render(){

    const {indexState} = this.props;


    return(

       
        
        <div>
    
<div id="clone">
                <h2 id="title"  >Education</h2>

                <ul>
                <div className="buttonc">
						<li>
						<input onChange={e => this.setState({ fieldOfStudy: e.target.value })}  name="fos" ></input>
						</li>
					</div>

                    <div className="buttonc">
			            <li>
					        <input onChange={e => this.setState({ schoolName: e.target.value })} name="schoolName" ></input>

			            </li>
		            </div>

                    <div className="buttonc">
			<li>
				<input onChange={e => this.setState({ startDate: e.target.value })} name="startDate" ></input>
				

			</li>
		</div>

		<div className="buttonc">
			<li>

					<input onChange={e => this.setState({ gradDate: e.target.value })} name="endDate" ></input>
				

			</li>
		
		</div>

                </ul>

</div>


        </div>

    )

    }
}

