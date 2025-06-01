// Passing data from Parent Component to a deeply nested child component through multiple intermediate components! 

// Let us suppose you have a msg to send to your friend but instead of directly telling him you tell it to your mom, she tells dad, dad tells your brother and he then passes it down to your friend!

//  Which I would personally recommend as a DO NOT TRY AT HOME, cause we don't know what kinda msg you have and what kinda msg your friend's gonna reply and how it will come back to you, but if you do, I'm up for the tea about what happened next!

import React from "react"

function App (){
  return (
    < Parent message="Hallo, Freundin!"/>
  )
}

function Parent({message}) {
    return (
        <Child message= {message}/>
    )
}

function Child({message}) {
    return (
        <Freundin message={message}/>
    )
}


function Freundin({message}) {
    return <p>{message}</p>
}

export default App;


// Using Context
import React, {createContext, useContext} from "react"

const MessageContext = createContext();

function App() {
    return (
        <MessageContext.Provider value="Hallo, Freundin">
            <ParentComp />
        </MessageContext.Provider>
    )
}

function ParentComp() {
    return <ChildComp />
}

function ChildComp() {
    return <FreundinComp />
}

function FreundinComp() {
    const msg = useContext(MessageContext)
    return <p>{msg}</p>
}

export default App;

// Redux is also used for this but it's better to use it for large scale applications!
