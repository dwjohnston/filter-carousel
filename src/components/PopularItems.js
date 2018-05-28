import React, { Component } from 'react';
import { connect } from 'react-redux';

import DisplayItem from "./DisplayItem"; 

class PopularItemsRender extends Component {
  render() {

    const {items} = this.props; 

    return (
      <div className="PopularItems">

        popular items: 

        {items && items.map((v,i) => {
            return <DisplayItem item = {v} key = {i}/> ;
        })}

      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
    return {
      items: state.popularItems,
   }
  }
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
  }
  
  const PopularItems = connect(
    mapStateToProps,
    mapDispatchToProps
  )(PopularItemsRender);
  
  

export default PopularItems; 
