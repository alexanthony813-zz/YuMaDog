/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	// var React = require('react');
	'use strict';

	var Nav = __webpack_require__(157);
	var VideoPlayer = __webpack_require__(159);
	var VideoList = __webpack_require__(160);

	// class App extends React.Component {

	//   constructor(props){
	//     super(props);

	//     this.state = {
	//       currentVideo : null,
	//       videoList : []
	//     };
	//   }

	//   handleClick(video){
	//     this.setState({
	//       currentVideo : video
	//     });
	//   }

	//   handleSearch(input){

	//     var result = (data) => {
	//       this.setState({
	//         currentVideo : data.items[0],
	//         videoList : data.items
	//       })
	//     // window.videoData = data.items;
	//     }

	//     searchYouTube(input,result);
	//   }

	//   componentDidMount(){
	//     searchYouTube("kittens", (videos) =>{
	//       console.log("videos : ", videos.items)
	//       this.setState({
	//         videoList : videos.items,
	//         currentVideo : videos.items[0]
	//       })
	//     })
	//   }

	//   render(){
	//     return (
	//       <div>
	//         <Nav searchHandler={this.handleSearch.bind(this)} />
	//         <div className="col-md-7">
	//           <VideoPlayer item = {this.state.currentVideo} />
	//         </div>
	//         <p>HELLLOOO</p>
	//         <div className="col-md-5">
	//           <VideoList clickHandler = {this.handleClick.bind(this)} item = {this.state.videoList} />
	//         </div>
	//       </div>
	//     );
	//   }

	// }

	var App = React.createClass({
	  displayName: 'App',

	  constructor: function constructor(props) {
	    // super();

	    this.state = {
	      currentVideo: null,
	      videoList: []
	    };
	  },
	  handleClick: function handleClick(video) {
	    this.setState({
	      currentVideo: video
	    });
	  },
	  handleSearch: function handleSearch(input) {
	    var _this = this;

	    var result = function result(data) {
	      _this.setState({
	        currentVideo: data.items[0],
	        videoList: data.items
	      });
	      // window.videoData = data.items;
	    };

	    searchYouTube(input, result);
	  },
	  componentDidMount: function componentDidMount() {
	    var _this2 = this;

	    searchYouTube("kittens", function (videos) {
	      console.log("videos : ", videos.items);
	      _this2.setState({
	        videoList: videos.items,
	        currentVideo: videos.items[0]
	      });
	    });
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(Nav, { searchHandler: this.handleSearch.bind(this) }),
	      React.createElement(
	        'div',
	        { className: 'col-md-7' },
	        React.createElement(VideoPlayer, { item: this.state.currentVideo })
	      ),
	      React.createElement(
	        'div',
	        { className: 'col-md-5' },
	        React.createElement(VideoList, { clickHandler: this.handleClick.bind(this), item: this.state.videoList })
	      )
	    );
	  }
	});

	React.render(React.createElement(App, null), document.getElementById('react-app'));

/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Search = __webpack_require__(158);

	module.exports = function (props) {
	  return React.createElement(
	    "nav",
	    { className: "navbar" },
	    React.createElement(
	      "div",
	      { className: "col-md-6 col-md-offset-3" },
	      React.createElement(Search, { searchHandler: props.searchHandler })
	    )
	  );
	};

/***/ },

/***/ 158:
/***/ function(module, exports) {

	"use strict";

	module.exports = function (props) {
	  return React.createElement(
	    "div",
	    { className: "search-bar form-inline" },
	    React.createElement("input", { className: "form-control", type: "text", id: "form-control", onChange: _.debounce(function () {
	        props.searchHandler(document.getElementById("form-control").value);
	      }, 400) }),
	    React.createElement(
	      "button",
	      { className: "btn hidden-sm-down" },
	      React.createElement("span", { className: "glyphicon glyphicon-search" })
	    )
	  );
	};

/***/ },

/***/ 159:
/***/ function(module, exports) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = (function (_React$Component) {
	  _inherits(VideoPlayer, _React$Component);

	  function VideoPlayer() {
	    _classCallCheck(this, VideoPlayer);

	    _get(Object.getPrototypeOf(VideoPlayer.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(VideoPlayer, [{
	    key: "render",

	    // constructor(props){
	    //   super(props);
	    // }

	    value: function render() {
	      if (!this.props.item) {
	        return React.createElement(
	          "div",
	          null,
	          "Loading..."
	        );
	      } else {
	        var url = "https://www.youtube.com/embed/" + this.props.item.id.videoId + "?autoplay=1";
	        return React.createElement(
	          "div",
	          { className: "video-player" },
	          React.createElement(
	            "div",
	            { className: "embed-responsive embed-responsive-16by9" },
	            React.createElement("iframe", { className: "embed-responsive-item", src: url, allowFullScreen: true })
	          ),
	          React.createElement(
	            "div",
	            { className: "video-player-details" },
	            React.createElement(
	              "h3",
	              null,
	              this.props.item.snippet.title
	            ),
	            React.createElement(
	              "div",
	              null,
	              this.props.item.snippet.description
	            )
	          )
	        );
	      }
	    }
	  }]);

	  return VideoPlayer;
	})(React.Component);

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var VideoListEntry = __webpack_require__(161);

	module.exports = function (props) {

	  if (props.item.length === 0) {
	    return React.createElement(
	      "div",
	      null,
	      "Loading..."
	    );
	  } else {
	    return React.createElement(
	      "div",
	      { className: "video-list media" },
	      React.createElement(VideoListEntry, { item: props.item[0], clickHandler: props.clickHandler }),
	      React.createElement(VideoListEntry, { item: props.item[1], clickHandler: props.clickHandler }),
	      React.createElement(VideoListEntry, { item: props.item[2], clickHandler: props.clickHandler }),
	      React.createElement(VideoListEntry, { item: props.item[3], clickHandler: props.clickHandler }),
	      React.createElement(VideoListEntry, { item: props.item[4], clickHandler: props.clickHandler })
	    );
	  }
	};

/***/ },

/***/ 161:
/***/ function(module, exports) {

	"use strict";

	module.exports = function (props) {

	  console.log(props);
	  return React.createElement(
	    "div",
	    { className: "video-list-entry" },
	    React.createElement(
	      "div",
	      { className: "media-left media-middle" },
	      React.createElement("img", { className: "media-object", src: props.item.snippet.thumbnails["default"].url, alt: "" })
	    ),
	    React.createElement(
	      "div",
	      { className: "media-body" },
	      React.createElement(
	        "div",
	        { className: "video-list-entry-title", onClick: function () {
	            props.clickHandler(props.item);
	          } },
	        props.item.snippet.title
	      ),
	      React.createElement(
	        "div",
	        { className: "video-list-entry-detail" },
	        props.item.snippet.description
	      )
	    )
	  );
	};

/***/ }

/******/ });