import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/;
  const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
  const [color, setColor] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [userInfo, setUserInfo] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  function handleNameChange(e) {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });

    if (e.target.value.length <= 4) {
      setColor({ ...color, [e.target.name]: "#FF0000" });
    } else {
      setColor({ ...color, [e.target.name]: "#00FF00" });
    }
    if (e.target.value.length === 0) {
        setColor({ ...color, [e.target.name]: "" });
    }

  }
  function handleEmailChange(e) {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
    if (!emailRegex.test(e.target.value)) {
      setColor({ ...color, [e.target.name]: "#FF0000" });
    } else {
      setColor({ ...color, [e.target.name]: "#00FF00" });
    }
    if (e.target.value.length === 0) {
        setColor({ ...color, [e.target.name]: "" });
    }
  }
  function handlePasswordChange(e) {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
    if (!passRegex.test(e.target.value)) {
      setColor({ ...color, [e.target.name]: "#FF0000" });
    } else {
      setColor({ ...color, [e.target.name]: "#00FF00" });
    }
    if (e.target.value.length === 0) {
        setColor({ ...color, [e.target.name]: "" });
    }
  }
  function signUp() {
    if (
      userInfo.name.length > 4 &&
      emailRegex.test(userInfo.email) &&
      passRegex.test(userInfo.password)
    ) {
        axios.post("https://656e1da0bcc5618d3c248cea.mockapi.io/users" , {
            name: userInfo.name,
            email: userInfo.email,
            password: userInfo.password
        })
        .then(()=>{
            
            navigate("/login");
        })
        .catch(function (error) {
            console.log(error);
          });
       
    } else{
        alert("Please Enter Valid input")
    }
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-accent">Login now!</h1>
            <p className="py-6 text-base-300 hover:text-base-content">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  name="name"
                  value={userInfo.name}
                  type="text"
                  placeholder="Username"
                  style={{ borderColor: `${color.name}` }}
                  className={`input input-bordered border border-[${color.name}]`}
                  onChange={handleNameChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  value={userInfo.email}
                  type="text"
                  placeholder="email"
                  style={{ borderColor: `${color.email}` }}
                  className={`input input-bordered ]`}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  value={userInfo.password}
                  type="password"
                  placeholder="password"
                  style={{ borderColor: `${color.password}` }}
                  className={`input input-bordered border `}
                  onChange={handlePasswordChange}
                  required
                />
                {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
                <p className=" pt-1 text-sm font-light text-gray-500 dark:text-gray-400">
                  {" "}
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    className="font-medium hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <button onClick={signUp} className="btn btn-accent">
                  Sign UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
