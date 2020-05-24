// Write your solution in this file!
const driver = {};

updateDriverWithKeyValue(driver, key, value){
  const newDriver = Object.assign({}, driver);
  newDriver[key] = value;
  return newDriver;
}

destructivelyUpdateDriverWithKeyValue(driver, key, value){
  driver[key] = value;
  return driver;
}

deleteFromDriverByKey(driver, key){
  const newDriver = Object.assign({}, driver);
  delete newDriver[key];
}

destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
}
