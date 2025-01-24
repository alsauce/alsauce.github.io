
awk -F '\t' '{
  if (NF == 3) {
    printf "    [\"%s\", \"%s\", \"%s\"],\n", $1, $2, $3
  } else {
    print "Skipping line (does not have exactly 3 values): " $0
  }
}' "data.txt"