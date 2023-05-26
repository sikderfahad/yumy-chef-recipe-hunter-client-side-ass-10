import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const Register = () => {
  const { user, userProfile, createUser } = useContext(AuthContext);

  const [show, setShow] = useState(false);

  const handledSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    createUser(email, password)
      .then((res) => {
        const createUser = res.user;

        userProfile(createUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {})
          .catch((error) => console.log(error.message));

        console.log(createUser);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="py-[200px] bg-black">
      <div className="md:w-4/12 w-10/12 mx-auto flex flex-col gap-7  top-[100px] ">
        <h1 className="text-center text-5xl font-bold text-white">
          Create Yumy Account{" "}
        </h1>

        <div>
          <div className="w-100% w-[320px] mx-auto">
            <form
              onSubmit={handledSignup}
              className="flex flex-col gap-4"
              action=""
            >
              <div className="flex items-center max-w-[320px] login-box">
                <input
                  className="w-full p-3 rounded-lg bg-transparent text-white "
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className="flex items-center max-w-[320px] login-box">
                <input
                  className="w-full p-3 rounded-lg bg-transparent text-white "
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="flex items-center max-w-[320px] login-box relative">
                <input
                  className="w-full p-3 rounded-lg bg-transparent text-white "
                  type={`${!show ? "password" : "text"}`}
                  name="password"
                  placeholder="Password"
                />
                <span
                  className="absolute text-white text-xl p-3 right-0 cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  {!show ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>

              <div className="flex items-center max-w-[320px] login-box">
                <input
                  className="w-full p-3 rounded-lg bg-transparent text-white "
                  type="text"
                  name="photo"
                  placeholder="Photo url"
                />
              </div>

              <button className="bg-white text-base font-semibold w-full grid grid-cols-[2fr,5fr] text-left items-center text-black p-3 rounded-lg hover:bg-transparent hover:text-white border">
                <MdOutlineMarkEmailRead className="text-2xl" /> Signup with
                Email
              </button>

              <button className="text-white text-center">
                Already have an Account?{" "}
                <Link
                  className="text-[#3291ff] hover:underline"
                  state={{ TextDecoder: "underline" }}
                  to={"/login"}
                >
                  {" "}
                  Please Login →
                </Link>
              </button>
            </form>
          </div>

          <p className="text-center text-[#888] mt-8">
            By joining, you agree to our{" "}
            <Link className="text-white hover:border-b">Terms of Service</Link>{" "}
            and{" "}
            <Link className="text-white hover:border-b">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
