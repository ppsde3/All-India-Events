import React, { Component, Fragment } from "react";
import axios from "axios";
import Navbar from "../layout/Navbar";

const Events = (props) => (
    // <tr>
    //   <td>{props.events.name}</td>
    //   <td>{props.events.email}</td>

    // </tr>
    <div class="content-profile-page">
        <div class="profile-user-page card">
            <div class="img-user-profile">
                <img class="profile-bgHome" src={""} style={{ width: "590px" }} />
                {/* <img class="avatar" src={imgArray[Math.floor((Math.random() * 2) )]}/> */}
            </div>
            <div class="user-profile-data">
                <h1 style={{ textAlign: "center" }}>{props.events.name}</h1>
            </div>
        </div>
    </div>
);

export default class ProfileInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        };
        // this.registerchange=this.registerchange.bind(this);
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        axios
            .get("http://localhost:5000/api/auth/gotoprofile/" + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    events: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    } /*
  registerchange(e){
    axios.put('http://localhost:5000/api/auth/shows', {name: this.state.name})
    .then(response => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
   } 
 */
    exerciseList() {
        return this.state.events.map((currentexercise) => {
            return <Events events={currentexercise} key={currentexercise._id} />;
        });
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                {this.exerciseList()}
            </div>
        );
    }
}
