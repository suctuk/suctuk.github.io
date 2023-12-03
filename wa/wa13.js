fetch("wa13.json")
  .then((response) => response.json())
  .then((data) => {
    // The 'data' variable now contains the parsed JSON object
    //this will hold the sata from the file, and won't print the updated salaries right away.
    const initialData = JSON.parse(JSON.stringify(data));
    //Question 1: Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible)
    //Sam, Tech, Manager, 40000, true
    //Mary, Finance, Trainee, 18500, true
    //Bill, HR, Executive, 21200, false
    console.log("Question 1:");
    for (let i = 0; i < initialData.Employees.length; i++) {
      console.log(
        initialData.Employees[i].firstName +
          ", " +
          initialData.Employees[i].department +
          ", " +
          initialData.Employees[i].designation +
          ", " +
          initialData.Employees[i].salary +
          ", " +
          initialData.Employees[i].raiseEligible
      );
    }
    console.log(initialData.Employees.slice(0,3));
    console.log("");
    //Question 2: Create JSON for the company with the following details (companyName, website, employees)
    //Tech Stars, www.techstars.site, array of Employees
    console.log("Question 2:");
    console.log("Company Name: " + initialData.companyName);
    console.log("Website: " + initialData.website);
    for (let i = 0; i < initialData.Employees.length; i++) {
      console.log(
        initialData.Employees[i].firstName +
          ", " +
          initialData.Employees[i].department +
          ", " +
          initialData.Employees[i].designation +
          ", " +
          initialData.Employees[i].salary +
          ", " +
          initialData.Employees[i].raiseEligible
      );
    }
    console.log(initialData);
    console.log("");
    //Question 3: A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of:
    //Anna, Tech, Executive, 25600, false
    console.log("Question 3:");
    const newEmployee = {
      firstName: "Anna",
      department: "Tech",
      designation: "Executive",
      salary: 25600,
      raiseEligible: false,
    };

    initialData.Employees.push(newEmployee);
    data.Employees.push(newEmployee);
    for (let i = 0; i < initialData.Employees.length; i++) {
      console.log(
        initialData.Employees[i].firstName +
          ", " +
          initialData.Employees[i].department +
          ", " +
          initialData.Employees[i].designation +
          ", " +
          initialData.Employees[i].salary +
          ", " +
          initialData.Employees[i].raiseEligible
      );
    }
    console.log(initialData.Employees);

    console.log("");
    //Question 4: Given the JSON for the company, calculate the total salary for all company employees.
    console.log("Question 4:");
    let TotalSalary = 0;

    for (let i = 0; i < initialData.Employees.length; i++) {
      TotalSalary += initialData.Employees[i].salary;
    }
    console.log("Total Salary: " + TotalSalary);

    console.log("");
    //Question 5: It's raise time. If an employee is raise eligible, increase their salary by 10%. Given the JSON of the company and its employees, write a function to update the salary for each employee who is raised eligible, then set their eligibility to false.
    console.log("Question 5:");
    for (let i = 0; i < initialData.Employees.length; i++) {
      if (initialData.Employees[i].raiseEligible === true) {
        initialData.Employees[i].salary +=
          initialData.Employees[i].salary * 0.1;
        initialData.Employees[i].raiseEligible = false;
      }
      console.log(
        initialData.Employees[i].firstName +
          ", Salary: " +
          initialData.Employees[i].salary +
          ", Raise Eligible? " +
          initialData.Employees[i].raiseEligible
      );
    }
    console.log(initialData.Employees);
    console.log("");
    //Question 6: Some employees have decided to work from home. The following array indicates who is working from home. Use the array to update the company JSON. For each employee, add another property called 'wfh' and set it to true of false
    //Working from home: ['Anna', 'Sam']
    console.log("Question 6:");

    for (let i = 0; i < initialData.Employees.length; i++) {
      // Add 'workFromHome' property to each employee
      let wfh = false;

      if (
        initialData.Employees[i].firstName === "Anna" ||
        initialData.Employees[i].firstName === "Sam"
      ) {
        wfh = true;
      } 
      initialData.Employees[i].wfh = wfh;

      console.log(
        initialData.Employees[i].firstName +
          ", Working from home: " +
          initialData.Employees[i].wfh
      );
    }
    console.log(initialData.Employees);
  })
  .catch((error) => console.error("Error loading JSON file:", error));
