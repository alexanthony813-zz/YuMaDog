require('react/lib/DOMProperty').ID_ATTRIBUTE_NAME = 'data-myid';
var React = require('react');
var _ = require('underscore');

module.exports = function(props){
  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" id="form-control" onChange={
        _.debounce(function(){props.searchHandler(document.getElementById("form-control").value)},400)}/>
      <button className="btn hidden-sm-down" >
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
};

console.log('search')
