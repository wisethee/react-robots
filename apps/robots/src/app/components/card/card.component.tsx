import { Component } from 'react';
import { Robot } from '../../app';

import './card.styles.scss';

type CardProps = {
  robot: Robot;
};

class Card extends Component<CardProps> {
  override render() {
    const { id, name, email } = this.props.robot;
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set1&size=180x180`}
          alt={`rotot`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
