const employeesDetails = require('../data/employees_detail.json') 

 const getLeaveCount = (id)=>{
    let emp = employeesDetails.filter(emp=>emp['emp-id'] == id)[0]
    return emp['total-leave']
}

 const getEmployeesByGenderCount = (gender)=>{ 
    return employeesDetails.filter(emp=>emp.gender == gender).length
}

module.exports = {getLeaveCount, getEmployeesByGenderCount}