<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
    <title>Alpha</title>

    <script type="text/javascript" src="schedule.js?version=3"></script>
    <script type="text/javascript" src="bandinfo.js?version=3"></script>
    <script type="text/javascript">


    function drawAlpha()
    {
        var topDiv = document.getElementById('topDiv');
        labelWidth = Math.floor(window.innerWidth / 4.2) + "px";
        let allEvents = [];
        for (let i = 0; i < eventsDay1.length; i++) {
            event = eventsDay1[i];
            theText = event.eventName + "\nDay1\n" +event.eventStartTime + "-" + event.eventEndTime; 
            allEvents.push(theText);
        }

        for (let i = 0; i < eventsDay2.length; i++) {
            event = eventsDay2[i];
            theText = event.eventName + "\nDay2\n" +event.eventStartTime + "-" + event.eventEndTime; 
            allEvents.push(theText);
        }

        for (let i = 0; i < eventsDay3.length; i++) {
            event = eventsDay3[i];
            theText = event.eventName + "\nDay3\n" +event.eventStartTime + "-" + event.eventEndTime; 
            allEvents.push(theText);
        }

        for (let i = 0; i < eventsDay4.length; i++) {
            event = eventsDay4[i];
            theText = event.eventName + "\nDay4\n" +event.eventStartTime + "-" + event.eventEndTime; 
            allEvents.push(theText);
        }

        for (let i = 0; i < eventsDay5.length; i++) {
            event = eventsDay5[i];
            theText = event.eventName + "\nDay5\n" +event.eventStartTime + "-" + event.eventEndTime; 
            allEvents.push(theText);
        }

        allEvents.sort();

        for (let i = 0; i < allEvents.length; i++) {
            event = allEvents[i];
            var label = document.createElement("textarea");
            label.style.backgroundColor='lightgrey';
            label.style.width=labelWidth;
            label.style.height="200px";
            label.style.fontSize="25px";
            label.innerHTML = event;
            topDiv.appendChild(label);
        }

    }

    </script>

</head>
<body onload="drawAlpha();">
    <style>
        body {
            margin: 0;
        }

        .buttonsss {
            border: none;
            padding: 15px 32px;
            text-align: center;
            color: black;
            text-decoration: none;
            display: inline-block;
            font-size: 60px;
            margin: 4px 2px;
            cursor: pointer;
            background-color: gold;
            border-radius: 12px;
            height: 200px;
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        }
    </style>

<div id="topDiv">
</div>

</body>

</html>
