import React, {useState, useEffect} from "react";

function App(){
    const [dogs, setDogs]=useState("");
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(data => {
            console.log(data.message)
            setDogs(data.message)
            setIsLoaded(true)
            return;
        } )
    }, [])
    
    if (!isLoaded) return <p>Loading...</p>

    return (
        <>
        <p>hai</p>
        // <img src={dogs} alt="A Random Dog" />
        </>
    )
}
export default App;
