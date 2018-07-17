import React, {Component} from 'react';

class CreateRecipe extends Component {
    handleSubmit(e) {
        e.preventDefault();
        const recipe = this.refs.recipe;
        this.props.createRecipe({ recipe });
    }
    render() {
        return (
            <div>
                <p>Create recipe here</p>
                <form ref="recipeForm" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="recipe"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        );
    }
}

export default CreateRecipe