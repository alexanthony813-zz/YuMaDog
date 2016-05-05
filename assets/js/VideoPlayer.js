require('react/lib/DOMProperty').ID_ATTRIBUTE_NAME = 'data-myid';
var React = require('react');

module.exports = React.createClass({
  
  // constructor(props){
  //   super(props);
  // }
  
  render:function(){
    if(!this.props.item){
      return (<div>Loading...</div>)
    } else {
      var url = `https://www.youtube.com/embed/${this.props.item.id.videoId}?autoplay=1`;
      return(
        <div className="video-player">
          <div className="video-player-details">
            <h3>{this.props.item.snippet.title}</h3>
            <div>{this.props.item.snippet.description}</div>
          </div>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
          </div>
        </div>
      )
    }
  }
});
