import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayItem from "./DisplayItem"; 

class FeaturedItemsRender extends Component {
  render() {

    const {items} = this.props;

    return (
      <div className="FeaturedItems">


        featured items: 
        {items && items.map((v, i) => {
            return <DisplayItem item = {v} key = {i}/> ; 
        })}

      </div>
    );
  }
}




const mapStateToProps = (state, ownProps) => {
    return {
      items: state.featuredItems,
   }
  }
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
  }
  
  const FeaturedItems = connect(
    mapStateToProps,
    mapDispatchToProps
  )(FeaturedItemsRender);
  
  
  


export default FeaturedItems; 
