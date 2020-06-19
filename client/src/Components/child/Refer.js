import React , { Component } from 'react'
import "../css/experience.css"

export default class Reference  extends Component {

    constructor(props){
        super(props);
  
        this.state={
            rname:"Referent Name",
            roccupation:"Occupation",
            remployer:"Employer",
            remail:"Email",
            rphone:"Phone Number"

        }
    }

    handleChange = input => e => {

        this.setState({[input]: e.target.value});

    }



    render(){

        const {value} = this.props;
        let stat = this.state = value;

        return(

            <div>

                    <h2 id="title"  >Reference</h2>

                    <ul>
                    <div className="buttonc">
                            <li>
                            <input onChange={e => stat.rname=e.target.value} name="rname" placeholder={this.state.rname}></input>
                            </li>
                        </div>

                        <div className="buttonc">
                            <li>
                                <input onChange={e => stat.roccupation=e.target.value} name="roccupation" placeholder={this.state.roccupation}></input>

                            </li>
                        </div>

                        <div className="buttonc">
                    <li>
                    <input onChange={e => stat.remployer=e.target.value} name="remployer" placeholder={this.state.remployer}></input>


                    </li>
                    </div>

                    <div className="buttonc">
                    <li>

                        <input onChange={e => stat.remail=e.target.value} name="remail" placeholder={this.state.remail}></input>


                    </li>

                    </div>

                    <div className="buttonc">

                    <li>
                        <input  onChange={e => stat.rphone=e.target.value} name="rphone" placeholder={this.state.rphone}></input>

                    </li>




                    </div>




                    </ul>



            </div>
    
    
    
        )

    }

}