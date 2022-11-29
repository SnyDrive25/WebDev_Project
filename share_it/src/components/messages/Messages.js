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
        const res = await axios.get("http://localhost/shareit/messages.php");
        setMessages(res.data);
    };

    useEffect(() => {
        getMessages();
    }, []);

    console.log(messages);

    const every_messages = [];

    for (let message of messages) {
        every_messages.push(
            <div className="msg-title">
                <p>{message.id_user2}</p>
                <span>{message.content}</span>
            </div>
        );
    }

    return (
        <div className="messages">
            {every_messages}
        </div >
    );
}

export default Messages;