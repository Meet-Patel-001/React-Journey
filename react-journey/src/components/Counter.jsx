import React from "react";

function Count() {
    const [count, setCount] = React.useState(0);
    return(
        <>
            <div className="counter">
                <h1>Counter</h1>
                <h2>{count} </h2>
                <button onClick={() => setCount(count + 1)} >Increment</button>
                <button onClick={() => setCount(count - 1)} >Decrement</button>
                <button onClick={() => setCount(0)} >Reset</button>
            </div>
        </>
    );
}

export default Count;