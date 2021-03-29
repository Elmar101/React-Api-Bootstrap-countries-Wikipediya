import React from 'react'
import {Link,withRouter} from 'react-router-dom';
const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">ÖLKƏLƏR</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Əsas Səyfə</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Hakkimizda</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Əlaqə</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/country"> Olkeler Listi</Link>
                        </li>
                    </ul>
                </div>
            </div>
         </nav>
    )
}
export default withRouter(Navbar);