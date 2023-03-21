import React from 'react'
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

    handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('hi');
    }

    render() {
        return (
            <div className='form_content'>
                <fieldset className="form_fieldset">
                    <legend>User info</legend>
                    <form onSubmit={ this.handleForm }>
                        <p></p>
                        
                        <label>
                            Name:
                            <input type="text" name="name" />
                        </label>

                        <p></p>

                        <label>
                            Birthday:
                            <input type="date" name="date" />
                        </label>

                        <p></p>
                        
                        <span>Country</span>
                        <select>
                            <option value="Belarus">Belarus</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Russia">Russia</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                        </select>

                        
                        <p></p>
                        <span>Gender</span>
                        <label>
                            <input type='radio' name="sex"></input>
                            male
                        </label>
                        <label>
                            <input type='radio' name="sex"></input>
                            female
                        </label>

                        <p></p>
                        <span>profile picture</span>
                        <input type='file'></input>

                        <p></p>
                        <input type='checkbox'></input>
                        <span>I consent to my personal data</span>


                        <p></p>
                        <input type="submit" value="Submit" />
                    </form>
                </fieldset>
            </div>
        )
    }
}

export default Form;