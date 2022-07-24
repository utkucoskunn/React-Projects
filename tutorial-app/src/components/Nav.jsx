import {useState} from "react";
import {Link, Outlet} from "react-router-dom";

function Navbar() {
    const [sideBar,setSidebar]=useState(false);
    return (
        <>
            <header>
                <div className='container flexSB'>
                    <div className='logo'>
                        <h1>
                            .<span>m</span>uc
                        </h1>
                    </div>
                    <nav>
                        <button className='toggle' onClick={()=>setSidebar(!sideBar)}>
                            {sideBar ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
                        </button>
                        <ul className={sideBar ? "nav-links-sidebar" : "nav-links"} onClick={()=>setSidebar(false)}>

                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/creative">Creative</Link>
                            </li>
                            <li>
                                <Link to="/educations">Education</Link>
                            </li>
                            <li>
                                <Link to="/works">Works</Link>
                            </li>
                             <li>
                                <Link to="/portfolio">Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <Outlet/>
                </div>
            </header>


        </>
    )
}

export default Navbar;