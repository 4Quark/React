import React from 'react';
import '../styles/Card.css';

type searchCardProps = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  episode: string[];
  image: string;
};
type cardState = Record<string, never>;

class FormCard extends React.Component<searchCardProps, cardState> {
  constructor(props: searchCardProps) {
    super(props);
  }

  render() {
    return (
      <div className="card_content">
        <div className="card_main_content">
          <div className="card_picture">
            <img className="card_img" src={this.props.image} />
          </div>
          <div className="card_info">
            <h4 className="card_header">{this.props.name}</h4>
            <h5 className="card_subheader">Species: {this.props.species}</h5>
            <div className="card_text">Gender: {this.props.gender}</div>
            {this.props.type ? (
              <div className="card_text">Type: {this.props.type}</div>
            ) : (
              <div className="card_text">No type</div>
            )}
          </div>
        </div>
        <div className="card_additional_content">
          <span className="price"> Status: {this.props.status} </span>
          <button className="card_btn">More</button>
        </div>
      </div>
    );
  }
}

export default FormCard;
