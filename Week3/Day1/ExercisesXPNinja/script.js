// Exercise 1 : Calendar
// Instructions
// Create a function called createCalendar(year, month)
// The function should create a calendar for the given year/month.
// The calendar should be a table, where a week is <tr>, and a day is <td>. The table top should be <th> with weekday names: the first day should be Monday, and so on until Sunday.
// For instance, createCalendar(2012, 9) should generate the following calendar:

// Hint: There shouldn’t be any code in the HTML file. The table should be created from the JS file using the DOM.

// MO	TU	WE	TH	FR	SA	SU
// .	.	.	.	.	1	2
// 3	4	5	6	7	8	9
// 10	11	12	13	14	15	16
// 17	18	19	20	21	22	23
// 24	25	26	27	28	29	30

// for (let i = 0; i < days.length; i++) {
//   const day = days[i];
//   const tr = document.createElement("tr");
//   table.appendChild(tr);
//   const th = document.createElement("th");
//   th.textContent = day
//   table.appendChild(th);
//   const titleTd = document.createElement("td");

//   tr.appendChild(titleTd);
// }

// function createCalendar(year, month)

function createCalendar(year, month) {
  const daysOfWeek = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const weekRow = document.createElement("tr");
  const container = document.createElement("div");
  container.id = "container";

  for (let i = 0; i < daysOfWeek.length; i++) {
    const dayOfWeek = document.createElement("th");
    dayOfWeek.textContent = daysOfWeek[i];
    weekRow.appendChild(dayOfWeek);
  }

  tableHead.appendChild(weekRow);
  table.appendChild(tableHead);

  const date = new Date(year, month - 1, 1);
  let currentWeek = document.createElement("tr");

  while (date.getMonth() === month - 1) {
    const day = document.createElement("td");
    day.textContent = date.getDate();
    currentWeek.appendChild(day);

    if (date.getDay() === 6) {
      table.appendChild(currentWeek);
      currentWeek = document.createElement("tr");
    }

    date.setDate(date.getDate() + 1);
  }
  container.appendChild(table);
  document.body.appendChild(container);
}
createCalendar(2012, 9);
