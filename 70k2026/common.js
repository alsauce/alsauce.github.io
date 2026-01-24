
export let locations = [
    {
        abbrev: "PD",
        fullName: "Pool Deck",
        location: "11/12 mid",
        note: ""
    },
    {
        abbrev: "RT",
        fullName: "Royal Theater",
        location: "3/4 fwd",
        note: "3 is only fwd access"
    },
    {
        abbrev: "SB",
        fullName: "Studio B",
        location: "3 mid",
        note: "no fwd access"
    },
    {
        abbrev: "SL",
        fullName: "Star Lounge",
        location: "5 fwd",
        note: ""
    }
];


export let year = 2026;

export let schedule = [
"\
PD, Oct, 31,  5:15, PM, Oct, 31,  6:15, PM, test1 \n\
RT, Oct, 31, 11:00, PM, Nov,  1, 12:00, AM, test1 \
"
,
"\
PD, Nov,  1,  3:30, PM, Nov,  1,  4:30, PM, test1 \n\
SB, Nov,  1,  5:30, PM, Nov,  1,  6:30, PM, test1 \
"
,
"\
PD, Nov,  2,  9:00, AM, Nov,  2,  4:00, PM, test1 \n\
SL, Nov,  2, 10:00, PM, Nov,  2, 11:00, PM, test1 \
"
,
"\
PD, Nov,  3,  4:30, PM, Nov,  3,  5:30, PM, test1 \n\
SL, Nov,  3,  2:00, PM, Nov,  3,  3:00, PM, test1 \
"
];


export let bandInfo = [
];

export let storedVersion = "_70k2026_v1";
export let storedDelayKey = "storedDelay" + year + storedVersion;
export let storedDayKey = "storedDay" + year + storedVersion;
//export let storedScrollToKey = "storedStoredScrollToKey" + year + storedVersion;
export let storedGoingKey = "storedGoingKey" + year + storedVersion;
export let storedNoteKey = "storedNoteKey" + year + storedVersion;
export let storedAppendTextKey = "storedAppendTextKey" + year + storedVersion;

export let goingUndecided = "?";
export let goingMaybe = "Maybe";
export let goingGoing = "Going";
export let goingNotGoing = "No";

export function getDateTime(year, month, day, time, AMPM) {

    let dateString = day + " " + month + " " + year + " " + time + ":00" + " " + AMPM;

    let date = new Date(Date.parse(dateString));
    return date;
}

export function getEventFromCommas(eventWithDay) {
    let eventSplit = eventWithDay.split(",");
    Object.keys(eventSplit).forEach(k => eventSplit[k] = eventSplit[k].trim());
    let x = 0;
    let event = {
        location: eventSplit[x++],
        startMonth: eventSplit[x++],
        startDay: eventSplit[x++],
        startTime: eventSplit[x++],
        startAMPM: eventSplit[x++],
        endMonth: eventSplit[x++],
        endDay: eventSplit[x++],
        endTime: eventSplit[x++],
        endAMPM: eventSplit[x++],
        name: eventSplit[x++],
        day: eventSplit[x++],
        id: "",
        conflicts: "None."
    };
    event.id = getCommaStringFromEvent(event);
    return event;
}

export function getCommaStringFromEvent(event) {
    return event.location + "," + event.startMonth + "," + event.startDay + "," +
        event.startTime + "," + event.startAMPM + "," + event.endMonth + "," + event.endDay + "," +
        event.endTime + "," + event.endAMPM + "," + event.name + "," +  event.day;
}

export function getGoingKey(event) {
    return event.id + "," + storedGoingKey;
}