require('react/lib/DOMProperty').ID_ATTRIBUTE_NAME = 'data-myid';
var React = require('react');
var Search = require('./Search');
console.log('nav')
module.exports= function(props){
  return (
    <nav className="navbar">
      <div className="col-md-6 col-md-offset-3">
        <Search searchHandler={props.searchHandler}/>
      </div>
    </nav>
  );
}
