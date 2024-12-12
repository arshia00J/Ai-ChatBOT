import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (name == "" || email == "" || password == "") {
      alert("Name, Email, Password is Empty!");
      return;
    }

    const response = await fetch(
      "https://6759e26b099e3090dbe33808.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    if (response.ok) {
      alert("Account created successfully!");
      navigate("/");
    } else {
      alert("Failed to create an account. Please try again.");
    }
  };

  return (
    <div className="flex flex-col pl-8 pr-8 pt-16">
      {/* Header of Sign up page */}
      <div className="mb-10">
        <img
          src="/gptlogo.png"
          width={64}
          alt="GPT Logo"
          className="mb-6"
        />
        <h1 className="font-semibold text-5xl mb-4">Sign up your account</h1>
        <p className="text-gray-600">
          You have an account?{" "}
          <Link to="/" className="text-green-400 font-semibold">
            Login
          </Link>
        </p>
      </div>

      <div className="w-full max-w-sm">
        {/* Name Input */}
        <div className="mb-6">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400"></span>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
              className="w-full pl-12 pr-4 py-2 h-14 border rounded-2xl focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>
        </div>

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
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
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
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-2 h-14 border rounded-2xl focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
              <img src="/eye.png" width={28} alt="" />
            </span>
          </div>
        </div>

        {/* Sign up Button */}
        <button
          onClick={handleSignUp}
          className="w-full mt-9 bg-green-400 text-white h-12 font-semibold rounded-full hover:bg-green-500"
        >
          Sign Up
        </button>

        {/* Other Platforms */}
        <div className="my-8 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-400 text-sm">Or Sign up with</span>
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
