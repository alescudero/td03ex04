/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/react-in-jsx-scope */
const Superhero = (props) => (
  <div>
    <h1>{props.name}</h1>
    <h2>{props.power}</h2>
    <img src={props.img}/>
  </div>
);

export default Superhero;
