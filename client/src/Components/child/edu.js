import React , { Component } from 'react'
import "../css/experience.css"

export class edu extends Component {

    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.state={

            fieldOfStudy:"",
            schoolName:"",
            startDate:"",
            gradDate:"",


        }
        }

render(){
    return(
        
        <div>
    
<div id="clone">
                <h2 id="title"  >Education</h2>

                <ul>
                <div className="buttonc">
						<li>
						<input onChange={handleChange('fieldOfStudy') , this.state.fieldOfStudy =value}  name="fos" ></input>
						</li>
					</div>

                    <div className="buttonc">
			            <li>
					        <input onChange={handleChange('schoolName') , this.state.schoolName =value} name="schoolName" ></input>

			            </li>
		            </div>

                    <div className="buttonc">
			<li>
				<input onChange={handleChange('startDate') , this.state.startDate =value} name="startDate" ></input>
				

			</li>
		</div>

		<div className="buttonc">
			<li>

					<input onChange={handleChange('gradDate') , this.state.gradDate =value} name="endDate" ></input>
				

			</li>
		
		</div>

                </ul>

</div>


        </div>

    )

    }
}

