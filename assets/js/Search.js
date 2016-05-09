require('react/lib/DOMProperty').ID_ATTRIBUTE_NAME = 'data-myid';
var React = require('react');
var _ = require('underscore');

module.exports = function(props){
  return (
    <div className="search-bar form-inline" id="search">
      <input className="form-control" id="form-control" type="text" placeholder="Enter 'City, State'" onChange={
        _.debounce(function(){props.searchHandler(document.getElementById("form-control").value)},400)}/>
      <button className="btn hidden-sm-down" >
        <span className="glyphicon glyphicon-search"></span>
      </button>
      <span id="prompt">Ex: "Tampa, FL"</span>
    </div> 
  );
};
