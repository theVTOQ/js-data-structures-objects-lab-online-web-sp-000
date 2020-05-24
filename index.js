// Write your solution in this file!
const driver = {};

function updateDriverWithKeyValue(driver, key, value){
  const newDriver = Object.assign({}, ...driver);
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  const newDriver = Object.assign({}, ...driver);
  delete newDriver[key];
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
}
