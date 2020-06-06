import React, {Component} from 'react';
import './PokeCard.css';
const PokeCard_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
class PokeCard extends Component{
render(){
let imgSrc = `${PokeCard_API}${padToThree(this.props.id)}.png`;


return(

    <div className="Pokecard">

        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-image">
        <img src={imgSrc}/>
        </div>
       
        <div className="Pokecard-data">Type:{this.props.type}</div>
        <div className="Pokecard-data">Exp:{this.props.exp}</div>
    </div>

);

}

}

export default PokeCard;
