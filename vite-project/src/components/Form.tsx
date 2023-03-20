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
        console.log('hi');
    }

    render() {
        return (
            <div className='form_content'>
                <form>
                    <input type='text'></input>
                    <input type='date'></input>
                    <input type='select'></input>
                    <input type='checkbox'></input>
                    <input type='switcher'></input>
                    <input type='file'></input>
                    <button onClick={ this.handleForm }>Submit </button>
                </form>
            </div>
        )
    }
}

export default Form;