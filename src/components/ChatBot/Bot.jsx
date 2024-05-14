import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import botimg from './bot2.webp';
import "./bot_style.css"

function Bot() {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <div className="App">
                <div className="bot-icon" onClick={() => { setVisible(!visible) }}>
                    <img src={botimg} alt="" width='85px' />
                </div>
                {
                    visible ?
                        <div className="bot-model fadeInOut">
                            <Chatbot
                                config={config}
                                messageParser={MessageParser}
                                actionProvider={ActionProvider}

                            />
                        </div>
                        :
                        <></>
                }

            </div>
        </>
    );

}

export default Bot;