import React from 'react'
import '../styles/Search.css'

type SearchProps = {};
type SearchState = { value: string };

class ClassCounter extends React.Component<SearchProps, SearchState> {

    constructor(props: SearchProps) {
        super(props);
        this.state = {
            value: ''
        }
        this.changeInput = this.changeInput.bind(this);
        this.submitInput = this.submitInput.bind(this);
    }

    componentDidMount() {
      const inputValue = localStorage.getItem('inputText');
      if (inputValue) this.setState({value: inputValue});
    }
    
    changeInput(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({value: event.target.value});
        localStorage.setItem('inputText', event.target.value);
    }
    
    submitInput() {
        localStorage.setItem('inputText', this.state.value);
        alert('Text in input: ' + this.state.value);
    }

    render() {
        return (
            <div className='search_field'>
                <input type="text" value={this.state.value} onChange={this.changeInput} />
                <button className='search_btn' onClick={this.submitInput} >Search</button>
            </div>
        )
    }
}

export default ClassCounter;