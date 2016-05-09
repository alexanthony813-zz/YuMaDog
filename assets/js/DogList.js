require('react/lib/DOMProperty').ID_ATTRIBUTE_NAME = 'data-myid';
var React = require('react');
var DogListEntry = require('./DogListEntry');

module.exports = function(props){
    if(props.item.length === 0){
      return (<div>Loading...</div>);
    } else {
      var dogs = (!initialized) ? props.item.slice() : shuffle(props.item.slice());
      var initialized = true;
      return (
          <div className="dog-list">
            {dogs.map(function(dog, i){
              return <div key={dog.name}><DogListEntry item={dog} clickHandler={props.clickHandler} /></div>
            })}
          </div>
         )
    }
};

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}