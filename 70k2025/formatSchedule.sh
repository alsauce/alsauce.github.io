
awk -F '\t' '{
  if (NF == 12) {
    loc = $1
    monthStart = $2
    dayStart = $3
    hourStart = $4
    minutesStart = $5
    ampmStart = $6
    monthEnd = $7
    dayEnd = $8
    hourEnd = $9
    minutesEnd = $10
    ampmEnd = $11
    band = $12

    if (hourStart > 12) {
      hourStart = hourStart - 12
    }

    if (hourEnd > 12) {
      hourEnd = hourEnd - 12
    }

    printf "%s, %s, %s, %s:%s, %s, %s, %s, %s:%s, %s, %s \\n\\\n", loc, monthStart, dayStart, hourStart, minutesStart, ampmStart, monthEnd, dayEnd, hourEnd, minutesEnd, ampmEnd, band
  } else {
    print "Skipping line (does not have exactly 3 values): " $0
  }
}' "schedule.txt"