//TODO swap these when done testing let storedTimeTEST = new Date();
export let storedTimeTEST = getDateTime("2024", "Oct", "29", "12:02", "AM");

export let locations = [
    {
        abbrev: "PO",
        fullName: "Pool Deck",
        location: "12 mid",
        note: "test1"
    },
    {
        abbrev: "ST",
        fullName: "Stardust Theater",
        location: "6,7 fwd",
        note: "test 2"
    },
    {
        abbrev: "SP",
        fullName: "Spinnaker Lounge",
        location: "13 fwd",
        note: ""
    },
    {
        abbrev: "AT",
        fullName: "Atrium",
        location: "7,8 mid",
        note: ""
    },
    {
        abbrev: "MA",
        fullName: "Magnums",
        location: "6 mid",
        note: ""
    }
];

export let year = 2024;

export let schedule = [
"\
PO, Oct, 28, 6:00, PM, Oct, 28, 6:45, PM, xtest11 \n\
ST, Oct, 28, 6:10, PM, Oct, 28, 6:45, PM, xtest13 NoGenre \n\
SP, Oct, 28, 6:30, PM, Oct, 28, 6:55, PM, xtest12 \n\
AT, Oct, 28, 7:10, PM, Oct, 28, 7:45, PM, xtest24 \n\
MA, Oct, 28, 7:00, PM, Oct, 28, 7:45, PM, xtest25 \n\
PO, Oct, 29, 12:00, AM, Oct, 29, 12:30, AM, xtest66 \
"
,

"PO, Oct, 29, 5:00, PM, Oct, 29, 6:45, PM, xtest11"
,

"PO, Oct, 30, 5:00, PM, Oct, 30, 6:45, PM, xtest11"
,

"PO, Oct, 31, 5:00, PM, Oct, 31, 6:45, PM, xtest11"
];

export let bandInfo = [
    ["xtest11", "genre1", "This band is from wherever.", ["https://www.metal-archives.com/bands/emperor/30"]],
    ["xtest12", "genre2"],
    ["xtest24", "genre three"],
    ["xtest13 NoGenre"],
    ["xtest7", "genre"],
    ["xtestNoGenre"],
    ["After the Burial", "prog"],
    ["At the Gates", "death"],
    ["Bleeding Through", "core"],
    ["Chimaira", "Groove core"],
    ["Corrosion of Conformity", "Sludge Southern"],
    ["Currents", "core"],
    ["Exodus", "Thrash"],
    ["Eyehategod", "doom"],
    ["Frozen Soul", "death"],
    ["Napalm Death", "punk death"],
    ["Poison the Well", "core"],
    ["Soulfly", "nu thrash death"],
    ["Unearth", "core"],
    ["UnityTX", "nu"]
];

export let storedVersion = "_hbb_v6";
export let storedDelayKey = "storedDelay" + year + storedVersion;
export let storedDayKey = "storedDay" + year + storedVersion;
export let storedScrollToKey = "storedStoredScrollToKey" + year + storedVersion;
export let storedGoingKey = "storedGoingKey" + year + storedVersion;
export let storedNoteKey = "storedNoteKey" + year + storedVersion;
export let storedAppendTextKey = "storedAppendTextKey" + year + storedVersion;

export let goingUndecided = "TBD";
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
    return event.id + storedGoingKey;
}