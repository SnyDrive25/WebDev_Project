import { useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';

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

    const every_messages = [];

    for (let message of messages) {
        every_messages.push(
            <div className="msg-title" onClick={openMessage(message.id_users2)}>
                <p>{message.id_users2}</p>
                <span>{message.content}</span>
            </div>
        );
    }

    function openMessage(id) {

    }

    var pseudo = document.getElementById("pseudo");
    if (pseudo) {
        pseudo.addEventListener("keydown", function (e) {
            if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
                send();
                document.getElementById("pseudo").value = "";
            }
        });
    }

    function send() {
        var pseudo = document.getElementById("pseudo").value;
        if (pseudo.length > 50) {
            alert("Character limit exceeded : There are no pseudo with more than 50 letters.");
            return false;
        } else if (pseudo.length === 0) {
            return false;
        }
        else {
            var pad = function (num) { return ('00' + num).slice(-2) };
            var date;
            date = new Date();
            date = date.getUTCFullYear() + '-' +
                pad(date.getUTCMonth() + 1) + '-' +
                pad(date.getUTCDate()) + " " +
                pad(date.getUTCHours()) + ":" +
                pad(date.getUTCMinutes()) + ":" +
                pad(date.getUTCSeconds());
            var my_email = localStorage.getItem("email");
            $.ajax({
                url: "https://sunilgoulamhous.esilv.olfsoftware.fr/td9/server/add_abonnement.php",
                method: "POST",
                data: { "email": my_email, "pseudo": pseudo, "date_m": date },
                success: function () {
                    console.log(my_email, pseudo, date);
                    //window.location.reload(true);
                }
            });
        }
    }

    return (
        <div className="messages">
            <input className="sendMessage" placeholder="Send message to... (enter Pseudo)" id="pseudo"></input>
            {every_messages}
            {(localStorage.getItem("user") === "false" || localStorage.getItem("user") === null) &&
                <p className='noaccess'>
                    You must be logged in to access this page !
                    <button className='big-btn'><a href="./Login">Go to login page</a></button>
                </p>
            }
        </div >
    );
}

export default Messages;