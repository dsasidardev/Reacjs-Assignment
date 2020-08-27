import React, { Component } from 'react';
import './custom.css';
import ProviderProfile from './ProviderProfile';


class ListingPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedService: null
        }
    }
    filterProviders(id) {
        this.setState({ selectedService: id })
    }

    render() {
        let providerList = null;
        let servicesList = this.props.services.data.map(service => {
            return <ul className="list-services" key={service.id} >
                <li onClick={() => this.filterProviders(service.id)}> {service.id}</li>
            </ul>
        })


        if (this.state.selectedService !== null) {
            providerList = this.props.providers.data.map(provider => {
               return <ProviderProfile provider={provider} />
            })
        }
        else {
            providerList = "Please click on a service to get the list of the providers."
        }

        return <React.Fragment>
            <div className="display-list-services">
                {servicesList}
            </div>
            <div className="display-list-provider">
                {providerList}
            </div>
        </React.Fragment >

    }
}

export default ListingPage;


