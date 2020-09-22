import {useState, useEffect} from "react";


const Route = ({path, children}) => {

    // Route could update piece of state tracking the current pathname
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    // each Route could detect the URL has changed
    useEffect( () => {

        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate', onLocationChange);

        // cleanup function
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }

    // reminder: we use [] to run the inner arrow function inside
    // this useEffect hook when the Route component first time
    // rendered to the screen
    }, []);

    // Each Route re-renders, showing/hiding components appropriately
    return currentPath === path ? children : null;
};

export default Route;