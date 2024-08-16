//Current time will be shown if it is newer than the storedTime.  Uncomment the old time when testing is done.
//export let storedTime = getDateTime("2000", "Oct", "29", "12:02", "AM");
//Set this to see current time on the schedule wherever for testing
export let storedTime = getDateTime("2024", "Oct", "30", "10:04", "PM");

export let locations = [
    {
        abbrev: "PO",
        fullName: "Pool Deck",
        location: "12 mid",
        note: "test1"
    },
    {
        abbrev: "ST",
        fullName: "Stardust",
        location: "6,7 fwd",
        note: "test 2"
    },
    {
        abbrev: "AT",
        fullName: "Atrium",
        location: "7,8 mid",
        note: ""
    },
    {
        abbrev: "SP",
        fullName: "Spinnaker",
        location: "13 fwd",
        note: ""
    },
    {
        abbrev: "SC",
        fullName: "Sports Court",
        location: "Deck 13 aft",
        note: ""
    }
];

export let year = 2024;

export let schedule = [
"\
PO, Oct, 28,  5:30, PM, Oct, 28,  6:00, PM, Toast/Photo \n\
PO, Oct, 28,  6:00, PM, Oct, 28,  7:00, PM, Exodus \n\
PO, Oct, 28,  8:30, PM, Oct, 28,  9:30, PM, Dethklok \n\
PO, Oct, 28, 11:00, PM, Oct, 29, 12:00, AM, Chimaira \n\
ST, Oct, 28,  7:15, PM, Oct, 28,  8:15, PM, Napalm Death \n\
ST, Oct, 28,  9:45, PM, Oct, 28, 10:45, PM, Soulfly \n\
ST, Oct, 29, 12:15, AM, Oct, 29,  1:15, AM, Poison the Well \n\
AT, Oct, 28,  3:00, PM, Oct, 28,  4:00, PM, Corrosion of Conformity \n\
AT, Oct, 28,  7:15, PM, Oct, 28,  8:15, PM, Bleeding Through \n\
AT, Oct, 28,  9:45, PM, Oct, 28, 10:45, PM, Frozen Soul \n\
AT, Oct, 29,  1:15, AM, Oct, 29,  2:15, AM, After the Burial \n\
SP, Oct, 29, 12:15, AM, Oct, 29,  1:15, AM, Comedy \n\
SC, Oct, 28,  7:15, PM, Oct, 28,  8:15, PM, Currents \n\
SC, Oct, 28,  9:45, PM, Oct, 28, 10:45, PM, Unearth \
"
,
"\
PO, Oct, 29,  4:30, PM, Oct, 29,  5:30, PM, Napalm Death \n\
PO, Oct, 29,  6:45, PM, Oct, 29,  7:45, PM, Bleeding Through \n\
PO, Oct, 29,  9:30, PM, Oct, 29, 10:45, PM, Lamb of God \n\
ST, Oct, 29, 11:30, AM, Oct, 29,  12:30, PM, Bingo w/ Riki/Leah \n\
ST, Oct, 29,  2:45, PM, Oct, 29,  3:45, PM, Drum-off w/ Art Cruz \n\
ST, Oct, 29,  5:15, PM, Oct, 29,  6:15, PM, Randy Blythe w/ Riki \n\
ST, Oct, 29,  7:45, PM, Oct, 29,  8:45, PM, Chimaira \n\
ST, Oct, 29, 11:00, PM, Oct, 30, 12:00, AM, Carcass \n\
AT, Oct, 29,  2:45, PM, Oct, 29,  3:45, PM, UnityTX \n\
AT, Oct, 29,  5:15, PM, Oct, 29,  6:15, PM, Corrosion of Conformity \n\
AT, Oct, 29,  7:15, PM, Oct, 29,  8:45, PM, Battle Jacket Showdown \n\
AT, Oct, 30, 12:00, AM, Oct, 30,  1:00, AM, Exodus \n\
SP, Oct, 29,  9:30, AM, Oct, 29, 10:30, AM, Coffee with Willie \n\
SP, Oct, 29,  1:30, PM, Oct, 29,  2:30, PM, Mark Morton w/ Riki \n\
SP, Oct, 29,  4:30, PM, Oct, 29,  5:30, PM, Trivia w/Jose \n\
SC, Oct, 29,  9:00, AM, Oct, 29, 10:00, AM, Mosh Pit Bootcamp \n\
SC, Oct, 29, 10:30, AM, Oct, 29, 11:30, AM, Yoga \n\
SC, Oct, 29,  5:15, PM, Oct, 29,  6:15, PM, Unearth \n\
SC, Oct, 29,  7:45, PM, Oct, 29,  8:45, PM, After the Burial \n\
SC, Oct, 29, 11:00, PM, Oct, 30, 12:00, AM, Eyehategod \
"
,
"\
PO, Oct, 30,  7:00, AM, Oct, 30,  4:30, PM, Puerta Plata\n\
PO, Oct, 30,  5:00, PM, Oct, 30,  6:00, PM, Soulfly\n\
PO, Oct, 30,  7:15, PM, Oct, 30,  8:15, PM, Unearth\n\
PO, Oct, 30, 10:00, PM, Oct, 30, 11:15, PM, Lamb of God\n\
ST, Oct, 30,  6:15, PM, Oct, 30,  7:15, PM, Exodus \n\
ST, Oct, 30,  8:45, PM, Oct, 30,  9:45, PM, Dethklok\n\
ST, Oct, 30, 11:30, PM, Oct, 31, 12:30, AM, Carcass\n\
AT, Oct, 30,  6:30, PM, Oct, 30,  7:30, PM, UnityTX\n\
AT, Oct, 30,  8:45, PM, Oct, 30,  9:45, PM, Eyehategod\n\
AT, Oct, 31, 12:45, AM, Oct, 31,  1:45, AM, Poison the Well\n\
SP, Oct, 30,  7:15, PM, Oct, 30,  8:15, PM, OFIT Galley w/ Riki\n\
SP, Oct, 30, 11:30, PM, Oct, 31, 12:30, AM, Comedy w/ Smith/Abrusci\n\
SC, Oct, 30,  6:15, PM, Oct, 30,  7:15, PM, Currents\n\
SC, Oct, 30,  8:45, PM, Oct, 30,  9:45, PM, Frozen Soul\n\
SC, Oct, 30, 11:30, PM, Oct, 31, 12:30, AM, Napalm Death\
"
,
"\
PO, Oct, 31, 10:00, AM, Oct, 31, 11:00, AM, Yoga\n\
PO, Oct, 31,  1:45, PM, Oct, 31,  2:45, PM, After the Burial\n\
PO, Oct, 31,  4:15, PM, Oct, 31,  5:15, PM, Corrosion of Conformity\n\
PO, Oct, 31,  6:45, PM, Oct, 31,  7:45, PM, Poison the Well\n\
PO, Oct, 31,  9:15, PM, Oct, 31, 10:15, PM, Carcass\n\
ST, Oct, 31, 12:45, PM, Oct, 31,  1:45, PM, Zetro's Podcast\n\
ST, Oct, 31,  5:30, PM, Oct, 31,  6:30, PM, Liquid Metal w/ Jose Mangin\n\
ST, Oct, 31,  8:00, PM, Oct, 31,  9:00, PM, Dethklok\n\
ST, Oct, 31, 10:30, PM, Oct, 31, 11:30, PM, Chimaira\n\
AT, Oct, 31,  2:30, PM, Oct, 31,  3:30, PM, Eyehategod\n\
AT, Oct, 31,  4:45, PM, Oct, 31,  5:45, PM, Currents\n\
AT, Oct, 31,  6:45, PM, Oct, 31,  7:45, PM, Costume Contest\n\
AT, Oct, 31,  8:45, PM, Oct, 31,  9:45, PM, Bleeding Through\n\
AT, Oct, 31, 10:30, PM, Oct, 31, 11:30, PM, Mark Morton Solo Band\n\
AT, Nov,  1, 12:30, AM, Nov,  1,  1:30, AM, DJ Art Cruz\n\
SC, Oct, 31,  9:00, AM, Oct, 31, 10:00, AM, Mosh Bootcamp\n\
SC, Oct, 31,  3:00, PM, Oct, 31,  4:00, PM, Battleshots Tournament\n\
SC, Oct, 31,  5:30, PM, Oct, 31,  6:30, PM, UnityTX\n\
SC, Oct, 31,  8:00, PM, Oct, 31,  9:00, PM, Frozen Soul\n\
SC, Oct, 31, 11:00, PM, Nov,  1,  1:30, AM, Karaoke at Bliss (not at SC)\
"
];


