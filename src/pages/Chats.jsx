import { Link } from "react-router-dom";
import { useState } from "react";

export default function Chats() {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const apiKey = "API_KEY_NOT_FOUND :)))";

  const sendMessage = async () => {
    if (message.trim()) {
      const userMessage = { text: message, sender: "user" };
      setChatMessages((prevMessages) => [...prevMessages, userMessage]);

      const botResponse = await fetchTranslation(message);

      setChatMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: "bot" },
      ]);

      setMessage("");
      setShowSuggestions(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const fetchTranslation = async (text) => {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    const body = {
      q: text,
      target: "en",
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Translation API request failed");
      }

      const data = await response.json();
      return data.data.translations[0].translatedText;
    } catch (error) {
      console.error("Error fetching translation:", error);
      return "Sorry, I couldn't translate that.";
    }
  };

  return (
    <div className="pb-[116px]">
      <header className="py-4 px-6 border-b flex items-center justify-between bg-white">
        <div className="flex items-center">
          <Link to="/home">
            <img
              src="/threeLine.png"
              width={40}
              alt="Menu Icon"
              className="cursor-pointer"
            />
          </Link>
          <img
            src="/gptlogo.png"
            className="ml-3 mr-4"
            width={40}
            alt="GPT Logo"
          />
          <h3 className="font-semibold text-2xl">GPT 4o</h3>
        </div>
        <div>
          <button className="hover:bg-gray-100 rounded-full p-2">
            <img src="/share.png" alt="Share Icon" width={40} />
          </button>
        </div>
      </header>

      {/* Suggestions */}
      {showSuggestions && (
        <div className="px-4 py-6 mt-6">
          <h4 className="text-center font-semibold mb-8">
            How can I help you my friend? 😊️
          </h4>
          <div className="flex border justify-between mb-4 rounded-[36px] p-6">
            <div>
              <p className="font-semibold mb-3 text-gray-900">
                Brainstorm names
              </p>
              <p className="text-sm text-gray-500">
                for my fantasy football team with a frog theme
              </p>
            </div>
            <img src="/arrow.png" className="w-6 h-6" alt="" />
          </div>

          <div className="flex border justify-between mb-4 rounded-[36px] p-6">
            <div>
              <p className="font-semibold mb-3 text-gray-900">
                Suggest some codenames
              </p>
              <p className="text-sm text-gray-500">
                for a project introducing flexible work arrangements
              </p>
            </div>
            <img src="/arrow.png" className="w-6 h-6" alt="" />
          </div>

          <div className="flex border justify-between mb-4 rounded-[36px] p-6">
            <div>
              <p className="font-semibold mb-3 text-gray-900">
                Write a SQL query
              </p>
              <p className="text-sm text-gray-500">
                that adds a "status" column to an "orders" table
              </p>
            </div>
            <img src="/arrow.png" className="w-6 h-6" alt="" />
          </div>

          <div className="flex border justify-between mb-4 rounded-[36px] p-6">
            <div>
              <p className="font-semibold mb-3 text-gray-900">
                Explain why popcorn pops
              </p>
              <p className="text-sm text-gray-500">
                to a kid who loves watching it in the microwave
              </p>
            </div>
            <img src="/arrow.png" className="w-6 h-6" alt="" />
          </div>
        </div>
      )}

      {/* Chat Messages */}
      <div className="">
        {chatMessages.map((msg, index) => (
          <div key={index} className="p-6 border-b mb-4">
            <div className="flex gap-3 mb-4">
              <img
                src={msg.sender === "user" ? "/avatar.png" : "/gptlogo.png"}
                className="w-6 h-6"
                alt="Avatar"
              />
              <p className="font-semibold text-[#051320]">
                {msg.sender === "user" ? "You" : "Chat Bot Ai"}
              </p>
            </div>
            <p
              className={
                msg.sender === "user"
                  ? "text-emerald-400 mb-4"
                  : "text-black mb-4"
              }
            >
              {msg.text}
            </p>
            {msg.sender == "user" && (
              <div className="flex gap-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <img src="/edit.png" className="w-4 h-4" alt="Edit Icon" />
                  <p>Edit</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <img src="/copy.png" className="w-4 h-4" alt="Copy Icon" />
                  <p>Copy</p>
                </div>
              </div>
            )}

            {msg.sender == "bot" && (
              <div className="flex gap-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <img
                    src="/download.png"
                    className="w-4 h-4"
                    alt="Edit Icon"
                  />
                  <p>Download</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <img src="/share1.png" className="w-4 h-4" alt="Copy Icon" />
                  <p>Share</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <img
                    src="/regenerate.png"
                    className="w-4 h-4"
                    alt="Copy Icon"
                  />
                  <p>Regenerate</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Chat Input Section */}
      <div className="p-6 flex gap-3 items-center bg-white w-full fixed bottom-0 left-0 shadow-md">
        <input
          type="text"
          placeholder="Ask me anything..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          className="border py-4 px-6 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        <img
          onClick={sendMessage}
          src="/sendBtn.png"
          alt="Send"
          className="w-14 h-14"
        />
      </div>
    </div>
  );
}
