import React from 'react';
import '../styles/Card.css';

type postProps = {
  post: {
    id: number;
    thumbnail: string;
    title: string;
    description: string;
    brand: string;
    category: string;
    rating: number;
    price: number;
    discountPercentage: number;
  };
};
type postState = Record<string, never>;

class Card extends React.Component<postProps, postState> {
  constructor(props: postProps) {
    super(props);
  }

  render() {
    return (
      <div className="card_content">
        <div className="card_main_content">
          <div className="card_picture">
            <img className="card_img" src={this.props.post.thumbnail} />
            <div className="card_label">
              <svg
                className="card_label_star"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
              </svg>
              {this.props.post.rating}
            </div>
          </div>
          <div className="card_info">
            <h4 className="card_header">
              {this.props.post.id}. {this.props.post.title}
            </h4>
            <h5 className="card_subheader">
              {this.props.post.brand}. {this.props.post.category}
            </h5>
            <div className="card_text">{this.props.post.description}</div>
          </div>
        </div>
        <div className="card_additional_content">
          <span className="muted_price">{this.props.post.price} $</span>
          <span className="price">
            {Math.round((this.props.post.price * (100 - this.props.post.discountPercentage)) / 100)}{' '}
            $
          </span>
          <button className="card_btn">Add</button>
        </div>
      </div>
    );
  }
}

export default Card;
