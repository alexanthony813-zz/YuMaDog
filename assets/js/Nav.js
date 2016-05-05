var Search = require('./Search');

module.exports = (props) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search searchHandler={props.searchHandler}/>
    </div>
  </nav>
);
