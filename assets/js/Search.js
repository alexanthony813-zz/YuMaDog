module.exports = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" id="form-control" onChange={
      _.debounce(function(){props.searchHandler(document.getElementById("form-control").value)},400)}/>
    <button className="btn hidden-sm-down" >
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);
