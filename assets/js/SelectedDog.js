require('react/lib/DOMProperty').ID_ATTRIBUTE_NAME = 'data-myid';
var React = require('react');

module.exports = React.createClass({
  
  render:function(){
    if(!this.props.item){
      return (<div>Loading...</div>)
    } else {
      console.log('propers',this.props.item)
      return(
        <div className="selected-dog">
          <div className="selected-dog-details">
            <div className="info-container container-fluid">
              <div className="dog-info">
                <h3>{this.props.item["name"]}</h3>
                <div>{this.props.item["age"]} {this.props.item["sex"]}</div>
                <div>{this.props.item["size"]}</div>
              </div>
              <div className="contact-info">
                <div>{this.props.item["city"]}</div>
                <div>{this.props.item["contact_email"]}</div>
                <div>{this.props.item["contact_phone"]}</div>
              </div>
            </div>
            <br/>
            <div className="img-block">
              <img className="profile_photo" src={this.props.item["third_photo"]} />
            </div>
            <div className="description-container container-fluid">
              <p>{this.props.item["description"]}</p>
            </div>
          </div>
          <div className="embed-responsive embed-responsive-16by9">
          </div>
        </div>
      )
    }
  }
});
