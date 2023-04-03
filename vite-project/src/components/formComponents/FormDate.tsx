import React from 'react';

type dateProps = Record<string, never>;
type dateState = Record<string, never>;

class FormDate extends React.Component<dateProps, dateState> {
  dateInput: React.RefObject<HTMLInputElement>;

  constructor(props: dateProps) {
    super(props);
    this.dateInput = React.createRef();
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.dateInput.current) console.log(`Birthday data: ${this.dateInput.current?.value}`);
  };

  render() {
    return (
      <label>
        Birthday:
        <input type="date" name="date" ref={this.dateInput} />
      </label>
    );
  }
}

export default FormDate;
