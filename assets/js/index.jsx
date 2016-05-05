var React = require('react');
var mainApp = require('./app')
console.log(App)

var App = React.createClass({
  render : function(){
    return (
      <div>
        <div>HI</div>
        <mainApp />
      </div>
    )
  }
})

React.render(<App/>, document.getElementById('react-app'));
