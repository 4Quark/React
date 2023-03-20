import React, { MouseEventHandler } from 'react'
import '../styles/Form.css'

type formProps = {};
type formState = {};

class Form extends React.Component<formProps, formState> {

    constructor(props: formProps) {
        super(props);
        this.state = {
            text: '',
            data: '',
            select: '',
            checkbox: '',
            switcher: '',
            file: ''
        }
        this.handleForm = this.handleForm.bind(this);
    }

    handleForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className='form_content'>
                <form>
                    <input type='text'>name, surname</input>
                    <input type='date'>birthday</input>
                    <input type='select'>countries</input>
                    <input type='checkbox'>"I consent to my personal data"</input>
                    <input type='switcher'>male/female</input>
                    <input type='file'>profile picture</input>
                    <button onClick={ this.handleForm }>Submit </button>
                </form>
            </div>
        )
    }
}

export default Form;