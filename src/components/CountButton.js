import React, {useState, useEffect} from 'react'

const CountButton = (props) => {
    const [currCount, setCurrentCount] = useState(0)

    const handleClick = () => {
        setCurrentCount(currCount + props.incrementBy);
    }

    useEffect(() => {
        if (currCount > 10){
            setCurrentCount(0)
        }
    }, [currCount])

    const buttonStyles= {
        background: props.buttonColor,
        borderRadius: "10px",
    }

    return(
        <div>
           <button style={buttonStyles} onClick={handleClick}>+{props.incrementBy}</button>
           <div>{currCount}</div> 
        </div>
    )
}
export default CountButton