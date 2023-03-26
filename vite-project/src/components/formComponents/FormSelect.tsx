import React from 'react'

type selectProps = {};
type selectState = {};

class FormSelect extends React.Component<selectProps, selectState> {
    selectInput: React.RefObject<HTMLSelectElement>;

    constructor(props: selectProps) {
        super(props);
        this.selectInput = React.createRef();
        this.handleForm = this.handleForm.bind(this);
    }

    handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();        
        if (this.selectInput.current) console.log(`Country - ${this.selectInput.current.value}`);
    }

    render() {
        return (
            <div>
                <span>Country</span>
                <select ref={this.selectInput}>
                    <option value="Belarus">Belarus</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Russia">Russia</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                </select>
            </div>
        )
    }
}

export default FormSelect;