require('react/lib/DOMProperty').ID_ATTRIBUTE_NAME = 'data-myid';
var React = require('react');
var VideoListEntry = require('./VideoListEntry');

module.exports = function(props){
    if(props.item.length === 0){
      return (<div>Loading...</div>);
    } else {
      var dogs = shuffle(props.item);
      return (
          <div>
            {dogs.map(function(dog, i){
              return <div key={dog.name}><VideoListEntry item={dog} clickHandler={props.clickHandler} /></div>
            })}
          </div>
         )
    }
};
        // <div className="video-list media">
        //   <VideoListEntry item={props.item[0]} clickHandler={props.clickHandler} />
        //   <VideoListEntry item={props.item[1]} clickHandler= {props.clickHandler} />
        //   <VideoListEntry item={props.item[2]} clickHandler={props.clickHandler} />
        //   <VideoListEntry item={props.item[3]} clickHandler={props.clickHandler} />
        //   <VideoListEntry item={props.item[4]} clickHandler={props.clickHandler} />
        //  </div>
      // var dogs = props.item.map(function(item){
      //   console.log('item\n', item)
      //   return (
      //     <div class='container-fluid'>
      //       <VideoListEntry item={item} clickHandler={props.clickHandler} />
      //     </div>
      //     )
      // })
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