import React, { Component } from 'react';

class DisplayItem extends Component {
    render() {

        const { item } = this.props;

        return (
            <div className="DisplayItem">
                <div>
                    <img src = {item.img}/> 
                </div>

                <div>
                    <i class="far fa-map-marker"></i> {item.location}
                </div>
            </div>
        );
    }
}

export default DisplayItem; 
