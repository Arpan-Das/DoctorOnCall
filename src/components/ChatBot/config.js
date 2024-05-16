import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from "./BotAvatar";
import StartMenu from './StartMenu';
import Doctors from './Doctors';
import useAuthCheck from '../../redux/hooks/useAuthCheck';
import Location from './Location';
import selectLoc from './selectLoc';



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
  initialMessages: [createChatBotMessage(`Hi! I'm Dr. Bot, How can I help you?`, {
    widget: "startMenu"
  })],
  widgets:[
    {
        widgetName: "startMenu",
        widgetFunc: (props) => <StartMenu { ... props} />,
    },
    {
        widgetName: "Doctors",
        widgetFunc: (props) => <Doctors { ... props} />
    },
    {
        widgetName: "Location",
        widgetFunc: (props) => <Location { ... props} />
    },
    {
        widgetName: "selectLoc",
        widgetFunc: (props) => <selectLoc { ... props} />
    }
  ]
};

export default config;