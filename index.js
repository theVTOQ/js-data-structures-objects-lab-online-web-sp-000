// Write your solution in this file!
const driver = {};

updateDriverWithKeyValue(driver, key, value){
  newDriver = Object.assign({}, driver);
  newDriver[key] = value;
  return newDriver;
}

destructivelyUpdateDriverWithKeyValue(driver, key, value){
  driver[key] = value;
  return driver;
}

deleteDriverByKey(driver, key){
  delete driver[key];
}
