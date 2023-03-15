import React from 'react'

type postProps = {post: {id: number, title: string, text: string}};
type postState = {};

class Card extends React.Component<postProps, postState> {

    constructor(props: postProps) {
        super(props);
    }

    render() {
        return (
            <div className='card_container'>
                <div className='card_content'>
                    <strong className='card_number'>{this.props.post.id}. </strong>
                    <strong className='card_header'>{this.props.post.title}</strong>
                    <div className='card_info'>{this.props.post.text}</div>
                </div>
                <button className='card_btn'>Delete</button>
            </div>
        )
    }
}

export default Card;