import React, { Component } from "react";

const asyncComponent = (fn) => {

    return (
        class extends Component {

            state = {
                component: null
            }

            componentDidMount() {
                
                fn()
                    .then((cmp) => {
                        console.log(cmp)
                        this.setState({
                            component: cmp.default
                        })
                    })


            }
        
            render() {
                const Cmp = this.state.component;
                console.log({Cmp})
                return Cmp ?  <Cmp {...this.props}/> : null;
            }  

        }
    )

    
    
}

export default asyncComponent;