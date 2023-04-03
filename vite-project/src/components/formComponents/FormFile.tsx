import React from 'react';

type fileProps = Record<string, never>;
type fileState = Record<string, never>;

class FormFile extends React.Component<fileProps, fileState> {
  fileInput: React.RefObject<HTMLInputElement>;

  constructor(props: fileProps) {
    super(props);
    this.fileInput = React.createRef();
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.fileInput.current) {
      if (this.fileInput.current.files)
        console.log(`Selected file - ${this.fileInput.current.files[0]?.name}`);
    }
  };

  render() {
    return (
      <label>
        Upload profile picture:
        <input type="file" ref={this.fileInput} />
      </label>
    );
  }
}

export default FormFile;
