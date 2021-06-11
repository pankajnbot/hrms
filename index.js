const emp_service = require('./services/employeeServices') 

let id = 1234
console.log(`Leave Count for ${id} is ${emp_service.getLeaveCount(id)}`)

let gender = "Male"
console.log(`Count of  ${gender} Employees in Organization is ${emp_service.getEmployeesByGenderCount(gender)}`)