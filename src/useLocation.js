import { useEffect, useState } from "react";

const useLocation=()=>{
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(()=>{
        window.navigator.geolocation.getCurrentPosition(
            position =>setLat(position.coords.longitude),
            err => setErrorMessage(err.message)
        );  
    }, []);

    return [lat, errorMessage];
};

export default useLocation;