import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");
  }

  componentDidMount(){
    //console.log("Parent Component Did Mount");
  }
  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Akhil</h2>
        {/* <User name={"Akhil Aggarwal(function)"}/> */}
        <UserClass name={"First"} location={"Dehradun class"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Akhil</h2>
//       {/* <User name={"Akhil Aggarwal(function)"}/> */}
//       <UserClass name={"Akhil Aggarwal(class)"} location={"Dehradun class"}/>
//     </div>
//   );
// };

export default About;
