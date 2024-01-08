import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    // console.log(props);
    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name+"Child Component Did Mount");
    //API call

    const data = await fetch("https://api.github.com/users/AkhilAgg777");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }
  render() {
    //const { name, location } = this.props;

    console.log(this.props.name + "Child Render");

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h1>Count2:{count2}</h1> */}
        <img src={avatar_url} />
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Conctact: @imAkAggarwal</h4>
      </div>
    );
  }
}

export default UserClass;
