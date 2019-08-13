function betTimes() {
  let d = new Date();
  return d.getTime();
}

function randomId() {
  let d = Math.floor(Math.random() * 6) + 1;
  let n = Math.floor(Math.random() * 6) + 1;
  return `#slot-${d}${n}`;
}
