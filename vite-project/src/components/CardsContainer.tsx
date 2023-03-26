import React from 'react'
import '../styles/Card.css'
import FormCard from './FormCard';
import { IFormCard } from './MyForm';

type containerProps = { cards: IFormCard[], remove: (id: number) => void };
type containerState = {};

class CardsContainer extends React.Component<containerProps, containerState> {

    constructor(props: containerProps) {
        super(props);
    }

    render() {
        return (
            <div className='form_cards_content'>
                {this.props.cards.length !== 0
                    ? this.props.cards?.map((card, i) => <FormCard key={i} remove={this.props.remove} id={card.id} name={card.name} date={card.date} select={card.select} switcher={card.switcher} skills={card.skills} file={card.file} checkbox={card.checkbox} />)
                    : <h2>Nothing found </h2>
                }
            </div>
        )
    }
}

export default CardsContainer;