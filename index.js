// Your code here
function createEmployeeRecord(arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  function createEmployeeRecords(arrOfArrs) {
    return arrOfArrs.map(createEmployeeRecord);
  }
  function createTimeInEvent(employee, dateTimeString) {
    let [date, hour] = dateTimeString.split(" ");
    
    employee.timeInEvents.push({
      type: "TimeIn",
      date: date,
      hour: parseInt(hour)
    });
  
    return employee;
  }
  function createTimeOutEvent(employee, dateTimeString) {
    let [date, hour] = dateTimeString.split(" ");
    
    employee.timeOutEvents.push({
      type: "TimeOut",
      date: date,
      hour: parseInt(hour)
    });
  
    return employee;
  }
  function hoursWorkedOnDate(employee, date) {
    let timeIn = employee.timeInEvents.find(event => event.date === date);
    let timeOut = employee.timeOutEvents.find(event => event.date === date);
    
    return (timeOut.hour - timeIn.hour) / 100;
  }
  function wagesEarnedOnDate(employee, date) {
    let hoursWorked = hoursWorkedOnDate(employee, date);
    return hoursWorked * employee.payPerHour;
  }
  function allWagesFor(employee) {
    return employee.timeInEvents
      .map(event => wagesEarnedOnDate(employee, event.date))
      .reduce((total, wages) => total + wages, 0);
  }
  function calculatePayroll(employees) {
    return employees
      .map(employee => allWagesFor(employee))
      .reduce((total, wages) => total + wages, 0);
  }
  
    
  