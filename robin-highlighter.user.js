// ==UserScript==
// @name         Robin Highlighter
// @namespace    http://cstevens.biz
// @version      0.1.2
// @description  Highlights your username in Robin chats!
// @author       Chr12t0pher
// @include      https://www.reddit.com/robin*
// @grant        none
// ==/UserScript==


'use strict';

var vips = []

var username = $("span.user").find("a").first().text().toLowerCase();
$("#robinChatMessageList").bind("DOMNodeInserted", function() {

    var x = $("#robinChatMessageList .robin-message").last();
    var message = x.find(".robin-message--message");
<<<<<<< Updated upstream
    if (message.text().toLowerCase().search(username) != -1) {
=======
    var lastUser = x.find(".robin-message--from.robin--username");

    // highlight our username
    if (message.text().toLowerCase() == username) {
>>>>>>> Stashed changes
        message.css("background-color", "yellow");
    }

    // Highlight saved users.
    for(var i in vips) {
      if (lastUser.text().toLowerCase() == vips[i]) {
        message.css("background-color", "#b3ffb3")
      }
    }
});

var inputBox = $(document).find(".c-form-control.text-counter-input");
// on input = whenever user types in or makes some change.
inputBox.on("input", function() {
    // Looking for command
    var command = ".vip ";
    var cmdExec = "!";

    // Get the value from the inputBox
    var inVal = $( this ).val();

    // If command is found
    if (inVal.substring(0, 5) == command && inVal.slice(-1) == cmdExec) {
        // get username
        var vip = inVal.substring(5, inVal.length - 1);
        vips.push(vip.toLowerCase());
        console.log("added to vips: " + vip);

        // clear the command
        $( this ).val("");
    }
});
