import React from 'react';

type checkProps = Record<string, never>;
type checkState = Record<string, never>;

class FormCheck extends React.Component<checkProps, checkState> {
  checkboxInput: React.RefObject<HTMLInputElement>;
  multyCheckInputHTML: React.RefObject<HTMLInputElement>;
  multyCheckInputCSS: React.RefObject<HTMLInputElement>;
  multyCheckInputJS: React.RefObject<HTMLInputElement>;

  constructor(props: checkProps) {
    super(props);
    this.checkboxInput = React.createRef();
    this.multyCheckInputHTML = React.createRef();
    this.multyCheckInputCSS = React.createRef();
    this.multyCheckInputJS = React.createRef();
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.checkboxInput.current)
      console.log(`Consent to my personal data: ${this.checkboxInput.current.checked}`);
  };

  render() {
    return (
      <div className="form_content">
        <label>
          <input type="checkbox" name="code" ref={this.multyCheckInputHTML} />
          HTML
          <input type="checkbox" name="code" ref={this.multyCheckInputCSS} />
          CSS
          <input type="checkbox" name="code" ref={this.multyCheckInputJS} />
          JavaScript
        </label>
        <br />
        <input type="checkbox" ref={this.checkboxInput} />
        <span>I consent to my personal data</span>
      </div>
    );
  }
}

export default FormCheck;
