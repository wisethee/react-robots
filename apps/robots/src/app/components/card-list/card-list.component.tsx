import { Robot } from '../../app';
import Card from '../card/card.component';

import './card-list.styles.scss';

type CardListProps = {
  robots: Robot[];
};

const CardList = ({ robots }: CardListProps) => {
  return (
    <div className="card-list">
      {robots.map((robot) => {
        return <Card key={robot.id} robot={robot} />;
      })}
    </div>
  );
};

export default CardList;
