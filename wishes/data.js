const studentData = [
    { name: 'John Doe', birthdate: '1990-01-24'},
    { name: 'Jane Smith', birthdate: '1992-01-24'},
    { name: 'Bob Johnson', birthdate: '1995-03-10'}
];
const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();
let message = "No one's birthday today";
let birthdayPeople = [];

studentData.forEach(student => {
    const birthdate = new Date(student.birthdate);
    const birthMonth = birthdate.getMonth() + 1;
    const birthDay = birthdate.getDate();
    if(currentMonth === birthMonth && currentDay === birthDay){
        birthdayPeople.push(student.name);
    }
});

if(birthdayPeople.length > 0){
    if(birthdayPeople.length === 1){
        message = `Happy birthday, ${birthdayPeople[0]}! Have a great day!`;
    }
    else {
        const lastPerson = birthdayPeople.pop();
        message = `Happy birthday to ${birthdayPeople.join(", ")} and ${lastPerson}! Have a great day!`;
    }
}
//display the birthday message on the website
document.getElementById("birthday-message").innerHTML = message;

