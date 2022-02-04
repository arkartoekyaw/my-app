import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Developer Roadmaps</h1>
            <div className="links">
                <Link to="/" style={{ 
                    color: 'white', 
                    backgroundColor: '#006400',
                    borderRadius: '8px' 
                }}>Home</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;