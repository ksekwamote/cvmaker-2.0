import React , { Component } from 'react'
import "../css/experience.css"

export default class Expe extends Component{

    constructor(props){
        super(props)
        this.state ={


            employer:"Employer",
            jobTitle:"Job Title",
            jstartDate:"Start Date",
            jendDate:"End Date",
            jobObjective:"Job Objective",

        }
    }


    render()

    {

        const{value} = this.props;
        let stat = this.state = value; 
        return(

            <div>

                <h2 id="title" style={{color:'#105481'}} >Job Experience</h2>

                <ul>
<                   div className="buttonc">
                        <li>
                            <input name="employer" onChange={e=>stat.employer =e.target.value}  placeholder={value.employer}></input>
                        </li>
                    </div>

                <div className="buttonc">
                        <li>
                            <input onChange={e=>stat.jobTitle =e.target.value}  name="jobTitle" placeholder={this.state.jobTitle}></input>

                        </li>
                </div>

                 <div className="buttonc">
                        <li>
                            <input onChange={e=>stat.jstartDate =e.target.value}  name="jstartDate" placeholder={this.state.startDate}></input>
                        </li>
                </div>

                <div className="buttonc">
                        <li>
                            <input onChange={e=>stat.jendDate =e.target.value}  name="jendDate" placeholder={this.state.endDate}></input>
                        </li>

                </div>

                <div className="buttonc">
                        <li>
                            <input onChange={e=>stat.jobObjective =e.target.value} name="jobObjectives" placeholder={this.state.jobObjective}></input>
                        </li>
                </div>
            </ul>
         </div>
        )


    }



}