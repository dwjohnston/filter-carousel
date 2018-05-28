import React, { Component } from 'react';
import './App.css';

import PopularItems from "./components/PopularItems"; 
import FeaturedItems from "./components/FeaturedItems"; 
import {fetchFeaturedItemsAction, fetchPopularItemsAction} from "./actions/actions"; 
import { connect } from 'react-redux';

class AppRender extends Component {


  componentWillMount() {
    this.props.initialPopulate();
  }

  render() {
    return (
      <div className="App">

        <PopularItems/> 

        <FeaturedItems/> 

      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
 }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initialPopulate: () => {
      dispatch(fetchFeaturedItemsAction()); 
      dispatch(fetchPopularItemsAction()); 
    }

  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRender);





export default App;
