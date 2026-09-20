import {Link} from 'react-router-dom';
function Navbar(){
    return(
    <>
    <nav >
      <Link to="/">Home</Link>
      <Link to="/connect">Connect</Link> 
      <Link to="/results">Results</Link>
      <Link to="/analyzing">Analyzing</Link> 
      <Link to="/insights">Insights</Link> 
    </nav>
    </>)
    }

    export default Navbar;
