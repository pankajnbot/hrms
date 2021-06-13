const assert = require('assert');
const employees_services = require('../../services/employeeServices')

describe('EmployeeServiceTest', function() {
  describe('#getEmployeesByGenderCount()', function() {
    it('should return 3 when the value is Male', function() {
      assert.equal(employees_services.getEmployeesByGenderCount("Male"), 3);
    });

    it('should return 0 when the value is Female', function() {
      assert.equal(employees_services.getEmployeesByGenderCount("Female"), 0);
    });

    it('should return 0 when the value is Others..', function() {
      assert.equal(employees_services.getEmployeesByGenderCount("Others"), 0);
    });
  });


  describe('#getLeaveCount()', function() {
    it('should return 11 when the value is 1234', function() {
      assert.equal(employees_services.getLeaveCount(1234), 11);
    });

    it('should return 13 when the value is 6675', function() {
      assert.equal(employees_services.getLeaveCount(6675), 13);
    }); 
  });

});