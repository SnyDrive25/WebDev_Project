import { useState, useEffect } from 'react';
import axios from 'axios';

function Messages() {

    // const messages = [
    //     { "id": 1, "name": "Alexandre" },
    //     { "id": 2, "name": "Lucas" },
    //     { "id": 3, "name": "Thomas" },
    //     { "id": 4, "name": "Louis" },
    //     { "id": 5, "name": "Sunil" },
    // ];

    const [messages, setMessages] = useState([]);

    const getMessages = async () => {
        const res = await axios.get("https://sunilgoulamhous.esilv.olfsoftware.fr/td9/server/messages.php");
        setMessages(res.data);
    };

    useEffect(() => {
        getMessages();
    }, []);

    console.log(messages);

    const every_messages = [];

    for (let message of messages) {
        every_messages.push(
            <div className="msg-title" onClick={""}>
                <p>{message.email_users2}</p>
                <span>{message.content}</span>
            </div>
        );
    }

    return (
        <div className="messages">
            <input className="sendMessage" placeholder="Send message to... (enter Pseudo)"></input>
            {every_messages}
        </div >
    );
}

export default Messages;