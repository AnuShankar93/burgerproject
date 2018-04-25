import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
const ITEM_PRICE = {
    salad: 0.5,
    bacon: 0.8,
    cheese: 1.3,
    meat: 0.6

}
class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice : 4 
    }
    addItem = (type) => {
       const oldCount = this.state.ingredients[type];
       const updatedCount = oldCount+1;
       const updateitem ={
           ...this.state.ingredients
       }
       updateitem[type] = updatedCount;
       const priceAddition = ITEM_PRICE[type];
       const oldPrice  = this.state.totalPrice;
       const newPrice = oldPrice + priceAddition;
       this.setState({totalPrice:newPrice,ingredients:updateitem});

    }
    deleteItem = (type) =>{
       const oldCount = this.state.ingredients[type];
       if(oldCount <= 0){
           return;
       }
       const updatedCount = oldCount-1;
       const updateitem ={
           ...this.state.ingredients
       }
       updateitem[type] = updatedCount;
       const priceDeduction = ITEM_PRICE[type];
       const oldPrice  = this.state.totalPrice;
       const newPrice = oldPrice - priceDeduction;
       this.setState({totalPrice:newPrice,ingredients:updateitem});
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls added = {this.addItem} remove ={this.deleteItem}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;