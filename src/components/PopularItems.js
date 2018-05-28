import React, { Component } from 'react';
import { connect } from 'react-redux';

import DisplayItem from "./DisplayItem"; 

import Slider from "react-slick";


import {filterItemsByLocation} from "../selectors/selectors"; 

class PopularItemsRender extends Component {
  render() {

    const {items} = this.props; 
    
    let settings = {
        arrows:true,
        dots: true,
        infinite: (items && items.length>3) ,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3, 
      };

    return (



      <div className="PopularItems">
        <Slider {...settings}> 
            {items && items.map((v,i) => {
                return <DisplayItem item = {v} key = {i}/>;
            })}
        </Slider> 
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
    return {
      items: filterItemsByLocation(state),
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
