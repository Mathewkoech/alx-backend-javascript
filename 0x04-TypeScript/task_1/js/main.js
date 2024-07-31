/**
 * Defines the structure for a Teacher object.
 *
 * Attributes:
 * - `firstName`: A string representing the teacher's first name. It is a readonly property that can only be set upon initialization.
 * - `lastName`: A string representing the teacher's last name. It is a readonly property that can only be set upon initialization.
 * - `fullTimeEmployee`: A boolean indicating whether the teacher is a full-time employee.
 * - `yearsOfExperience`: An optional number representing the years of experience the teacher has. It is not required to create a Teacher object.
 * - `location`: A string representing the location where the teacher works.
 * - `[key: string]: any`: Allows for additional attributes without specifying their names, providing flexibility to include any other properties such as `contract`.
 */
// Create an instance of a Teacher object
var teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "New York",
    contract: "Permanent" // Example of an additional property
};
// Example usage of the Directors interface
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
// Log the teacher object to the console
console.log(teacher);
// Log the director object to the console
console.log(director1);
// Implement the printTeacher function
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe
// Implementation of the StudentClass
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
