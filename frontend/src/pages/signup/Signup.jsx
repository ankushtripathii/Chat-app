import { Link } from "react-router-dom";
import Gendercheckbox from "./Gendercheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-1">
        <h1 className="text-3xl font-semibold text-center text-black pb-5">
          Sign Up <span className="text-purple-700 "> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-lg text-gray-950">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Jhon Doe "
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-lg text-gray-950">Username</span>
            </label>
            <input
              type="text"
              placeholder="jhondoe "
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-lg text-gray-950">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-lg text-gray-950">Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
            />
          </div>
          {/* Gender checkbox goes here  */}
          <Gendercheckbox />

          <Link
            to="/login"
            className="text-sm text-gray-500 hover:underline hover:text-violet-900"
          >
            Already have an account
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5  mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 ">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

/*
import Gendercheckbox from "./Gendercheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-1">
        <h1 className="text-3xl font-semibold text-center text-black pb-5">
          Sign Up <span className="text-purple-700 "> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-lg text-gray-950">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Jhon Doe "
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-lg text-gray-950">Username</span>
            </label>
            <input
              type="text"
              placeholder="jhondoe "
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-lg text-gray-950">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-lg text-gray-950">Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
            />
          </div>
          
          <Gendercheckbox />

          <a
            href="#"
            className="text-sm text-gray-500 hover:underline hover:text-violet-900"
          >
            Already have an account
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5  mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 ">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
*/
