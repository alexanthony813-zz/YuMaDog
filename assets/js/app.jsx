var Nav = require('./Nav');
var VideoPlayer = require('./VideoPlayer');
var VideoList = require('./VideoList');

module.exports = class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      currentVideo : null,
      videoList : []
    };
  }

  handleClick(video){
    this.setState({
      currentVideo : video
    });
  }

  handleSearch(input){
 
    var result = (data) => {
      this.setState({
        currentVideo : data.items[0],
        videoList : data.items
      })
    window.videoData = data.items;
    }
    
    searchYouTube(input,result);
  }

  componentDidMount(){
    searchYouTube("kittens", (videos) =>{
      console.log("videos : ", videos.items)
      this.setState({
        videoList : videos.items,
        currentVideo : videos.items[0]
      })
    })
  }

  render(){ 
    return (
      <div>
        <Nav searchHandler={this.handleSearch.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer item = {this.state.currentVideo} />
        </div>
        <p>HELLLOOO</p>
        <div className="col-md-5">
          <VideoList clickHandler = {this.handleClick.bind(this)} item = {this.state.videoList} />
        </div>
      </div>
    );
  }

}
