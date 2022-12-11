import { useState, useEffect } from 'react';
import $ from 'jquery';
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

    const [pmessages, setPmessages] = useState([]);
    const [user, setUser] = useState();

    const getMessages = async () => {
        $.ajax({
            url: "https://sunilgoulamhous.esilv.olfsoftware.fr/td9/server/messages.php",
            method: "POST",
            data: { "myid": localStorage.getItem("id_user") },
            success: function (msg) {
                setMessages(msg);
            }
        });
    };

    const getPmessages = async () => {

        var people = document.getElementById("id_user_n2").textContent;
        console.log(people);
        $.ajax({
            url: "https://sunilgoulamhous.esilv.olfsoftware.fr/td9/server/private_messages.php",
            method: "POST",
            data: { "myid": localStorage.getItem("id_user"), "peopleid": people },
            success: async function () {
                const res = await axios.get("https://sunilgoulamhous.esilv.olfsoftware.fr/td9/server/private_messages.php");
                setPmessages(res.data);
                setUser(res.data[0].id_users2);
            }
        });
    };

    useEffect(() => {
        getMessages();
    }, []);

    useEffect(() => {
        getPmessages();
    }, []);

    const every_messages = [];

    const every_pmessages = [];

    for (let message of messages) {
        every_messages.push(
            <div className="msg-title" onClick={() => openMessage(message.id_users2)}>
                <p>{message.id_users2}</p>
                <p className='bgg'>
                    <span className='left'>{message.content}</span>
                    <code className='right'>{message.date_m}</code>
                </p>
            </div>
        );
    }

    for (let pmessage of pmessages) {
        every_pmessages.push(
            <div className="bubble">
                <div className="pp">
                    <span>{pmessage.username}</span>
                </div>
                <div className="msg">
                    <span>{pmessage.content}</span>
                </div>
                <div className="date">
                    <code>{pmessage.date_m}</code>
                </div>
            </div>
        );
    }

    function openMessage(id) {
        document.getElementById("msgg").style.display = "block";
    }

    function closeMessage() {
        document.getElementById("msgg").style.display = "none";
    }

    function sendMessage() {

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

    var msg = document.getElementById("msg");
    if (msg) {
        msg.addEventListener("keydown", function (e) {
            if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
                sendit();
                document.getElementById("msg").value = "";
            }
        });
    }

    function send() {
        var pseudo = document.getElementById("pseudo").textContent;
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

    function sendit() {
        var message = document.getElementById("message");
        if (message.length > 399) {
            alert("Character limit exceeded : You are not authorized to insert more than 400 words in your message.");
            return false;
        } else if (message.length === 0) {
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
            var email1 = "one@piece.com";
            var email2 = "redsylop@gmail.com";
            console.log(message, email1, email2, date);
            $.ajax({
                url: "https://sunilgoulamhous.esilv.olfsoftware.fr/td9/server/add_message.php",
                method: "POST",
                data: { "content": message, "email1": email1, "email2": email2, "date_m": date },
                success: function () {
                    window.location.reload(true);
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
            <div id='msgg'>
                <button className="close" onClick={closeMessage}>X</button>
                <div className="private">
                    <div className="private-title">
                        <a href="/Messages">↩</a>
                        <a href="/Profile" id="id_user_n2">{user}</a>
                    </div>
                    {every_pmessages}
                    <input id="msg" type="text" className="sendMessage large" placeholder="Type a message"></input>
                </div>
                {(localStorage.getItem("user") === "false" || localStorage.getItem("user") === null) &&
                    <p className='noaccess'>
                        You must be logged in to access this page !
                        <button className='big-btn'><a href="./Login">Go to login page</a></button>
                    </p>
                }
            </div>
        </div >
    );
}

export default Messages;