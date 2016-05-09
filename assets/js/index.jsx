require('react/lib/DOMProperty').ID_ATTRIBUTE_NAME = 'data-myid';
var React = require('react');
var Nav = require('./Nav');
var VideoPlayer = require('./VideoPlayer');
var VideoList = require('./VideoList');

var App = React.createClass({
  getInitialState:function(){
    return {
      currentVideo : null,
      videoList : []
    };
  },
  handleClick: function(video){
    this.setState({
      currentVideo : video
    });
  },
  handleSearch: function(input){
    if(!validate(input)){
      console.log('invalid')
      return;
    }

    input = {location: input};
    var result = function(data){
      var randomIndex = Math.floor(Math.random() * data.dogs.length);

      this.setState({
        currentVideo : data.dogs[randomIndex],
        videoList : data.dogs
      });
    };
    
    //ajax call
    searchDogs(input, result.bind(this));
  },
  componentDidMount: function(){
    // ajax call
    var self = this;

    getDogs({}, function(data,err){
      var randomIndex = Math.floor(Math.random() * data.dogs.length);

      self.setState({
        videoList : data.dogs,
        currentVideo : data.dogs[randomIndex]
      });
    }.bind(self));
  },
  render : function(){
    return (
      <div>
        <Nav searchHandler={this.handleSearch} />
        <div className="col-md-7">
          <VideoPlayer item = {this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList clickHandler = {this.handleClick} item = {this.state.videoList} />
        </div>
      </div>
    );
  },
})

ReactDOM.render(< App/>, document.getElementById('react-app'));


function getDogs(specs, callback){
  $.ajax({
    url: 'dogs/',
    type: 'GET',
    data: {},
    contentType: 'application/json',
    success: callback,
    error: function(data){
      console.log("ERROR, ajaxfail")
    }
  })
}

function searchDogs(specs, callback){
  $.ajax({
    url: 'dogs/search/',
    type: 'GET',
    data: specs,
    contentType: 'application/json',
    success: callback,
    error: function(data){
      console.log("ERROR, ajaxfail")
    }
  })  
}

function validate(input){
  var statePattern = /[a-zA-Z]+,\s?[A-Z0-9]{2}$/g;
  
  if(!input.match(statePattern)){
    $('#prompt').text("Invalid input, please enter: in 'San Francisco, CA' format").addClass('invalid');
    $('#form-control').on('input', function(){
      $('#prompt').text("Ex: 'Tampa, FL'").removeClass('invalid');
    })
    return false;
  }
  return true;
}




