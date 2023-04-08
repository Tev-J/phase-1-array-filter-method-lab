// Code your solution here
function findMatching(driverList, driver) {
  return driverList.filter(
    (name) => name.toUpperCase() === driver.toUpperCase()
  );
}

function fuzzyMatch(dList, letters) {
  return dList.filter((driver) => driver.startsWith(letters));
}

function matchName(dList, driverName) {
  return dList.filter((obj) => obj.name === driverName);
}
