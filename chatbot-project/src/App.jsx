import { useState } from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css';


    // this is the central app component that will render the chatInput component and others.. hmmm
    function App () {
      const [chatMessages, setChatMessages] = useState([{
          id: 'id1',
          message: "Hello chatbot!",
          sender: "user"
        },
        {
          id: 'id2',
          message: "Hello! How can i help you?",
          sender: "robot"
        },
        {
          id: 'id3',
          message: "Can you get me todays date?",
          sender: "user"
        },
        {
          id: 'id4',
          message: "Today is November 19",
          sender: "robot"
        }
      ]);
      //const [chatMessages, setChatMessages] = array;
      //const chatMessages = array[0];
      //const setChatMessages = array[1];
      return (
        <div className="app-container">
        <ChatMessages 
          chatMessages={chatMessages}
        />
        <ChatInput 
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
        </div>
      )
      
    }

export default App
