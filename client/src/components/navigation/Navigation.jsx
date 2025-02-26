import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <section className="top-area">
            <div className="header-area">
                <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i className="fa fa-bars"></i>
                            </button>
                            <Link className="navbar-brand" to="/">best<span>places</span></Link>
                        </div>
                        <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className="scroll"><Link to="/">home</Link></li>
                                <li className="scroll"><Link to="/catalog">catalog</Link></li>
                                <li className="scroll"><Link to="/create">create destination</Link></li>
                                <li className="scroll"><Link to="/about">about</Link></li>
                                <li className="scroll"><Link to="/auth/register">register</Link></li>
                                <li className="scroll"><Link to="/auth/login">login</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="clearfix"></div>
        </section>
    )
}