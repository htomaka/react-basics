import React from 'react';
import {render} from 'react-dom';

// higher order component replace mixins
// and allow to reuse logic between components
let higherOrderComponent = (Component, initialState) => {
    return class extends React.Component {
        constructor (props){
            super(props);
            this.state = initialState;
        }

        componentDidMount(){
            setInterval(() => {
                this.setState({
                    count: this.state.count + 1
                })
            }, 1000)
        }

        render(){
            return (
                <Component {...this.props} {...this.state}/>
        )
        }
    }

};

class Comp1 extends React.Component {
    render(){
        return (
            <span>Count: {this.props.count}</span>
    )
    }
}

class Comp2 extends React.Component {
    render(){
        return (
            <span>Count: {this.props.count}</span>
    )
    }
}

export const WrappedComp1 = higherOrderComponent(Comp1, {count: 1});
export const WrappedComp2 = higherOrderComponent(Comp2, {count: 20});