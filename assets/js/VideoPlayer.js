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
      console.log('propers',this.props.item)
      return(
        <div className="video-player">
          <div className="video-player-details">
            <div className="dog-info container-fluid">
              <h3>{this.props.item["name"]}</h3>
              <div>{this.props.item["age"]} {this.props.item["sex"]}</div>
              <div>{this.props.item["size"]}</div>
            </div>
            <br/>
            <img className="profile_photo" src={this.props.item["third_photo"]} />
            <p>{this.props.item["description"]}</p>
          </div>
          <div className="embed-responsive embed-responsive-16by9">
          </div>
        </div>
      )
    }
  }
});
            // <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
      // var url = `https://www.youtube.com/embed/${this.props.item.id.videoId}?autoplay=1`;
