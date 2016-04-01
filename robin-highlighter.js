// ==UserScript==
// @name         Robin Highlighter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Highlights your username in Robin chats!
// @author       Chr12t0pher
// @include      https://www.reddit.com/robin*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    var username = $("span.user").find("a").text().toLowerCase();

    $("#robinChatMessageList").bind("DOMNodeInserted", function() {
        var x = $("#robinChatMessageList .robin-message").last();
        var message = x.find(".robin-message--message");
        if (message.text().toLowerCase() == username) {
            message.css("background-color", "yellow");
        }
    })
})