import { Robot } from '../../app';

import './card.styles.scss';

type CardProps = {
  robot: Robot;
};

const Card = ({ robot }: CardProps) => {
  const { id, name, email } = robot;
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
};

export default Card;
