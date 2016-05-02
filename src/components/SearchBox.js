import React, { Component } from 'react';

class SearchBox extends Component {

  render() {
    return (
      
      <div className="col-md-9 searchbar">
          <div className="custom-search-input">
              <div className="input-group">
                  <span className="input-group-btn">
                      <button className="btn btn-default" type="button">
                          <i className="fa fa-search"></i>
                      </button>
                  </span>
                  <input type="text" className="form-control input-lg" placeholder="Search articles..." />
              </div>
          </div>
      </div>

    );
  }

}

export default SearchBox;