//I had this as test data at some point:
// export let bandInfo = [
// ["xtest11", "genre1", "This band is from wherever.", ["https://www.metal-archives.com/bands/emperor/30"]],

export let bandInfo = [
    ["After the Burial", "prog"],
    ["At the Gates", "death"],
    ["Bleeding Through", "core"],
    ["Chimaira", "Groove core"],
    ["Comedy", "Comedy"],
    ["Corrosion of Conformity", "Sludge Southern"],
    ["Currents", "core"],
    ["Exodus", "Thrash"],
    ["Eyehategod", "doom"],
    ["Frozen Soul", "death"],
    ["Napalm Death", "punk death"],
    ["Poison the Well", "core"],
    ["Soulfly", "nu thrash death"],
    ["Unearth", "core"],
    ["UnityTX", "nu"],
    ["Lamb of God", "core"],
    ["Dethklok", "death"],
    ["Mark Morton", "solo band"],
    ["Toast/Photo", ""],
    ["Yoga", ""],
    ["Battle Jacket Showdown", ""],
    ["Carcass", ""],
    ["Coffee with Willie", ""],
    ["Drum-off w/ Art Cruz", ""],
    ["Mark Morton w/ Riki", ""],
    ["Mosh Pit Bootcamp", ""],
    ["Randy Blythe w/ Riki", ""],
    ["Trivia w/Jose", ""],
    ["Comedy w/ Smith/Abrusci", ""],
    ["OFIT Galley w/ Riki", ""],
    ["Puerta Plata", ""],
    ["Battleshots Tournament", ""],
    ["Costume Contest", ""],
    ["DJ Art Cruz", ""],
    ["Karaoke at Bliss (not at SC)", ""],
    ["Liquid Metal w/ Jose Mangin", ""],
    ["Mosh Bootcamp", ""],
    ["Zetro's Podcast", ""],
    ["Bingo w/ Riki/Leah", ""],
    ["Mark Morton Solo Band", ""]
];

export let storedVersion = "_hbb_v6";
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