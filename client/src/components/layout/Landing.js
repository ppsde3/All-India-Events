import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../../css/buttons.css";
import "../../css/mockup.css";
import "../../css/landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { store } from "react-notifications-component";

import "react-notifications-component/dist/theme.css";
import "animate.css";
// import Parallax from 'react-simple-parallax';

const Landing = ({ isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        type_of_user: "",
        message: "",
    });
    if (isAuthenticated) {
        return <Redirect to="/landingpage" />;
    }
    const { name, email, type_of_user, message } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        // console.log('SUCCESS');
        // console.log({type_of_user, name })
        console.log(formData);
        Landing({ name, email, type_of_user, message });
    };
    return (
        <section style={{ padding: "0px" }}>
            {/* <button
        onClick={() => {
          store.addNotification({
            title: 'Dropbox',
            message: 'Files were synced',
            type: 'Warning',                         // 'default', 'success', 'info', 'warning'
            container: 'bottom-right',                // where to position the notifications
            animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
            dismiss: {
              duration: 3000 
            }
          })
        }}
      >
        Add notification
      </button> */}

            {/* <div className='dark-overlay'>
        <div className='landing-inner'>
        <div className="row">
          
            <div  className='example_d'>
            <Link to='/register'>
              Sign Up
            </Link>
          
          </div>
       
<div className='example_d'> 
            <Link to='/login' >
              Login
            </Link>
            </div>
            </div>
</div>
        </div> */}

            <div id="parallax-world-of-ugg">
                <section>
                    <div class="parallax-one">
                        <h2 style={{ color: "black" }}>We're In, Are you?</h2>
                        <div className="row">
                            <div className="example_d" style={{ textAlign: "center", backgroundColor: "lightblue" }}>
                                <Link to="/register">Sign Up</Link>
                            </div>

                            <div className="example_q" style={{ textAlign: "center", backgroundColor: "lightblue" }}>
                                <Link to="/login">Login</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

Landing.propTypes = {
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
