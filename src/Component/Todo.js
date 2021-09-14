import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Todo = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://thronesapi.com/api/v2/Characters")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>
    }
    else if (!isLoaded) {
        return <div>Loading...
        </div>
    }
    else {
        return (
            <div className="jumbotron">
           
            <div className="linkdata">
                 
               <div className="searchlist">
                  <label><h4>Search:</h4></label>
                <input placeholder="search..." />
                </div>
                <hr/>
                 
                <h1 className="textcenter"><u>Game Of Thrones:</u></h1>
            <ul className="myul">
            {users.map(user => (
            <li className="btnli">
           <button className="btn btn-sucess "><Link to={`user/${user.id}`}>{user.fullName}</Link></button> 
            </li>
            ))}
        </ul>
        </div>
            
            </div>
        );



    }


}
export default Todo;