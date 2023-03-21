import React from 'react'
import '../styles/Form.css'

type formProps = {};
type formState = {};

class Form extends React.Component<formProps, formState> {
    nameInput: React.RefObject<HTMLInputElement>;
    dateInput: React.RefObject<HTMLInputElement>;
    selectInput: React.RefObject<HTMLSelectElement>;
    checkboxInput: React.RefObject<HTMLInputElement>;
    switcherInputM: React.RefObject<HTMLInputElement>;
    switcherInputF: React.RefObject<HTMLInputElement>;
    fileInput: React.RefObject<HTMLInputElement>;

    constructor(props: formProps) {
        super(props);
        this.nameInput = React.createRef();
        this.dateInput = React.createRef();
        this.selectInput = React.createRef();
        this.checkboxInput = React.createRef();
        this.switcherInputM = React.createRef();
        this.switcherInputF = React.createRef();
        this.fileInput = React.createRef();
        this.handleForm = this.handleForm.bind(this);
    }

    handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('hi');
        
        if (this.nameInput.current) console.log(`A name was submitted: ${this.nameInput.current?.value}`);
        if (this.dateInput.current) console.log(`Birthday data: ${this.dateInput.current?.value}`);
        if (this.selectInput.current) console.log(`Country - ${this.selectInput.current.value}`);
        if (this.switcherInputM.current || this.switcherInputF.current) {
            const gender = (this.switcherInputM.current?.checked) ? 'male' : 'female';
            console.log(`Gender: ${gender}`);
        }
        if (this.fileInput.current) {
            if (this.fileInput.current.files) console.log(`Selected file - ${this.fileInput.current.files[0]?.name}`); // HERE 
        }
        if (this.checkboxInput.current) console.log(`Consent to my personal data: ${this.checkboxInput.current.checked}`);
    }

    render() {
        return (
            <div className='form_content'>
                <fieldset className="form_fieldset">
                    <legend>User info</legend>
                    <form onSubmit={ this.handleForm }>
                        <label>
                            Name:
                            <input type="text" name="name" ref={this.nameInput} />
                        </label>

                        <br />
                        <label>
                            Birthday:
                            <input type="date" name="date" ref={this.dateInput} />
                        </label>

                        <br />
                        <span>Country</span>
                        <select ref={this.selectInput}>
                            <option value="Belarus">Belarus</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Russia">Russia</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                        </select>

                        <br />
                        <span>Gender</span>
                        <label>
                            <input type='radio' name="sex" value='male' ref={this.switcherInputM} />
                            male
                        </label>
                        <label>
                            <input type='radio' name="sex" value='female' ref={this.switcherInputF} />
                            female
                        </label>

                        <br />
                        <label>
                            Upload profile picture:
                            <input type="file" ref={this.fileInput} />
                        </label>

                        <br />
                        <input type='checkbox' ref={this.checkboxInput} />
                        <span>I consent to my personal data</span>


                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                </fieldset>
            </div>
        )
    }
}

export default Form;