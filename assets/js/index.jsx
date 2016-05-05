require('react/lib/DOMProperty').ID_ATTRIBUTE_NAME = 'data-myid';
var React = require('react');
// This is an example response from the YouTube Search API
// when searching with the query "react tutorial"
var exampleVideoData = [
  {
    "kind": "youtube#searchResult",
    "etag": "\"abQHWywil_AkNqdqji7_FqiK-u4/Ykxo_CqKu8F8kcm-iNgL332gQTY\"",
    "id": {
      "kind": "youtube#video",
      "videoId": "4ZAEBxGipoA"
    },
    "snippet": {
      "publishedAt": "2015-08-02T20:52:58.000Z",
      "channelId": "UCJbPGzawDH1njbqV-D5HqKw",
      "title": "React JS Tutorial for Beginners - 1 - Introduction",
      "description": "My website - https://www.thenewboston.com/videos.php Have questions about the tutorial or React? Ask them here ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/4ZAEBxGipoA/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/4ZAEBxGipoA/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/4ZAEBxGipoA/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "thenewboston",
      "liveBroadcastContent": "none"
    }
  },
  {
    "kind": "youtube#searchResult",
    "etag": "\"abQHWywil_AkNqdqji7_FqiK-u4/tS3xe6KXEJbntCAmn01SmEuSYxg\"",
    "id": {
      "kind": "youtube#video",
      "videoId": "mFEoarLnnqM"
    },
    "snippet": {
      "publishedAt": "2014-08-08T21:31:58.000Z",
      "channelId": "UCKKQaFUwyPb6iC-42rFRz2Q",
      "title": "Thinking in React, a step by step screencast tutorial",
      "description": "A step by step video tutorial that takes you through the correct way of coding Facebook React views. Check out the rest of the tagtree library: http://tagtree.tv.",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/mFEoarLnnqM/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/mFEoarLnnqM/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/mFEoarLnnqM/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "",
      "liveBroadcastContent": "none"
    }
  },
  {
    "kind": "youtube#searchResult",
    "etag": "\"abQHWywil_AkNqdqji7_FqiK-u4/FZYrgJg7qfkv0yfImJPujBKBmLk\"",
    "id": {
      "kind": "youtube#video",
      "videoId": "0ByoQm-vnYw"
    },
    "snippet": {
      "publishedAt": "2015-12-08T20:51:18.000Z",
      "channelId": "UClLXKYEEM8OBBx85DOa6-cg",
      "title": "React Tutorial for Beginners",
      "description": "Get the full course here: http://devslopes.com/react In this video you will learn how to setup your project for React development and you will build a simple React ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/0ByoQm-vnYw/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/0ByoQm-vnYw/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/0ByoQm-vnYw/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "",
      "liveBroadcastContent": "none"
    }
  },
  {
    "kind": "youtube#searchResult",
    "etag": "\"abQHWywil_AkNqdqji7_FqiK-u4/nSaavPWVkTWpn2p-ClwNj7xszf8\"",
    "id": {
      "kind": "youtube#video",
      "videoId": "o5E894TmHJg"
    },
    "snippet": {
      "publishedAt": "2015-03-09T08:19:59.000Z",
      "channelId": "UCMYct3vtNaMwZAA3_DNsWMw",
      "title": "Flux Tutorial - Writing a Simple App in Flux and React",
      "description": "Hey! Write something in the comments, even if it's critical. I'd love to hear feedback! (also, please thumbs-up if you like the vid, and I'll make more). Personally I ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/o5E894TmHJg/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/o5E894TmHJg/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/o5E894TmHJg/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "bengrunfeld",
      "liveBroadcastContent": "none"
    }
  },
  {
    "kind": "youtube#searchResult",
    "etag": "\"abQHWywil_AkNqdqji7_FqiK-u4/3E7u1VZ18KYyfLIA6RgI2w-7nRI\"",
    "id": {
      "kind": "youtube#video",
      "videoId": "Pd6Ub7Ju2RM"
    },
    "snippet": {
      "publishedAt": "2015-02-13T18:50:38.000Z",
      "channelId": "UCr5lOCcjZzNprLrhxO0WZQw",
      "title": "Learn React, Flux, and Flow: Part I",
      "description": "Brought to you by Formidable Labs and SeattleJS, Colin Megill walks us through Facebook's React framework in part one of this three-part series. The workshop ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/Pd6Ub7Ju2RM/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/Pd6Ub7Ju2RM/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/Pd6Ub7Ju2RM/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "",
      "liveBroadcastContent": "none"
    }
  }
]
var Nav = require('./Nav');
var VideoPlayer = require('./VideoPlayer');
var VideoList = require('./VideoList');

var App = React.createClass({
  getInitialState:function(){
    return {
      currentVideo : null,
      videoList : []
    }
  },
  handleClick: function(video){
    this.setState({
      currentVideo : video
    });
  },
  handleSearch: function(input){
 
    var result = function(data){
      this.setState({
        currentVideo : data.items[0],
        videoList : data.items
      })
    // window.videoData = data.items;
    }
    
    //other ajax call here
    searchYouTube(input,result);
  },
  componentDidMount: function(){
    // ajax call here sucka
    getDogs({}, function(dogs){
      console.log(dogs)
    })
      this.setState({
        videoList : exampleVideoData,
        currentVideo : exampleVideoData[0]
      })
  },
  render : function(){
    return (
      <div>
        <Nav searchHandler={this.handleSearch} />
        <div className="col-md-7">
          <VideoPlayer item = {this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList clickHandler = {this.handleClick} item = {this.state.videoList} />
        </div>
      </div>
    );
  },
})

ReactDOM.render(< App/>, document.getElementById('react-app'));


function getDogs(specs, callback){
  //change variable for request object here, refactor to ternary?
  console.log("DOOOOOOGSSS")
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






































