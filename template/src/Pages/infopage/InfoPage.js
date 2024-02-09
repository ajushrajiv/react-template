import { useEffect, useState } from "react";
import StandardButton from "../../components/common/buttons/StandardButton/StandardButton";

function InfoPage(){

    const handleClick = () => {
        alert("Hello from the info page");
    }

    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(function(){
        setTimeout(()=>{
            setIsLoading(false);
        },3000)
    },[]);

    if(isLoading)
    return(
        <div>
            Loading...
        </div>
     )
    return(
       <StandardButton text={"click"}  onClick={handleClick}/>
    );
}

export default InfoPage;