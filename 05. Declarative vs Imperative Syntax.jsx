// Declarative as the name denotes - we can literally see declaration of the output in the code base i.e. is React

import React from 'react';

function Declarative() {
    return <p>Declarative</p>
}

export default Declarative;


// Imperative is non React (JavaScript) where we write the whole code as in vanilla JS i.e. creating element => adding inner text, then adding that element to the DOM!

function Imperative() {
    const element = document.createElement("p");
    element.textContent="Imperative";
    document.body.appendChild(element)
}