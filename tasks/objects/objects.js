/**
 * create object person with firstName and lastName properties
 * implement method getFullName that returns full name
 */
const person = { //put you object here
    firstName: "Pavel",
    lastName: "Makarevich",
    getFullName: function (){
        return `${this.firstName} ${this.lastName}`;
        }
    };
/**
 * create object student that has property grade and method getGrade
 * set person as prototype of student
 */
const student = { //put you object here
    grade: 10,
    getGrade: function() {
        return this.grade;
    }
};
Object.setPrototypeOf(student, person);

/**
 * create new instance of student using Object.create
 */
const student2 = Object.create(student); //put you object here

module.exports = {
    person,
    student,
    student2
};
