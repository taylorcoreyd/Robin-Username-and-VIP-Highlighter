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
    var lastUser = x.find(".robin-message--from.robin--username");

    // highlight our username
    if (message.text().toLowerCase().search(username) != -1) {
        message.css("background-color", "yellow");
    }

    // Highlight saved users.
    for(var i in vips) {
      if (lastUser.text().toLowerCase() == vips[i]) {
        message.css("background-color", "#b3ffb3");
      }
    }
});

var inputBox = $(document).find(".c-form-control.text-counter-input");
// on input = whenever user types in or makes some change.
inputBox.on("input", function() {
    // Looking for command
    var vipAdd = ".vip ";
    var vipRemove = ".vipr ";
    var vipClear = ".vipc";
    var cmdExec = "!";

    // Get the value from the inputBox
    var inVal = $( this ).val();

    // If vipAdd command is found
    if (inVal.substring(0, 5) == vipAdd && inVal.slice(-1) == cmdExec) {
        // get username
        var vip = inVal.substring(5, inVal.length - 1);
        vips.push(vip.toLowerCase());
        console.log("added to vips: " + vip);

        // clear the command
        $( this ).val("");
    }

    // If vipRemove command is found
    if (inVal.substring(0, 6) == vipRemove && inVal.slice(-1) == cmdExec) {
        // get username
        var vip = inVal.substring(6, inVal.length - 1);
        var i = vips.indexOf(vip);
        if (i != -1) {
          vips.splice(i, 1);
        }
        console.log("removed from vips: " + vip);

        // clear the command
        $( this ).val("");
    }

    // If vipClear command is found
    if (inVal == vipClear + cmdExec) {
      vips = [];
      console.log("cleared vips");
      $( this ).val("");
    }
});
