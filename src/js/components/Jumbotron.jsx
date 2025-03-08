import React from "react";


//create your first component
const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid p-3 mb-2 bg-secondary text-white">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <hr className="my-4"/>
            <p>IUt enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
    );

};

export default Jumbotron;