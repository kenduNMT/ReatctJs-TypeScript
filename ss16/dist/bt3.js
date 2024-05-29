"use strict";
// Khai báo enum
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Sunday"] = 0] = "Sunday";
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
})(WeekDays || (WeekDays = {}));
// Hàm generic lấy các giá trị của enum
function getEnumValues(enumObj) {
    return Object.keys(enumObj).filter(key => isNaN(Number(key)));
}
// Sử dụng hàm generic với enum WeekDays
const weekDayValues = getEnumValues(WeekDays);
// In kết quả
weekDayValues.forEach(day => console.log(day));
