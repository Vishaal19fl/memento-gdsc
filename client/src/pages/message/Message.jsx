import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Message.scss";

const Message = () => {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };

  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">Messages</Link> > John Doe >
        </span>
        {isLoading ? (
          "loading"
        ) : error ? (
          "error"
        ) : (
          <div className="messages">
            {data.map((m) => (
              <div className={m.userId === currentUser._id ? "owner item" : "item"} key={m._id}>
                <img
                  src="https://images-platform.99static.com//vTlhgWBq9V4kbmSmKzNNCan2JO8=/81x88:583x590/fit-in/500x500/99designs-contests-attachments/143/143602/attachment_143602893"
                  alt=""
                />
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        )}
        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea type="text" placeholder="write a message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Message;


// import React, { useState, useQuery, useEffect, useQueryClient } from "react";
// import { Link, useParams } from "react-router-dom";
// import newRequest from "../../utils/newRequest";
// import "./Message.scss";
// import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// const Message = () => {
//   const { id } = useParams();
//   const currentUser = JSON.parse(localStorage.getItem("currentUser"));

//   // State for Gemini chat
//   const [chat, setChat] = useState(null);
//   const [userInput, setUserInput] = useState("");
//   const [response, setResponse] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

  

  

//   // Initialize Gemini chat on component mount
//   useEffect(() => {
//     const initChat = async () => {
//       const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
//       const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//       const generationConfig = {
//         temperature: 0.9,
//         topK: 1,
//         topP: 1,
//         maxOutputTokens: 2048,
//       };

//       const safetySettings = [
//         // ... (safety settings from your original code)
//       ];

//       const chat = model.startChat({
//         generationConfig,
//         safetySettings,
//         history: [
//           { role: "user", parts: [{ text: "hello" }] },
//           { role: "model", parts: [{ text: "Hi there! How can I help you today?" }] },
//         ],
//       });

//       setChat(chat);
//     };

//     initChat();
//   }, []);

//   // Handle user input and send messages to Gemini
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const result = await chat.sendMessage(userInput);
//       const responseText = result.response.text();
//       setResponse(responseText);
//     } catch (err) {
//       console.error("Error sending message to Gemini:", err);
//     } finally {
//       setIsLoading(false);
//       setUserInput("");
//     }
//   };

//   // ... (rest of your Message component code)

//   return (
//     <div className="message">
//       <div className="container">
//         <span className="breadcrumbs">
//           <Link to="/messages">Messages</Link> > John Doe >
//         </span>
        
//           <div className="messages">
//             {data.map((m) => (
//               <div className={m.userId === currentUser._id ? "owner item" : "item"} key={m._id}>
//                 <img
//                   src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                   alt=""
//                 />
//                 <p>{m.desc}</p>
//               </div>
//             ))}
//           </div>
//         )}
//         <hr />
        
//       </div>

//       <form className="write" onSubmit={handleSubmit}>
//         <textarea type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Ask a question or write a message" />
//         <button type="submit">{isLoading ? "Sending..." : "Send"}</button>
//       </form>

//       {response && (
//         <div className="item">
//           <p>{response}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Message;
