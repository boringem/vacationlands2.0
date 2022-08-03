import destinationsData from '../data/destinations';
import Card from './Card';

export default function CardGrid(props) {
    var gridClass = 'grid justify-items-center gap-4 grid-cols-3'
    var intGrid = parseInt(props.gridCols);
    var destinations = destinationsData;

    const cardList = destinations.map((destination) => 
        <Card key={destination.id} id={destination.id} border={props.border} highlight={props.highlight} />
    );
    return (
        <div className={gridClass}>
            {cardList}
        </div>
    )
}