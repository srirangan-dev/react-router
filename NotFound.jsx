import { Link } from "react-router-dom";

function NotFound(){
    return (

        <>
        <h3>Error 404 found </h3>
        <a className="btn btn-primary " href="/"> Home</a>
        <Link  className="btn btn-danger" to="/" >Home</Link>
        </>

    );
}

export default NotFound;
