import React from 'react'

function Index({textInput, setTextInput, coins, setCoins}) {
    function handleTextInput (e) {
        setTextInput(e.target.value);
        console.log(textInput)
        
    }
    return (
        <form>
            <input value={textInput}type="text" placeholder="search for a crypto" onChange={handleTextInput}/>
        </form>
    )
}

export default Index;
