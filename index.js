// Write your solution in this file!
const driver = {};

updateDriverWithKeyValuePaire(driver, key, value){
  newDriver = Object.assign({}, driver);
  newDriver[key] = value;
  return newDriver;
}
