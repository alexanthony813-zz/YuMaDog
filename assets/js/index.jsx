require('react/lib/DOMProperty').ID_ATTRIBUTE_NAME = 'data-myid';
var React = require('react');
var Nav = require('./Nav');
var SelectedDog = require('./SelectedDog');
var DogList = require('./DogList');

var App = React.createClass({
  getInitialState:function(){
    return {
      currentDog : null,
      dogList : []
    };
  },
  handleClick: function(video){
    this.setState({
      currentDog : video
    });
  },
  handleSearch: function(input){
    if(!validate(input)){
      console.log('invalid');
      return;
    }
    input = {location: input};
    var result = function(data){
      this.setState({
        currentDog : data.dogs[0],
        dogList : data.dogs
      });

      $('#loading').addClass('hidden');
    };
    
    searchDogs(input, result.bind(this));
  },
  componentDidMount: function(){
    var self = this;

    getDogs({}, function(data,err){
      var randomIndex = Math.floor(Math.random() * data.dogs.length);

      self.setState({
        dogList : data.dogs,
        currentDog : data.dogs[randomIndex]
      });
    }.bind(self));
  },
  render : function(){
    return (
      <div>
        <Nav searchHandler={this.handleSearch} />
        <div className="col-md-7">
          <SelectedDog item = {this.state.currentDog} />
        </div>
        <div className="col-md-5">
          <DogList clickHandler = {this.handleClick} item = {this.state.dogList} />
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
  $('#loading').removeClass('hidden');

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




