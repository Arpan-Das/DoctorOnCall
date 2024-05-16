// in MessageParser.js
import React from 'react';
import { useTrackAppointmentMutation } from '../../redux/api/appointmentApi';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {

     console.log(message)
     console.log(children)
    if (message.includes('hello')) {
      actions.handleHello();
    } else if(message.includes('help')){
        actions.handleHelp();
    }

    if(children.props.state.checker == 'appointment'){
        actions.handleSelectDoc();
    }

    if(children.props.state.checker == 'track'){
        actions.handleTrackStatus(message);
    }

    if(children.props.state.checker == 'location'){
        actions.handleSelectLoc(message);
    }

    if(children.props.state.checker == 'select_loc'){
        actions.handelDisplayLoc(message);
    }

  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;