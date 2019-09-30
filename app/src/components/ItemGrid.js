import React, {Component} from 'react';

const items = [
    { id: 1, name: 'Chicken', desc: 'tasty', price: 50, rating: 5},
    { id: 2, name: 'Chicken HOT', desc: 'tasty', price: 27, rating: 2},
    { id: 3, name: 'Chicken Burger', desc: 'tasty', price: 25, rating: 3}
];

class ItemGrid extends Component{

    render() {

        return items.map((i) => {
            let num = 0;
            return (
                <div className="item{++num} frames-style">
                    <div className="item-frame">
                        <div className="button-price"><a href="#" className="price">{i.price}</a></div>
                        <span className="big-dot"></span>
                        <div className="stars-div">
                            <form id="ratings-form">
                                <div className="stars">
                                    {i.rating}
                                </div>
                            </form>
                        </div>

                        <h4>{i.name}</h4>
                        <p>{i.desc}</p>
                        <div className="button-card"><a href="#" className="to-card">Add to card</a>
                        </div>
                </div>
                </div>
            )
        });
    }
}

export default ItemGrid
