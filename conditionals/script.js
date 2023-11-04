// 1 - Write a code which can give grades to students according to theirs scores:
// 	80-100, A
// 	70-89, B
// 	60-69, C
// 	50-59, D
// 	0-49, F

function getGrade(score) {
  switch (true) {
    case score >= 80 && score <= 100:
      return "A";
    case score >= 70 && score < 80:
      return "B";
    case score >= 60 && score < 70:
      return "C";
    case score >= 50 && score < 60:
      return "D";
    case score >= 0 && score < 50:
      return "F";
    default:
      return "Invalid score";
  }
}

const score = 75;
const grade = getGrade(score);
console.log(`Score: ${score}, Grade: ${grade}`);

// 2 - Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// 	September, October or November, the season is Autumn.
// 	December, January or February, the season is Winter.
// 	March, April or May, the season is Spring
// 	June, July or August, the season is Summer

function getSeason(month) {
  switch (month.toLowerCase()) {
    case "september":
    case "october":
    case "november":
      return "Autumn";
    case "december":
    case "january":
    case "february":
      return "Winter";
    case "march":
    case "april":
    case "may":
      return "Spring";
    case "june":
    case "july":
    case "august":
      return "Summer";
    default:
      return "Invalid month";
  }
}

const month = "October";
const season = getSeason(month);
console.log(`Month: ${month}, Season: ${season}`);

// 3 - Check if a day is weekend day or a working day. Your script will take day as an input.

//  	What is the day  today? Saturday
//   	Saturday is a weekend.

//   	What is the day today? saturDaY
//   	Saturday is a weekend.

//   	What is the day today? Friday
//   	Friday is a working day.

//   	What is the day today? FrIDAy
//   	Friday is a working day.

function isWeekend(day) {
  switch (day.toLowerCase()) {
    case "saturday":
    case "sunday":
      return true;
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      return false;
    default:
      return "Invalid day";
  }
}

const day = "Saturday";
const isWeekendDay = isWeekend(day);
console.log(`${day} is a ${isWeekendDay ? "weekend" : "working"} day.`);

// 4 - Write a program which tells the number of days in a month.

//   	Enter a month: January
//   	January has 31 days.

//   	Enter a month: JANUARY
//   	January has 31 day

//   	Enter a month: February
//   	February has 28 days.

//   	Enter a month: FEbruary
//   	February has 28 days.

function getDaysInMonth(month) {
  switch (month.toLowerCase()) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
      return 31;
    case "april":
    case "june":
    case "september":
    case "november":
      return 30;
    case "february":
      return "28";
    default:
      return "Invalid month";
  }
}

const monthName = "February";
const daysInMonth = getDaysInMonth(monthName);
console.log(`${monthName} has ${daysInMonth} days.`);
