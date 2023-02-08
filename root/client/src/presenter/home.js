import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeView } from "../view/homeView";


/**
 * The home page, currently only redirects to login page when not logged in
 * @param {Object} props.model - The app model 
 */
export default function Home(props) {
    const [currentUser, ] = useState(props.model.currentUser);
    const navigate = useNavigate();

    useEffect( () => {
        if(!currentUser){
            navigate("/login");
        }
    }, [currentUser]);

    return (
        <HomeView firstName={currentUser.firstName} lastName={currentUser.lastName}/>
    );

}