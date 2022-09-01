import React from 'react';

class Component1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {msg:"Hello world of State!"}
    }
    //how to update the value of state?
    f1(){
        console.log("hello from f1()");
        this.setState({msg:"Hello from f1()"}) //assign object to state varaible
    }
    f2(){
        console.log("hello from f2()");
        this.setState({msg:"Hello from f2()"})
    }
    render() {
        this.f1(); //Call the function f1
        this.f2(); //Call the function f2
        return (
            <div>
                <h2>{this.state.msg}</h2>
            </div>
        )
    }
}
export default Component1;