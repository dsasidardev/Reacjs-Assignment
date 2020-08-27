import React, { Component } from 'react';


const providerProfile = (props) => {
    debugger
    let providerName = props.provider.attributes["name"];
    let cardImage = props.provider.attributes["card-image"]
    let subspecialties = null;

    if (props.provider.attributes["subspecialties"].length) {
        subspecialties = props.provider.attributes["subspecialties"].map(item => {
            return <li> {item}</li>
        })
    }

    return <React.Fragment>
        <div className="provider-profile">
            <div className="provider-profile-image">
                <img src={cardImage}></img>
            </div>
            <div className="provider-profile-details">
                {providerName}
                {subspecialties}
            </div>
        </div >
    </React.Fragment >
}
export default providerProfile;
