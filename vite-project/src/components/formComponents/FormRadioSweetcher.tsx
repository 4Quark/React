import React from 'react';

type radioProps = Record<string, never>;
type radioState = Record<string, never>;

class FormRadioSweetcher extends React.Component<radioProps, radioState> {
  switcherInputM: React.RefObject<HTMLInputElement>;
  switcherInputF: React.RefObject<HTMLInputElement>;

  constructor(props: radioProps) {
    super(props);
    this.switcherInputM = React.createRef();
    this.switcherInputF = React.createRef();
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.switcherInputM.current || this.switcherInputF.current) {
      const gender = this.switcherInputM.current?.checked ? 'male' : 'female';
      console.log(`Gender: ${gender}`);
    }
  };

  render() {
    return (
      <div>
        <span>Gender</span>
        <label>
          <input type="radio" name="sex" value="male" ref={this.switcherInputM} />
          male
        </label>
        <label>
          <input type="radio" name="sex" value="female" ref={this.switcherInputF} />
          female
        </label>
      </div>
    );
  }
}

export default FormRadioSweetcher;
