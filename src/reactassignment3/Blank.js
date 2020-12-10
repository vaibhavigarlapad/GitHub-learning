import React from "react";
import "./home.scss";
import "./data.json";

const images = [
  "https://cdn2.vectorstock.com/i/1000x1000/50/36/little-asian-schoolgirl-pointing-forefinger-up-vector-20095036.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBAGGYfXinE-y1WA9864U8G11kUBwr9ZDZuQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVzk_n2xxB5K1WAWETP7R_Lf5w5rwu_ykQMA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCN0-PUG9t1l-L4Suz8caUSgc0S96Vm4fGxw&usqp=CAU",
  "data:image/png;base64,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",
  "https://cdn3.vectorstock.com/i/1000x1000/43/42/happy-cartoon-boy-young-character-portrait-vector-18964342.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRu-Exs6gtG1owEYZ3nK7GlSqnHgz540ijY4w&usqp=CAU",
  "https://p7.hiclipart.com/preview/703/753/176/clip-art-women-openclipart-computer-icons-teacher-teacher-thumbnail.jpg",
  "https://p7.hiclipart.com/preview/703/753/176/clip-art-women-openclipart-computer-icons-teacher-teacher-thumbnail.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbTuZOiXBB2q5K01TVlN9bWOYlydNYVDoQiQ&usqp=CAU",
];
var hasOwn = {}.hasOwnProperty;
const classNames = (...args) => {
  var classes = [];

  for (var i = 0; i < args.length; i++) {
    var arg = args[i];
    if (!arg) continue;

    var argType = typeof arg;

    if (argType === "string" || argType === "number") {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      var inner = classNames.apply(null, arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (argType === "object") {
      for (var key in arg) {
        if (Object.hasOwnProperty.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(" ");
};

export class Homepage extends React.Component {
  state = {
    files: "files",
    name: null,
    age: null,
    id: null,
    gender: null,
    birthday: null,
    height: null,
    image: null,
    formData: null,
    searchString: "",
  };
  // onchangeimage = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value, // update the value of specific key
  //   });
  // };
  handleChange = (e) => {
    this.setState({ searchString: e.target.value });
  };
  handlefile = (e) => {
    console.warn(e.target.files);
    const files = e.target.files;

    const formData = {
      name: this.state.name,
      age: this.state.age,
      id: this.state.id,
      gender: this.state.gendername,
      birthday: this.state.birthday,
      height: this.state.height,
      image: this.state.image,
    };
    console.log(formData, "====xxxx====>", this.state.id);
    fetch("http://localhost:3002/patient/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((resp) => {
      resp.json().then((result) => {
        console.warn("result", result);
      });
    });
  };
  handleaddpatientbutton = () => {
    // this.setState({
    //   name: item.name,
    //   age: item.age,
    //   id: item.id,
    //   gender: item.gendername,
    //   birthday: item.birthday,
    //   height: item.height,
    //   image: item.image,
    // addpatient:true
    // });
    {
      this.props.handleaddpatient;
    }
  };
  // handleupload(e) {
  //   let file = this.state.file;
  //   let formdata = new FormData();
  //   formdata.append("image", file);
  //   formdata.append("name", "nishwitha");
  // }

  render() {
    var patient = this.props.items,
      searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
      patient = patient.filter(function (i) {
        return i.name.toLowerCase().match(searchString);
      });
    }

    return (
      <div id="navbar">
        <div style={{ border: "1px  solid" }}>
          <h1
            style={{
              marginTop: "0px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Welcome to Cognived
          </h1>
          <h1
            style={{
              marginTop: "0px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Learn about each patient by clicking on their icon
          </h1>

          <a href="#news">
            <button name="button" onclick={this.handleaddpatientbutton}>
              <b>Add Patient</b>
            </button>
          </a>

          <a href="#home">
            <b>Patient</b>
          </a>

          <a href="#contact">
            <b> Pivots</b>
          </a>

          <a href="#contact">
            <b> Help</b>
          </a>

          <input
            type="text"
            placeholder="Search.."
            name="search"
            value={this.state.searchString}
            onChange={this.handleChange}
            style={{ marginTop: "0px", justifyContent: "right" }}
          />
          {/* <button
            type="button"
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: " right",
            }}
          >
            <i class="fa fa-search"></i>search
          </button> */}
        </div>

        <Carousel images={images} />
        <p className="flavor-text">React carousel</p>
        <input
          type="file"
          name="file"
          style={{
            margin: "0px",
            top: "300px",
            height: "300px",
            padding: "0px",
            width: "300px",
          }}
          onChange={(e) => this.handlefile(e)}
        ></input>
        {/* <button type="button" onClick={(e) => this.handleupload(e)}>
          upload
        </button> */}
      </div>
    );
  }
}

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      isTransitioning: false,
      goingLeft: false,
      patient: [],
    };
  }

  componentDidMount() {
    window.addEventListener("keyup", this.onKeyUp);
  }

  componentDidMount() {
    fetch("http://localhost:3002/patient")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          patient: res,
        });
      });
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.onKeyUp);
  }
  onchangeupdate = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onKeyUp = (e) => {
    if (e.keyCode) {
      if (e.keyCode === 39) {
        this.showNextSet();
      } else if (e.keyCode === 37) {
        this.showPrevSet();
      }
    }
  };

  render() {
    // console.log(this.state.patient);
    const { images } = this.props;
    const { currentIndex, isTransitioning, goingLeft } = this.state;

    return (
      <div className="carousel__wrapper">
        <div className="carousel__container">
          {images.map((img, index) => {
            let className = "carousel__image";
            if (index === currentIndex) className += " active";

            return <img src={img} className={className} key={`img-${index}`} />;
          })}
        </div>
        <div className="carousel__controls">
          <button className="carousel__button" onClick={this.showPrevSet}>
            <i className="fa fa-arrow-left">prev</i>
          </button>
          <button className="carousel__button" onClick={this.showNextSet}>
            <i className="fa fa-arrow-right">next</i>
          </button>
        </div>

        <Athree currentIndex={currentIndex} patient={this.state.patient} />
      </div>
    );
  }

  showPrevSet = () => {
    const currentIndex =
      (this.state.currentIndex - 1 + this.props.images.length) %
      this.props.images.length;
    this.setState({ currentIndex });
  };

  showNextSet = () => {
    const currentIndex =
      (this.state.currentIndex + 1) % this.props.images.length;
    this.setState({ currentIndex });
  };
}
class Athree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: "display",
      name: null,
      age: null,
      id: null,
      gender: null,
      birthday: null,
      height: null,
      image: null,
      singledata: null,
    };
  }

  handleeditbutton = (item) => {
    this.setState({
      name: item.name,
      age: item.age,
      id: item.id,
      gender: item.gendername,
      birthday: item.birthday,
      height: item.height,
      image: item.image,
    });
    this.setState({ edit: "edit" });
  };

  handlecancelbutton = () => {
    this.setState({ edit: "display" });
  };
  onchangeupdate = (e) => {
    this.setState({
      [e.target.name]: e.target.value, // update the value of specific key
    });
  };

  handlesubmitbutton = () => {
    const singledata = {
      name: this.state.name,
      age: this.state.age,
      id: this.state.id,
      gender: this.state.gendername,
      birthday: this.state.birthday,
      height: this.state.height,
      image: this.state.image,
    };
    console.log(singledata, "====xxxx====>", this.state.id);
    fetch("http://localhost:3002/patient/" + this.state.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(singledata),
    })
      .then((res) => res.json())
      .then(() => {
        alert("successfully updated");
      })
      .catch(() => {
        alert("ERROR in fetch");
      });
  };
  handleaddpatient = () => {
    this.setState({ edit: "addpatient" });
  };
  handledeletebutton = () => {
    const singledata = {
      name: this.state.name,
      age: this.state.age,
      id: this.state.id,
      gender: this.state.gendername,
      birthday: this.state.birthday,
      height: this.state.height,
      image: this.state.image,
    };
    console.log(singledata, "YYYY", this.state.id);
    fetch("http://localhost:3002/patient/" + this.state.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(singledata),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Are you sure you want to delete?");
      })
      .catch(() => {
        alert("ERROR in fetch");
      });
  };

  render() {
    if (this.state.edit === "display") {
      return (
        <>
          {this.props.patient.map((item, i) => {
            if (i === this.props.currentIndex) {
              return (
                <div>
                  <button
                    type="button"
                    onClick={() => this.handleeditbutton(item)}
                    style={{
                      width: "50%",
                      fontSize: "25px",
                      JustifyContent: "right",
                      backgroundColor: "skyblue",
                    }}
                  >
                    <b>edit</b>
                  </button>
                  <h3>
                    name:{item.name}
                    <hr />
                    Age: {item.age}
                    <hr />
                    Id:{item.id}
                    <hr />
                    Birthday:{item.birthday}
                    <hr />
                    Gender:{item.gender}
                    <hr />
                    Height:{item.height}
                    <hr />
                    image:{item.image}
                    <hr />
                  </h3>
                </div>
              );
            }
          })}
        </>
      );
    } else if (this.state.edit === "edit") {
      return (
        <>
          {this.props.patient.map((item, i) => {
            if (i === this.props.currentIndex) {
              if (this.state.edit === true) {
                return (
                  <div>
                    <form>
                      <button
                        type="button"
                        onClick={this.handlecancelbutton}
                        style={{
                          width: "50%",
                          fontSize: "25px",
                          JustifyContent: "right",
                          backgroundColor: "skyblue",
                        }}
                      >
                        <b>cancel</b>
                      </button>

                      <form>
                        <label>
                          <b>Name:</b>
                        </label>
                        <input
                          type="text"
                          name="name"
                          defaultValue={item.name}
                          onChange={this.onchangeupdate}
                        />
                      </form>
                      <hr />
                      <form>
                        <label>
                          <b>Age:</b>
                        </label>
                        <input
                          type="text"
                          name="age"
                          defaultValue={item.age}
                          onChange={this.onchangeupdate}
                        />
                      </form>
                      <hr />
                      <form>
                        <label>
                          <b>Id:</b>
                        </label>
                        <input
                          type="text"
                          name="id"
                          defaultValue={item.id}
                          onchange={this.onchangeupdate}
                        />
                      </form>
                      <hr />
                      <form>
                        <label>
                          <b>Gender:</b>
                        </label>
                        <input
                          type="text"
                          name="gender"
                          defaultValue={item.gender}
                          onchange={this.onchangeupdate}
                        />
                      </form>
                      <hr />
                      <form>
                        <label>
                          <b>Birthday:</b>
                        </label>
                        <input
                          type="text"
                          name="birthday"
                          defaultValue={item.birthday}
                          onchange={this.onchangeupdate}
                        />
                      </form>
                      <hr />
                      <form>
                        <label>
                          <b>Height:</b>
                        </label>
                        <input
                          type="text"
                          name="height"
                          defaultValue={item.height}
                          onchange={this.onchangeupdate}
                        />
                      </form>
                      <form>
                        <label>
                          <b>image:</b>
                        </label>
                        <input
                          type="text"
                          name="height"
                          defaultValue={item.image}
                          onchange={this.onchangeupdate}
                        />
                      </form>
                      <button
                        className="btn btn-info"
                        onClick={this.handledeletebutton}
                        style={{
                          width: "50%",
                          fontSize: "25px",
                          backgroundColor: "skyblue",
                        }}
                      >
                        <b>Delete</b>
                      </button>
                      <button
                        type="button"
                        onClick={this.handlesubmitbutton}
                        style={{
                          width: "50%",
                          fontSize: "25px",
                          backgroundColor: "skyblue",
                        }}
                      >
                        <b>update</b>
                      </button>
                    </form>
                  </div>
                );
              }
            }
          })}
        </>
      );
    } else if (this.state.edit === "addpatient") {
      return (
        <form>
          <label>
            <b>Name:</b>
          </label>
          <input type="text" name="name" />
          <label>
            <b>age:</b>
          </label>
          <input type="text" name="name" />
          <label>
            <b>id:</b>
          </label>
          <input type="text" name="name" />
          <label>
            <b>gender:</b>
          </label>
          <input type="text" name="name" />
          <label>
            <b>birthday:</b>
          </label>
          <input type="text" name="name" />
          <label>
            <b>height:</b>
          </label>
          <input type="text" name="name" />
          <label>
            <b>image:</b>
          </label>
          <input type="text" name="name" />
        </form>
      );
    }
  }
}

export default Homepage;
