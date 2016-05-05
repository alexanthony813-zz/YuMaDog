require('react/lib/DOMProperty').ID_ATTRIBUTE_NAME = 'data-myid';
var React = require('react');
var VideoListEntry = require('./VideoListEntry');

module.exports = function(props){
    if(props.item.length === 0){
      return (<div>Loading...</div>)
    } else {
      return (
        <div className="video-list media">
          <VideoListEntry item={props.item[0]} clickHandler={props.clickHandler} />
          <VideoListEntry item={props.item[1]} clickHandler= {props.clickHandler} />
          <VideoListEntry item={props.item[2]} clickHandler={props.clickHandler} />
          <VideoListEntry item={props.item[3]} clickHandler={props.clickHandler} />
          <VideoListEntry item={props.item[4]} clickHandler={props.clickHandler} />
         </div>
         )
    }
};

console.log('VideoList')
