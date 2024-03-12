function findDayOfWeek(dateString) {

    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
        return 'Invalid date format. Please use YYYY-MM-DD.';
    }else{
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const date = new Date(dateString);
        const dayOfWeek = date.getDay();
        return daysOfWeek[dayOfWeek];
    }
}

const inputDate = prompt("Enter the date in 'YYYY-MM-DD' format")
const dayOfWeek = findDayOfWeek(inputDate);
alert(`The day of the week for ${inputDate} is ${dayOfWeek}`);
