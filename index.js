// Write your solution in this file!
const employee = {
    name: "Gale Boetticher",
    streetAddress: "6353 Juan Tabo Blvd, Albuquerque, New Mexico"
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, [key]: value};
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const temp = {...employee};
    delete temp[key];
    return temp;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}