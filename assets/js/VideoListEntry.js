require('react/lib/DOMProperty').ID_ATTRIBUTE_NAME = 'data-myid';
var React = require('react');

module.exports = function(props){
  // console.log('heres props?')
  // console.log(props)
  return ( 
    <div className="video-list-entry">
      <div className="media-left media-middle">
        <img className="media-object" src={props.item["second_photo"]} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={function(){props.clickHandler(props.item)}}>{props.item["name"]}</div>
        <div className="video-list-entry-detail">{props.item["age"]} {props.item["sex"]}</div>
      </div>
    </div>
  )

};
