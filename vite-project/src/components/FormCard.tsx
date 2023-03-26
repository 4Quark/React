import React from 'react'
import '../styles/Card.css'
import MyForm from './MyForm';

type cardProps = {remove: (id: number) => void, id: number, name: string, date: string, select: string, switcher: string, skills: string, file: string, checkbox: boolean};
type cardState = {};

class FormCard extends React.Component<cardProps, cardState> {

    constructor(props: cardProps) {
        super(props);
    }

    render() {
        return (
            <div className='form_card_content'>
                <div className='form_card_main_content'>
                    <p> Name: {this.props.name}</p>
                    <p> Birthday: {this.props.date}</p>
                    <p> Country: {this.props.select}</p>
                    <p> Gender: {this.props.switcher}</p>
                    <p> Skills: {this.props.skills}</p>
                    <div className='image_container'>
                        <img className='personalIMG' src={(this.props.file)} />
                    </div>
                    <p> Consent personal data: {this.props.checkbox.toString()}</p>
                </div>
                <div className='form_card_additional_content'>
                    <button className='form_card_btn' onClick={() => this.props.remove(this.props.id)}>Remove</button>
                </div>
            </div>
        )
    }
}

export default FormCard;