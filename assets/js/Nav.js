require('react/lib/DOMProperty').ID_ATTRIBUTE_NAME = 'data-myid';
var React = require('react');
var Search = require('./Search');

module.exports= function(props){
  return (
    <nav className="navbar">
      <span id="logo">
        <span id="yuma">Yuma</span><div id="dog"><span> Dog </span></div>
      </span>
      <div className="col-md-6 col-md-offset-2">
        <Search searchHandler={props.searchHandler}/>
      </div>
    </nav>
  );
}
