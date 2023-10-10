import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
//Type rce for react class component
export class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false, 
            category: "General",
            searchInput: ''
        };

    }

    handleInputChange = (e) => {
        this.setState({ searchInput: e.target.value });
    };

    handleSubmit = (e) => {
        // e.preventDefault();
        this.setState({ searchInput: e.target.value });
        this.props.onSearch(this.state.searchInput);
    };

    handleClick = async (event) => {
        let c = event.currentTarget.textContent;
        if (c === "All") {
            c = "General";
        }
        this.setState({
            category: c
        })
    }
    handleEnterKey = (event) => {
        if (event.key === 'Enter') {
            this.handleSubmit();
        }
    };
    toggleNavbar = () => {
        this.setState(prevState => ({
            isNavOpen: !prevState.isNavOpen
        }));
    };
    render() {
        const { isNavOpen } = this.state;
        return (
            <>
                <div className="hero-anime">

                    <div className="navigation-wrap bg-light start-header start-style">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 block md:flex md:justify-center">
                                    <nav className="navbar navbar-expand-md navbar-light">
                                    <div className="flex items-center justify-between w-full">
                                        <Link className="navbar-brand hover:text-[#6537ac]" to='/Newsapp' style={{ fontWeight: "600" }}>
                                            {/* <i className="fa-solid fa-newspaper mr-3" style={{ scale: "1.4" }}></i> */}
                                            <ion-icon className="" name="newspaper-outline" style={{ scale: "1.4", transform: "translate(-4px)" }}></ion-icon>
                                            <span>NewsRadar</span>
                                        </Link>

                                        <button  onClick={this.toggleNavbar} className="navbar-toggler btn-no-outline" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon "></span>

                                        </button>
                                        </div>
                                        </nav>
                                        
                                        <div className={`md:flex ${
                                            isNavOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 '
                                        } transition-all duration-300 ease-in-out  md:max-h-screen md:!opacity-100`}>
                                        {/* <div className="hidden md:flex"> */}
                                            {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}

                                            <ul className="flex flex-col md:flex-row items-start space-x-4 py-4 py-md-0 opacity-100">
                                                <li className={this.state.category === "General" ? 'nav-item pl-4 pl-md-0 ml-0 ml-md-4 active' : 'nav-item pl-4 pl-md-0 ml-0 ml-md-4'}>
                                                    <NavLink className="nav-link dropdown-toggle "  activeClassName="active" data-toggle="dropdown" to="/Newsapp" onClick={this.handleClick}>All</NavLink>
                                                </li>
                                                <li className={this.state.category === "Business" ? 'nav-item pl-4 pl-md-0 ml-0 ml-md-4 active' : 'nav-item pl-4 pl-md-0 ml-0 ml-md-4'} >
                                                    <Link className="font-medium nav-link dropdown-toggle text-gray-700 " to="/business" onClick={this.handleClick}>Business</Link>
                                                </li>
                                                <li className={this.state.category === "Entertainment" ? 'nav-item pl-4 pl-md-0 ml-0 ml-md-4 active' : 'nav-item pl-4 pl-md-0 ml-0 ml-md-4'}>
                                                    <Link className="nav-link" to="/entertainment" onClick={this.handleClick}>Entertainment</Link>
                                                </li>
                                                <li className={this.state.category === "Health" ? 'nav-item pl-4 pl-md-0 ml-0 ml-md-4 active' : 'nav-item pl-4 pl-md-0 ml-0 ml-md-4'}>
                                                    <Link className="nav-link" to="/health" onClick={this.handleClick}>Health</Link>
                                                </li>
                                                <li className={this.state.category === "Science" ? 'nav-item pl-4 pl-md-0 ml-0 ml-md-4 active' : 'nav-item pl-4 pl-md-0 ml-0 ml-md-4'}>
                                                    <Link className="nav-link" to="/science" onClick={this.handleClick}>Science</Link>
                                                </li>
                                                <li className={this.state.category === "Sports" ? 'nav-item pl-4 pl-md-0 ml-0 ml-md-4 active' : 'nav-item pl-4 pl-md-0 ml-0 ml-md-4'}>
                                                    <Link className="nav-link" to="/sports" onClick={this.handleClick}>Sports</Link>
                                                </li>
                                                <li className={this.state.category === "Technology" ? 'nav-item pl-4 pl-md-0 ml-0 ml-md-4 active' : 'nav-item pl-4 pl-md-0 ml-0 ml-md-4'}>
                                                    <Link className="nav-link" to="/technology" onClick={this.handleClick}>Technology</Link>
                                                </li>
                                                <li className='mr-14'></li>

                                        {/* <form className="d-none d-lg-flex" onSubmit={this.handleSubmit}>
                                            <input className="form-control w-56" type="search" placeholder="Search" aria-label="Search" value={this.state.searchInput} onChange={this.handleInputChange} />
                                        </form> */}
                                        <div className="wrapper">
                                            <div className="searchBar md:translate-x-10 sm:w-96 md:w-72">
                                                <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" value={this.state.searchInput} onChange={this.handleSubmit} onKeyDown={this.handleEnterKey} />
                                                <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit" onClick={this.handleSubmit}>
                                                    <svg className='ml-2' style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        </ul>
                                        </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default Navbar