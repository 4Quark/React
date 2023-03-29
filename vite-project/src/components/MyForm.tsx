import React from 'react';
import FormCard from './FormCard';
import '../styles/Form.css';

type formProps = Record<string, never>;
type formState = Record<string, never>;

export interface IFormCard {
  id: number;
  name: string;
  date: string;
  select: string;
  switcher: string;
  skills: string;
  file: string;
  checkbox: boolean;
}

class MyForm extends React.Component<formProps, formState> {
  nameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  selectInput: React.RefObject<HTMLSelectElement>;
  checkboxInput: React.RefObject<HTMLInputElement>;
  switcherInputM: React.RefObject<HTMLInputElement>;
  switcherInputF: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  multyCheckInputHTML: React.RefObject<HTMLInputElement>;
  multyCheckInputCSS: React.RefObject<HTMLInputElement>;
  multyCheckInputJS: React.RefObject<HTMLInputElement>;
  cards: IFormCard[];

  constructor(props: formProps) {
    super(props);
    this.nameInput = React.createRef();
    this.dateInput = React.createRef();
    this.selectInput = React.createRef();
    this.checkboxInput = React.createRef();
    this.switcherInputM = React.createRef();
    this.switcherInputF = React.createRef();
    this.fileInput = React.createRef();
    this.multyCheckInputHTML = React.createRef();
    this.multyCheckInputCSS = React.createRef();
    this.multyCheckInputJS = React.createRef();
    this.handleForm = this.handleForm.bind(this);
    this.cards = [];
  }

  handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.fileInput.current)
      if (this.fileInput.current.files)
        this.setState({ file: this.fileInput.current.files[0]?.name });

    if (
      this.nameInput.current &&
      this.dateInput.current &&
      this.selectInput.current &&
      this.checkboxInput.current
    ) {
      const lang = [];
      if (this.multyCheckInputHTML.current?.checked) lang.push('HTML');
      if (this.multyCheckInputCSS.current?.checked) lang.push('CSS');
      if (this.multyCheckInputJS.current?.checked) lang.push('JavaScript');

      this.cards.push({
        id: this.cards.length + 1,
        name: this.nameInput.current?.value,
        date: this.dateInput.current?.value,
        select: this.selectInput.current.value,
        switcher: this.switcherInputM.current?.checked ? 'male' : 'female',
        skills: lang.join(', '),
        file: this.fileInput?.current?.files
          ? URL.createObjectURL(this.fileInput.current.files[0])
          : '',
        checkbox: this.checkboxInput.current?.checked,
      });
    }
  };

  removeCard = (id: number) => {
    console.log(this.cards);
    this.cards.forEach((el, i) => {
      if (el.id == id) this.cards.splice(i, 1);
    });
    console.log(this.cards);
  };

  render() {
    return (
      <div className="form_content">
        <fieldset className="form_fieldset">
          <legend>User info</legend>
          <form onSubmit={this.handleForm}>
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
            <span>Gender: </span>
            <label>
              <input type="radio" name="sex" value="male" ref={this.switcherInputM} />
              male
            </label>
            <label>
              <input type="radio" name="sex" value="female" ref={this.switcherInputF} />
              female
            </label>

            <br />
            <span>Skills: </span>
            <label>
              <input type="checkbox" name="code" ref={this.multyCheckInputHTML} />
              HTML
            </label>
            <label>
              <input type="checkbox" name="code" ref={this.multyCheckInputCSS} />
              CSS
            </label>
            <label>
              <input type="checkbox" name="code" ref={this.multyCheckInputJS} />
              JavaScript
            </label>

            <br />
            <label>
              Upload profile picture:
              <input type="file" ref={this.fileInput} />
            </label>

            <br />
            <label>
              <input type="checkbox" ref={this.checkboxInput} />I consent to my personal data
            </label>

            <br />
            <input type="submit" value="Submit" />
          </form>
        </fieldset>
        <div className="form_cards_content">
          {this.cards.length !== 0 ? (
            this.cards?.map((card, i) => (
              <FormCard
                key={i}
                remove={this.removeCard}
                id={card.id}
                name={card.name}
                date={card.date}
                select={card.select}
                switcher={card.switcher}
                skills={card.skills}
                file={card.file}
                checkbox={card.checkbox}
              />
            ))
          ) : (
            <h2>Nothing found </h2>
          )}
        </div>
      </div>
    );
  }
}

export default MyForm;
