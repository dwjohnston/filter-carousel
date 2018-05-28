import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updateSearchAction} from "../actions/actions"; 


class SearchBarRender extends Component {

    constructor() {
        super();

        this.state = {
            text: ""
        };
    }


    handleTextChange  = (e)  => {
        this.setState( {
            text: e.target.value
        })

        this.props.onChange(e.target.value); 
    }


  render() {
    return (
      <div className="SearchBar">
        <input type ="text" onChange = {this.handleTextChange} value = {this.state.text} placeholder ="Search"/> 
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
        onChange: (text) => dispatch(updateSearchAction(text))
    }
  }
  
  const SearchBar = connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBarRender);
  
  

export default SearchBar; 
