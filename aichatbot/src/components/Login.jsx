import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    const response = await fetch(
      "https://6759e26b099e3090dbe33808.mockapi.io/users"
    );
    const users = await response.json();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      alert(`Welcome back, ${user.name}!`);
      navigate("/home");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="flex flex-col pl-8 pr-8 pt-16">
      {/* Header of Login page */}
      <div className="mb-10">
        <img
          src="/gptlogo.png"
          width={64}
          alt="GPT Logo"
          className="mb-6"
        />
        <h1 className="font-semibold text-5xl mb-4">Login to your account</h1>
        <p className="text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-green-400 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>

      <div className="w-full max-w-sm">
        {/* Email Input */}
        <div className="mb-6">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <img src="/emailIcon.png" width={28} alt="e" />
            </span>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              placeholder="Email"
              className="w-full pl-12 pr-4 py-2 h-14 border rounded-2xl focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <img src="/passIcon.png" width={28} alt="e" />
            </span>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              className="w-full pl-12 pr-4 py-2 h-14 border rounded-2xl focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
              <img src="/eye.png" width={28} alt="" />
            </span>
          </div>
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end mb-8 pr-4">
          <a
            href="#"
            className="text-sm font-semibold text-green-400 hover:underline"
          >
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-green-400 text-white h-12 font-semibold rounded-full hover:bg-green-500"
        >
          Login
        </button>

        {/* Other Platforms */}
        <div className="my-8 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-400 text-sm">Or login with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google and FaceBook */}
        <div className="flex justify-between">
          <button className="font-bold flex items-center h-14 justify-center w-full bg-gray-100 py-2 rounded-full hover:bg-gray-200 mr-2">
            <img
              src="/googleLogo.png"
              alt="Google"
              className="h-5 w-5 mr-2"
            />
            Google
          </button>
          <button className="font-bold flex items-center h-14 justify-center w-full bg-gray-100 py-2 rounded-full hover:bg-gray-200 ml-2">
            <img
              src="/facebookLogo.png"
              alt="Facebook"
              className="h-5 w-5 mr-2"
            />
            Facebook
          </button>
        </div>

        {/* Footer */}
        <footer className="w-full py-4 mt-16 bg-white text-center">
          <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
