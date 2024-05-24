// in ActionProvider.jsx
import React , {useEffect, useState} from 'react';
import { useTrackAppointmentMutation } from '../../redux/api/appointmentApi';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    updateState(botMessage);
  };

  const handleHelp = () => {
    const botMessage = createChatBotMessage('Please tell me.');

    updateState(botMessage);
  };

  // handel doc type
  const handleDocType = () => {
    const botMessage = createChatBotMessage('Select Category: ', {
        widget: "selectDoc"
    });
    updateState(botMessage);
  };

  // appointment
  const handleSelectDoc = (item) => {
    console.log("Doc Type:",item)
    const botMessage = createChatBotMessage('Select Doctor: ', {
        widget: "Doctors"
    });
    updateState(botMessage, "docType", `${item}`);
  };

  const handleSelectTime = (docId) => {
    console.log("id",docId)
    const botMessage = createChatBotMessage('Select Time :', {
      widget: "selectTime"
    });
    const item = setState.item
    updateState(botMessage, 'track', setState.item,`${docId}`);
  }

  // const handleSelectDoc = (item) => {
  //   console.log("lsadfjl:", item);
  //   const botMessage = createChatBotMessage(`Select Doc:${item.firstName}`);
  //   updateState(botMessage);
  // }

  // track appointment
  const handleTrack = () => {
    const botMessage = createChatBotMessage('Enter Track ID:');
    updateState(botMessage, 'track');    
  };

  
  const [trackAppointment, { data, isSuccess, isLoading, isError, error }] = useTrackAppointmentMutation();
  const [message, setMessage] = useState('');

  const handleTrackStatus = (message) => {
    console.log(children)
    console.log(message)

    if (message.length > 5) {
        trackAppointment({ id: message })
    }
    console.log(data)
    setMessage(message)
  }

 

  useEffect(() => {
    if (isSuccess && !isError && data?.id) {
        console.log('success', data)
        const botMessage = createChatBotMessage(`ID : ${message}, Status : ${data?.status}, Doctor : Dr.${data?.firstName} ${data?.lastName}, Schedule Data: ${data?.scheduleTime} ${data?.scheduleDate}  `)
        updateState(botMessage);
    }
    if (isError) {
    }
    if (isSuccess && data?.id === undefined) {
    }
}, [isSuccess, isError, error, data, message]);

 //   ARP202404112002



//  near by location
 const handleNearByLoc = () => {
    const botMessage = createChatBotMessage('Kindly Select a Location:', {
        widget: "Location"
    })
    updateState(botMessage, 'location');
 } 

 const handleSelectLoc = (loc) => {
    const botMessage = createChatBotMessage(`Near By ${loc}:`)
    updateState(botMessage,'select_loc', loc);
 }

 const handelDisplayLoc = () => {
    const botMessage = createChatBotMessage(`Near By:`,{
        widget: "selectLoc"
    })
    updateState(botMessage);
 }

 

  const updateState = (botMessage, checker = '', item = '', docId='') => {
    setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
        checker,
        item,
        docId
      }));
  }

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleHelp,
            // handleSelectType,
            handleTrack,
            handleTrackStatus,
            handleNearByLoc,
            handleSelectLoc,
            handelDisplayLoc,
            handleSelectDoc,
            handleDocType,
            handleSelectTime            
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;