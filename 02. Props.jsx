// We can as obvious write things directly but in large scale applications, it's better and convenient to use Props

function Color ({ colorName }) {
  return <p>I like the color {colorName}.</p>;
}

function Like () { 
  return <Color colorName = "Pink"/>;
}

export default Like;
