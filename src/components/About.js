import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }
  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          Logged In User
          <UserContext.Consumer>
            {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
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
