import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from "./BotAvatar";

const config = {
    botName: "Dr. Bot",
  //overwrite the existing style
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  //overwrite the existing style
  customStyles: {
    botMessageBox: {
      backgroundColor: "#008b8b",
    },
    chatButton: {
      backgroundColor: "#008b8b",
    },
  },
  initialMessages: [createChatBotMessage(`Hi! I'm Mr. Bot. How can I help you?`)],
};

export default config;