import React,{useEffect,useState} from "react";

const Gameofcharacter = props => {

var id = props.match.params.id
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState([]);
    
    useEffect(() => {
        fetch("https://thronesapi.com/api/v2/Characters/" + id)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setUser(data);
                    setIsLoaded(true);
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
    if (!isLoaded) {
        return <div>Loading...</div>
    }  
    if (user) {
        return (
            <div className=" container jumbotron bg-secondary">
               <h1 style={{backgroundColor:"darkgray",color:"white",textAlign:"center"}}><u>Character  Detail</u></h1>
                <div className="maondiv">
                <h3>ID:{user.id}</h3>
                <h1>{user.fullName}</h1>
                <div>
                   <span style={{color:"blue"}}>Title:</span>  {user.title}
                </div>
                <div>
                <span style={{color:"blue"}}>Family::</span>  {user.family}
                </div>
                <div>
                <span style={{color:"blue"}}>Image:</span> {user.image}
                </div>
               
                </div>
            </div>
        );
    }

}
export default Gameofcharacter;