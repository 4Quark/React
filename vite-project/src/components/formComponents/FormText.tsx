import React from 'react'

type textProps = { label?: string };
type textState = {};

class FormText extends React.Component<textProps, textState> {
    nameInput: React.RefObject<HTMLInputElement>;

    constructor(props: textProps) {
        super(props);
        this.nameInput = React.createRef();
        this.handleForm = this.handleForm.bind(this);
    }

    handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (this.nameInput.current) console.log(`A name was submitted: ${this.nameInput.current?.value}`);
    }

    render() {
        return (
            <label>
                {this.props.label}
                <input type="text" name="name" ref={this.nameInput} />
            </label>
        )
    }
}

export default FormText;