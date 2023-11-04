


import {React,Component} from "react";

class Home extends Component {
    constructor(){
        super();
        console.log("constructor called");
    }
    componentDidMount(){
        console.log("componentDidMount called");
    }
    render() {
        return (
            <div>
                <h1 style={{margin:"20%",color:"#FF3399"}}><p/>Welcome To My Homepage</h1>
            
            </div>
        );
    }
}
export default Home;

