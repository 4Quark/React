import React from 'react';

type MyProps = Record<string, never>;
type MyState = { count: number };

class ClassCounter extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h2 className="counter_label">{this.state.count}</h2>
        <button className="increment_btn" onClick={this.increment}>
          {' '}
          Increment{' '}
        </button>
        <button className="decrement_btn" onClick={this.decrement}>
          {' '}
          Decrement{' '}
        </button>
      </div>
    );
  }
}

export default ClassCounter;
