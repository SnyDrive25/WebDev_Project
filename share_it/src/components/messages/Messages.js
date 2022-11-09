
function Messages() {

    const messages = [
        { "id": 1, "name": "Alexandre" },
        { "id": 2, "name": "Lucas" },
        { "id": 3, "name": "Thomas" },
        { "id": 4, "name": "Louis" },
        { "id": 5, "name": "Sunil" },
    ];
    const every_messages = [];

    for (let message of messages) {
        every_messages.push(
            <div class="msg-title">
                <p>{message.name}</p>
            </div>
        );
    }

    return (
        <div class="messages">
            {every_messages}
        </div >
    );
}

export default Messages;