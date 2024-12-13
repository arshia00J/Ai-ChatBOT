import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ArchivedBox from "../components/ArchivedBox.jsx";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://6759e26b099e3090dbe33808.mockapi.io/archived"
      );
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Top Back and Profile */}
      <div className="mt-6 flex w-full px-6 py-3 justify-between">
        <Link to="/">
          {" "}
          <div className="flex justify-center items-center gap-3">
            <img src="/leftArrow.png" alt="arrow" width={40} />
            <p className="font-semibold text-xl">Back</p>
          </div>
        </Link>
        <Link to="/profile">
          <img src="/avatar.png" alt="avatar" width={40} />
        </Link>
      </div>
      {/* Header */}
      <div className="p-6 border-b mb-6">
        <h1 className="font-semibold text-4xl leading-relaxed">
          Start a new chat
        </h1>
        <div className="flex gap-3">
          <h1 className="font-semibold text-4xl">With</h1>
          <img src="/gptlogo.png" alt="gptlogo" width={40} className="" />
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-4xl leading-loose font-bold bg-gradient-to-l from-[#00F5B5] to-[#051320] bg-clip-text text-transparent">
            Chat bot AI
          </h1>

          <Link to={"/chats"}>
            <button className="font-semibold gap-1 text-white flex items-center h-14 justify-center w-40 bg-green-400 py-2 rounded-full">
              <img src="/plus.png" alt="plus" width={24} />
              <p>New Topic</p>
            </button>
          </Link>
        </div>
      </div>

      {/* History */}

      <div>
        {/* Search Box */}
        <div className="flex items-center justify-between m-6">
          <h1 className="text-2xl font-bold text-black">History</h1>

          <div className="flex items-center border border-gray-300 rounded-full py-1 shadow-sm px-6">
            <input
              type="text"
              placeholder="Search ..."
              className="focus:outline-none bg-transparent text-gray-700 placeholder-gray-500 w-full h-12"
            />
            <img src="/search.png" alt="search" width={24} />
          </div>
        </div>
        {/* Chats Archived Images Btn */}
        <div className="flex gap-5 px-6 overflow-x-auto scrollbar-hide">
          <button className="font-semibold gap-2 text-white flex items-center h-14 justify-center min-w-36 bg-gray-900 py-6 rounded-full">
            <img src="/chats.png" alt="plus" width={24} />
            <p>Chats</p>
          </button>

          <button className="font-semibold gap-2 text-gray-900 flex items-center h-14 justify-center min-w-36 bg-white border py-6 rounded-full">
            <img src="/archived.png" alt="plus" width={24} />
            <p>Archived</p>
          </button>

          <button className="font-semibold gap-2 text-gray-900 flex items-center h-14 justify-center min-w-36 bg-white border py-6 rounded-full">
            <img src="/images.png" alt="plus" width={24} />
            <p>Images</p>
          </button>
        </div>
      </div>

      {/* Archived Card */}
      <div className="flex flex-wrap mx-4 justify-between mt-6">
        {data.map((item) => (
          <ArchivedBox
            key={item.id}
            title={item.title}
            content={item.content}
            createdAt={item.createdAt}
          />
        ))}
      </div>
    </div>
  );
}
