// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
    //return [drivers[0],drivers[1]];
}
function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
    //return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (value) {
    return value * multiplier;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func) {
  return func(drivers);
}
