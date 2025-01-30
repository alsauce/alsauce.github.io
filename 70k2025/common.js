
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
RT, Jan, 30, 6:00, PM, Jan, 30, 6:45, PM, Twilight Force \n\
RT, Jan, 30, 7:30, PM, Jan, 30, 8:30, PM, Sonata Arctica \n\
RT, Jan, 30, 9:15, PM, Jan, 30, 10:15, PM, HammerFall \n\
RT, Jan, 30, 11:15, PM, Jan, 31, 12:30, AM, Emperor \n\
RT, Jan, 31, 1:15, AM, Jan, 31, 2:15, AM, Candlemass \n\
RT, Jan, 31, 3:00, AM, Jan, 31, 3:45, AM, Arcturus \n\
RT, Jan, 31, 4:30, AM, Jan, 31, 5:15, AM, Striker \n\
SB, Jan, 30, 5:15, PM, Jan, 30, 6:00, PM, Onslaught \n\
SB, Jan, 30, 6:45, PM, Jan, 30, 7:30, PM, Krisiun \n\
SB, Jan, 30, 8:30, PM, Jan, 30, 9:15, PM, Decapitated \n\
SB, Jan, 30, 10:15, PM, Jan, 30, 11:15, PM, Kalmah \n\
SB, Jan, 31, 12:30, AM, Jan, 31, 1:15, AM, Kissin Dynamite \n\
SB, Jan, 31, 2:15, AM, Jan, 31, 3:00, AM, Septicflesh \n\
SB, Jan, 31, 3:45, AM, Jan, 31, 4:30, AM, Dread Crew of Oddwood \n\
SB, Jan, 31, 5:15, AM, Jan, 31, 6:00, AM, Total Death \n\
SL, Jan, 30, 5:15, PM, Jan, 30, 6:00, PM, Beyond Creation \n\
SL, Jan, 30, 6:45, PM, Jan, 30, 7:30, PM, Fabulae Dramatis \n\
SL, Jan, 30, 8:30, PM, Jan, 30, 9:15, PM, Thy Antichrist \n\
SL, Jan, 30, 10:15, PM, Jan, 30, 11:00, PM, Reaping Asmodeia \n\
SL, Jan, 31, 12:30, AM, Jan, 31, 1:15, AM, Benighted \n\
SL, Jan, 31, 2:15, AM, Jan, 31, 3:00, AM, Seven Kingdoms \n\
SL, Jan, 31, 3:45, AM, Jan, 31, 4:30, AM, Destinity \n\
PD, Jan, 31, 12:00, AM, Jan, 31, 5:00, AM, Karaoke at Sports Bar \
"
,
"\
PD, Jan, 31, 10:00, AM, Jan, 31, 10:45, AM, Trollfest \n\
PD, Jan, 31, 11:30, AM, Jan, 31, 12:15, PM, Ex Deo \n\
PD, Jan, 31, 1:00, PM, Jan, 31, 1:45, PM, Crownshift \n\
PD, Jan, 31, 2:30, PM, Jan, 31, 3:15, PM, Ihsahn \n\
PD, Jan, 31, 4:00, PM, Jan, 31, 5:00, PM, Finntroll \n\
PD, Jan, 31, 6:00, PM, Jan, 31, 7:00, PM, Dirkschneider \n\
PD, Jan, 31, 8:00, PM, Jan, 31, 9:05, PM, Stratovarius \n\
PD, Jan, 31, 10:15, PM, Jan, 31, 11:15, PM, Symphony X \n\
PD, Feb, 1, 12:30, AM, Feb, 1, 1:30, AM, Subway to Sally \n\
PD, Feb, 1, 2:15, AM, Feb, 1, 3:00, AM, Unleash the Archers \n\
PD, Feb, 1, 3:45, AM, Feb, 1, 4:30, AM, Samael \n\
PD, Feb, 1, 5:15, AM, Feb, 1, 6:00, AM, Abysmal Dawn \n\
RT, Jan, 31, 10:45, AM, Jan, 31, 11:30, AM, Lutharo \n\
RT, Jan, 31, 12:15, PM, Jan, 31, 1:00, PM, Trouble \n\
RT, Jan, 31, 1:45, PM, Jan, 31, 2:30, PM, Majestica \n\
RT, Jan, 31, 3:15, PM, Jan, 31, 4:00, PM, Delain \n\
RT, Jan, 31, 5:00, PM, Jan, 31, 6:00, PM, The Kovenant \n\
RT, Jan, 31, 7:00, PM, Jan, 31, 8:00, PM, In Extremo \n\
RT, Jan, 31, 9:00, PM, Jan, 31, 10:15, PM, Swallow the Sun \n\
RT, Jan, 31, 11:15, PM, Feb, 1, 12:30, AM, Sepultura \n\
RT, Feb, 1, 1:30, AM, Feb, 1, 2:15, AM, Suffocation \n\
RT, Feb, 1, 3:00, AM, Feb, 1, 3:45, AM, Metsatoll \n\
SB, Jan, 31, 1:00, PM, Jan, 31, 1:45, PM, Painful \n\
SB, Jan, 31, 2:30, PM, Jan, 31, 3:15, PM, Super Monster Party \n\
SB, Jan, 31, 4:15, PM, Jan, 31, 5:00, PM, Fractal Sun \n\
SB, Jan, 31, 5:45, PM, Jan, 31, 6:30, PM, Cabrakaan \n\
SB, Jan, 31, 7:15, PM, Jan, 31, 8:00, PM, Pessimist \n\
SB, Jan, 31, 8:45, PM, Jan, 31, 9:30, PM, Tankard \n\
SB, Jan, 31, 10:15, PM, Jan, 31, 11:00, PM, Tenebrarum \n\
SB, Jan, 31, 11:45, PM, Feb, 1, 12:30, AM, Mork \n\
SB, Feb, 1, 1:30, AM, Feb, 1, 2:15, AM, Flotsam and Jetsam \n\
SB, Feb, 1, 3:00, AM, Feb, 1, 3:45, AM, The Mourning \n\
SB, Feb, 1, 4:30, AM, Feb, 1, 5:15, AM, Matalobos \n\
SL, Jan, 31, 3:15, PM, Jan, 31, 4:00, PM, Warfield \n\
SL, Jan, 31, 5:00, PM, Jan, 31, 5:45, PM, Powerglove \n\
SL, Jan, 31, 6:30, PM, Jan, 31, 7:15, PM, Incantation \n\
SL, Jan, 31, 8:00, PM, Jan, 31, 8:45, PM, The Zenith Passage \n\
SL, Jan, 31, 9:30, PM, Jan, 31, 10:15, PM, Hate \n\
SL, Jan, 31, 11:00, PM, Jan, 31, 11:45, PM, Stormruler \
"
,
"\
PD, Feb, 1, 9:00, AM, Feb, 1, 4:00, PM, Ochos Rios Jamaica \n\
PD, Feb, 1, 5:00, PM, Feb, 1, 5:45, PM, Tankard \n\
PD, Feb, 1, 6:30, PM, Feb, 1, 7:30, PM, The Kovenant \n\
PD, Feb, 1, 8:30, PM, Feb, 1, 9:30, PM, Sonata Arctica \n\
PD, Feb, 1, 10:30, PM, Feb, 1, 11:45, PM, Emperor \n\
PD, Feb, 2, 12:45, AM, Feb, 2, 1:30, AM, Decapitated \n\
PD, Feb, 2, 2:15, AM, Feb, 2, 3:00, AM, Delain \n\
PD, Feb, 2, 3:45, AM, Feb, 2, 4:30, AM, Krisiun \n\
PD, Feb, 2, 5:15, PM, Feb, 2, 6:00, AM, Hate \n\
RT, Feb, 1, 5:45, PM, Feb, 1, 6:30, PM, Unleash the Archers \n\
RT, Feb, 1, 7:30, PM, Feb, 1, 8:30, PM, Subway to Sally \n\
RT, Feb, 1, 9:30, PM, Feb, 1, 10:30, PM, Symphony X \n\
RT, Feb, 1, 11:45, PM, Feb, 2, 12:45, AM, Stratovarius \n\
RT, Feb, 2, 1:30, AM, Feb, 2, 2:15, AM, Onslaught \n\
RT, Feb, 2, 3:00, AM, Feb, 2, 3:34, AM, Incantation \n\
SB, Feb, 1, 5:00, PM, Feb, 1, 5:45, PM, Reaping Asmodeia \n\
SB, Feb, 1, 6:45, PM, Feb, 1, 7:30, PM, Fabulae Dramatis \n\
SB, Feb, 1, 8:30, PM, Feb, 1, 9:15, PM, Trouble \n\
SB, Feb, 1, 10:00, PM, Feb, 1, 10:45, PM, Powerglove \n\
SB, Feb, 1, 11:45, PM, Feb, 2, 12:30, AM, Ex Deo \n\
SB, Feb, 2, 1:30, AM, Feb, 2, 2:15, AM, Benighted \n\
SB, Feb, 2, 3:00, AM, Feb, 2, 3:45, AM, Twilight Force \n\
SB, Feb, 2, 4:30, AM, Feb, 2, 5:15, AM, Beyond Creation \n\
SL, Feb, 1, 5:45, PM, Feb, 1, 6:30, PM, Tenebrarum \n\
SL, Feb, 1, 7:30, PM, Feb, 1, 8:15, PM, Matalobos \n\
SL, Feb, 1, 9:15, PM, Feb, 1, 10:00, PM, Lutharo \n\
SL, Feb, 1, 10:45, PM, Feb, 1, 11:30, PM, Striker \n\
SL, Feb, 2, 12:45, AM, Feb, 2, 1:30, AM, Dread Crew of Oddwood \n\
SL, Feb, 2, 2:15, AM, Feb, 2, 3:0, AM, Pessimist \n\
SL, Feb, 2, 3:45, AM, Feb, 2, 4:30, AM, Fractal Sun \
"
,
"\
PD, Feb, 2, 10:00, AM, Feb, 2, 10:45, AM, Flotsam and Jetsam \n\
PD, Feb, 2, 11:30, AM, Feb, 2, 12:15, PM, Septicflesh \n\
PD, Feb, 2, 12:15, PM, Feb, 2, 1:15, PM, Belly Flop at Solarium \n\
PD, Feb, 2, 1:15, PM, Feb, 2, 2:00, PM, Kissin Dynamite \n\
PD, Feb, 2, 2:45, PM, Feb, 2, 3:30, PM, Suffocation \n\
PD, Feb, 2, 4:15, PM, Feb, 2, 5:15, PM, Candlemass \n\
PD, Feb, 2, 6:00, PM, Feb, 2, 7:00, PM, Kalmah \n\
PD, Feb, 2, 7:45, PM, Feb, 2, 8:45, PM, In Extremo \n\
PD, Feb, 2, 9:30, PM, Feb, 2, 10:30, PM, HammerFall \n\
PD, Feb, 2, 11:30, PM, Feb, 3, 12:45, AM, Sepultura \n\
PD, Feb, 3, 12:45, AM, Feb, 3, 1:00, AM, Skipper's Thank You \n\
PD, Feb, 3, 1:30, AM, Feb, 3, 5:00, AM, Karaoke at Solarium \n\
RT, Feb, 2, 10:45, AM, Feb, 2, 11:30, AM, Destinity \n\
RT, Feb, 2, 12:15, PM, Feb, 2, 1:00, PM, Crownshift \n\
RT, Feb, 2, 2:30, PM, Feb, 2, 4:00, PM, All Star Jam \n\
RT, Feb, 2, 5:15, PM, Feb, 2, 6:00, PM, Ihsahn \n\
RT, Feb, 2, 6:45, PM, Feb, 2, 7:45, PM, Dirkschneider \n\
RT, Feb, 2, 8:30, PM, Feb, 2, 9:30, PM, Finntroll \n\
RT, Feb, 2, 10:30, PM, Feb, 2, 11:45, PM, Swallow the Sun \n\
SB, Feb, 2, 10:45, AM, Feb, 2, 11:30, AM, Trollfest \n\
SB, Feb, 2, 12:15, PM, Feb, 2, 1:00, PM, Thy Antichrist \n\
SB, Feb, 2, 1:45, PM, Feb, 2, 2:30, PM, Stormruler \n\
SB, Feb, 2, 3:30, PM, Feb, 2, 4:15, PM, The Zenith Passage \n\
SB, Feb, 2, 5:15, PM, Feb, 2, 6:00, PM, Seven Kingdoms \n\
SB, Feb, 2, 7:00, PM, Feb, 2, 7:45, PM, Arcturus \n\
SB, Feb, 2, 8:45, PM, Feb, 2, 9:30, PM, Warfield \n\
SB, Feb, 2, 10:30, PM, Feb, 2, 11:15, PM, Samael \n\
SB, Feb, 3, 1:30, AM, Feb, 3, 2:15, AM, Majestica \n\
SL, Feb, 2, 11:30, AM, Feb, 2, 12:25, PM, Cabrakaan \n\
SL, Feb, 2, 1:00, PM, Feb, 2, 1:45, PM, Abysmal Dawn \n\
SL, Feb, 2, 2:45, PM, Feb, 2, 3:30, PM, The Mourning \n\
SL, Feb, 2, 4:30, PM, Feb, 2, 5:15, PM, Metsatoll \n\
SL, Feb, 2, 6:00, PM, Feb, 2, 6:45, PM, Super Monster Party \n\
SL, Feb, 2, 7:45, PM, Feb, 2, 8:30, PM, Mork \n\
SL, Feb, 2, 9:45, PM, Feb, 2, 10:30, PM, Total Death \n\
SL, Feb, 2, 11:45, PM, Feb, 3, 12:30, AM, Painful \
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
    ["Delain", "symph rock", "Y FL"],
    ["Destinity", "black", ""],
    ["Dread Crew of Oddwood", "folk", ""],
    ["Emperor", "Symph Black", "Y"],
    ["Ex Deo", "symph death", "YY"],
    ["Fabulae Dramatis", "prog avant", ""],
    ["Finntroll", "black folk", "nmt"],
    ["Flotsam and Jetsam", "power thrash", "nmt"],
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
    ["Stratovarius", "power", "nmt"],
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
    ["Warfield", "thrash", ""],
    ["Stormruler", "black", ""],
    ["Suffocation", "brutal death", ""],
    ["Dirkschneider", "heavy", ""]
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