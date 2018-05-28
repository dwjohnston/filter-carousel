import React, { Component } from 'react';

class DisplayItem extends Component {
    render() {

        const { item } = this.props;

        return (
            <div className="DisplayItem">
                <div className ="img-container">
                    <img src = {item.img}/> 
                </div>

                <div className ="location">
                    <span className = "location-icon"> <i class="fas fa-map-marker"></i></span> 
                    <span className =""> {item.location}</span>
                </div>
            </div>
        );
    }
}

export default DisplayItem; 
