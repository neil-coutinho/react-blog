import React, { Component } from "react";

const asyncComponent = (fn) => {

    return (
        class extends Component {

            state = {
                component: null
            }

            async componentDidMount() {
                // const component = await fn();
                // console.log(component)
                // this.setState({component})

                fn()
                    .then((cmp) => {
                        console.log(cmp)
                        this.setState({
                            component: cmp
                        })
                    })


            }
        
            render() {
                const Cmp = this.state.component;
        
                return Cmp ?  <Cmp {...this.props}/> : null;
            }  

        }
    )

    
    
}

export default asyncComponent;