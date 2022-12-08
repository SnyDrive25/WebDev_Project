import { useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';

function PrivateMessage() {

    const [pmessages, setPmessages] = useState([]);
    const [user, setUser] = useState();

    const getPmessages = async () => {
        const res = await axios.get("https://sunilgoulamhous.esilv.olfsoftware.fr/td9/server/private_messages.php");
        setPmessages(res.data);
        setUser(res.data[0].email_users2);
    };

    useEffect(() => {
        getPmessages();
    }, []);

    const every_pmessages = [];

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

    var msg = document.getElementById("msg");
    if (msg) {
        msg.addEventListener("keydown", function (e) {
            if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
                send(e);
                document.getElementById("msg").value = "";
            }
        });
    }

    function send(e) {
        var message = e.target.value.toString();
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
        <div className="messages noscroll">
            <div className="private">
                <div className="private-title">
                    <a href="/Messages">↩</a>
                    <a href="/Profile">{user}</a>
                </div>
                {every_pmessages}
                <input id="msg" type="text" className="sendMessage large" placeholder="Type a message"></input>
            </div>
        </div>
    );
}

export default PrivateMessage;