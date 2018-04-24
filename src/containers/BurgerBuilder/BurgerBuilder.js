import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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

    }
    deleteItem = (type) =>{

    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls/>
            </Aux>
        );
    }
}

export default BurgerBuilder;