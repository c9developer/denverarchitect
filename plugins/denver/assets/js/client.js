var socket = io.connect();

$(document).ready(function() {
    $("#chat_input").focus();
});

socket.on("connect", function() {
    $("#chat_input").removeAttr("disabled");
});

socket.on("notice", function(msg) {
    // Notices (user join, user leave...)
});

socket.on("chat", function(msg) {
    var outStr = '<div class="chat_msg"><span class="username">' + msg.id + 
        ':</span>\t\t' + msg.msg + '</div>'
    $("#chat_output_container").append(outStr);
});

function processInput(ev, el) {
    if (ev.keyCode === 13) {
        socket.emit("chat", el.value);
        el.value = "";
    }
}

function earthquake() {
    $(".chat_msg").removeClass("wave").addClass("earthquake");
}

function wave() {
    $(".chat_msg").removeClass("earthquake").addClass("wave");
}

// To send a message, socket.emit("chat", chat_input.value);