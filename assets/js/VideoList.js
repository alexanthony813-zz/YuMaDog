require('react/lib/DOMProperty').ID_ATTRIBUTE_NAME = 'data-myid';
var React = require('react');
var VideoListEntry = require('./VideoListEntry');
// var reactB = require('react-bootstrap');

module.exports = function(props){
    if(props.item.length === 0){
      return (<div>Loading...</div>);
    } else {
      var dogs = shuffle(props.item.slice());
      return (
          <div className="video-list">
            {dogs.map(function(dog, i){
              return <div key={dog.name}><VideoListEntry item={dog} clickHandler={props.clickHandler} /></div>
            })}
          </div>
         )
    }
};

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}