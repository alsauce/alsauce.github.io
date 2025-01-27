
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

export let year = 2025;

export let schedule = [
"\
PO, Jan, 30,  6:00, PM, Jan, 30,  6:15, PM, Test0 \n\
RT, Jan, 30,  6:00, PM, Jan, 30,  6:15, PM, Test1 \n\
SB, Jan, 30,  5:15, PM, Jan, 30,  6:00, PM, Test2 \n\
SL, Jan, 31,  5:15, AM, Jan, 31,  6:00, AM, Test3 \
"
,
"\
PO, Jan, 31, 10:00, AM, Jan, 31, 10:45, AM, Test0 \n\
RT, Feb,  1, 12:00, AM, Feb,  1, 12:45, AM, Test1 \n\
SB, Jan, 31, 11:15, PM, Feb,  1, 12:00, AM, Test2 \n\
SL, Feb,  1,  4:15, AM, Feb,  1,  5:00, AM, Test3 \
"
,
"\
PO, Feb,  1, 10:00, AM, Feb,  1, 10:45, AM, Test4 \n\
RT, Feb,  2, 12:00, AM, Feb,  2, 12:45, AM, Test5 \n\
SB, Feb,  1, 11:15, PM, Feb,  2, 12:00, AM, Test6 \n\
SL, Feb,  2,  4:15, AM, Feb,  2,  5:00, AM, Test7 \
"
,
"\
PO, Feb,  2, 10:00, AM, Feb,  2, 10:45, AM, Test4 \n\
RT, Feb,  3, 12:00, AM, Feb,  3, 12:45, AM, Test5 \n\
SB, Feb,  2, 11:15, PM, Feb,  3, 12:00, AM, Test6 \n\
SL, Feb,  3,  4:15, AM, Feb,  3,  5:00, AM, Test7 \
"
];


export let bandInfo = [
    ["Test1", "prog", "my note"],
    ["Test3", "core"],
    ["TestX", "black"],
    ["Abysmal Dawn", "death", ""],
    ["Arcturus", "black prog", "nmt"],
    ["Benighted", "black brutal", "Y"],
    ["Beyond Creation", "tech death", "Y"],
    ["Cabrakaan", "folk", ""],
    ["Candlemass", "doom", ""],
    ["Crownshift", "power", "Y"],
    ["Decapitated", "tech", ""],
    ["Delaine", "symph rock", "Y FL"],
    ["Destinity", "black", ""],
    ["Dread Crew of Oddwood", "folk", ""],
    ["Emperor", "Symph Black", "Y"],
    ["Ex Deo", "symph death", "YY"],
    ["Fabulae Dramatis", "prog avant", ""],
    ["Finntroll", "black folk", "nmt"],
    ["Flotsam Jetsam", "power thrash", "nmt"],
    ["Fractal Sun", "prog", "Y F"],
    ["HammerFall", "", ""],
    ["Hate", "death", ""],
    ["Ihsahn", "prog", "Y"],
    ["In Extremo", "folk", ""],
    ["Incantation", "death", ""],
    ["Kalmah", "death power", ""],
    ["Kissin Dynamite", "heavy rock", ""],
    ["Krisiun", "death", "YY"],
    ["Lutharo", "power", "FL"],
    ["Majestica", "symph power", ""],
    ["Matalobos", "doom", ""],
    ["Metsatoll", "folk", ""],
    ["Mork", "black", "Y"],
    ["Onslaught", "thrash", "nmt"],
    ["Painful", "black death", ""],
    ["Pessimist", "deatrh", ""],
    ["Powerglove", "power", ""],
    ["Reaping Asmodeia", "melo tech", ""],
    ["Samael", "black indust", "Y"],
    ["Septicflesh", "symph death", "YY"],
    ["Sepultura", "death", "Y"],
    ["Seven Kingdoms", "power", ""],
    ["Sonata Arctica", "power", "nmt"],
    ["Stratovarious", "power", "nmt"],
    ["Striker", "power", ""],
    ["Subway to Sally", "folk", "Y"],
    ["Super Monster Party", "power", ""],
    ["Swallow the Sun", "melo death", "Y"],
    ["Symphony X", "prog power", "m"],
    ["Tankard", "thrash", "Y"],
    ["Tenebrarum", "black", ""],
    ["The Kovenant", "indust goth rock", "Y"],
    ["The Mourning", "prog", "FL"],
    ["The Zenith Passage", "tech death", "YY"],
    ["Thy Antichrist", "black", ""],
    ["Total Death", "black doom", ""],
    ["Trollfest", "folk", "m"],
    ["Trouble", "doom", "nmt"],
    ["Twilight Force", "symph power", "m"],
    ["Unleash the Archers", "power", "Y nmt"],
    ["Warfield", "thrash", ""]
];

export let storedVersion = "_70k25_v1";
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