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
    // confirm it is not empty, non number zip
    if(input==="" && (Number(input) && input.length!==5)){
      return;
    }
 
    input = {location: input}
    var result = function(data){
      this.setState({
        currentVideo : data.dogs[0],
        videoList : data.dogs
      });
    };
    
    //ajax call
    searchDogs(input, result.bind(this));
  },
  componentDidMount: function(){
    // ajax call
    var self = this;

    getDogs({}, function(dogs,err){
      self.setState({
        videoList : dogs.dogs,
        currentVideo : dogs.dogs[0]
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
































