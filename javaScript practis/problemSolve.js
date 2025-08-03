const employer = {
  firstName: "John",
  lastName: "Doele",
  employeeId: 101,
  departmentCode: "HR",
  companyName: "Alphacorp",
};

const lastNameCh = employer.lastName.slice(0, 3).toLocaleLowerCase();

const result =
  lastNameCh +
  employer.employeeId +
  "@" +
  employer.companyName.toLocaleLowerCase() +
  ".com";

console.log("Mail:",result); // Output : doe101@alphacorp.com

// Temp Password
const firstNameCh = employer.firstName;

if (firstNameCh.length < 3) {
  const firstNameCh = employer.firstName.slice(0, 3).toLocaleLowerCase();
  console.log("Pass:",firstNameCh + "#" + employer.departmentCode);
} else {
  const firstNameCh = employer.firstName.slice(0, 3).toLocaleLowerCase();
  console.log("Pass:",firstNameCh + "#" + employer.departmentCode);
}
