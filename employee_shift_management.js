//Task 1: Create an Employees Array of Employee Objects

let employees = [
    { name: "John", shifts:[{ day:"Monday" , hours: 5 }, { day: "Wednesday", hours: 6}] },
    { name: "Nikki", shifts:[{ day:"Tuesday" , hours: 6 }, { day: "Thursday", hours: 7}] },
    { name: "Tyler", shifts:[{ day:"Monday" , hours: 8 }, { day: "Saturday", hours: 4}] },
    { name: "Myles", shifts:[{ day:"Wednesday" , hours: 6 }, { day: "Sunday", hours: 5}] },
];

//Task 2: Create a Function to Display Employee Shift Details

function displayEmployeeShifts(employee) {
    console.log("employee: ${employee.name}");
    employee.shifts.foreach(shift => {
        console.log("shift: ${shift.day}, hours: ${shift.hours}");
    });
 
}