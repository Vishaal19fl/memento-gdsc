
import React, { useState } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import './ChatBot.scss';

const MODEL_NAME = 'gemini-pro';
const API_KEY = 'AIzaSyBDbLVryHdOG0TeradT0kMCFIkQpKceESc'; 

function GeminiChat() {
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const sendMessage = async () => {
    if (userInput.trim() === '') return;

    setIsLoading(true);
    setIsBotTyping(true);

    const chat = model.startChat({
      generationConfig: {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
      },
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ],
      history: [
        {
          role: "user",
          parts: [{ text: "i have an e-commerce website which sells Indian traditional products like pottery and sculptures. You are our customer service chatbot. hear are the detail :Products Available:PotsVasesStone SculpturesMetal SculpturesClay SculpturesWood SculpturesBead JewelryGlass JewelryDressesPaintingsCustomization:Users can customize their products.There's an extra charge for customization.Price Range:Prices range from $20 to $300.Additional charges apply for customization.Subscription Service:We offer a subscription service for a fixed price.Subscribers receive a curated list of products from our featured artists every month.Subscribers can choose any product from the list, which will be shipped soon.Order Tracking:Users can track their orders through their profile.Guide users to the orders page in their profile for tracking.Materials Used:Jewelry: Glass, BeadsSculptures: Metal, Clay, Stone, WoodPots and Vases: StoneShipping:We ship internationally.Payment:Payment is secure and done through Google Pay."}],
        },
        {
          role: "model",
          parts: [{ text: "*User:* Hello! I'm interested in purchasing a sculpture. Do you have any available?\n\n*Chatbot:* Yes, we have a wide range of sculptures available, including metal, clay, stone, and wood sculptures. You can browse our collection on our website.\n\n*User:* I'm looking for a specific type of pottery. Do you have any flower pots?\n\n*Chatbot:* Yes, we offer a variety of stone flower pots. You can find them in the \"Pots\" section of our website.\n\n*User:* I love the glass jewelry! How much does it cost?\n\n*Chatbot:* Our glass jewelry ranges from $20 to $80.\n\n*User:* I noticed you have a subscription service. How does it work?\n\n*Chatbot:* For a fixed monthly fee, subscribers receive a curated list of products from our featured artists. You can choose any product from the list to be shipped to you.\n\n*User:* I placed an order yesterday. How can I track it?\n\n*Chatbot:* You can track your order by logging into your profile on our website. Once you're logged in, click on \"Orders\" to view your order status.\n\n*User:* I'm interested in customizing a clay sculpture. Is that possible?\n\n*Chatbot:* Yes, we offer customization services. Please contact us through our website or email us at [email protected] with your customization request.\n\n*User:* Do you ship internationally?\n\n*Chatbot:* Yes, we ship internationally. Shipping costs vary depending on the destination country.\n\n*User:* I'm ready to make a payment. What payment options do you offer?\n\n*Chatbot:* We accept payments through secure Google Pay."}],
        },
      ],
    });

    const result = await chat.sendMessage(userInput);
    const response = result.response;

    setChatHistory([...chatHistory, { role: 'user', message: userInput }, { role: 'model', message: response.text() }]);
    setUserInput('');
    setIsLoading(false);
    setIsBotTyping(false);
  };

  return (
    <div className="gemini-chat-page">
      <div className="chat-history">
        {chatHistory.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.role === 'model' && (
              <>
                {isBotTyping && (
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
                <img src="https://images-platform.99static.com//vTlhgWBq9V4kbmSmKzNNCan2JO8=/81x88:583x590/fit-in/500x500/99designs-contests-attachments/143/143602/attachment_143602893" alt="Bot" className="avatar" /> 
              </>
            )}
            <p>{msg.message}</p>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={sendMessage} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
}

export default GeminiChat;
