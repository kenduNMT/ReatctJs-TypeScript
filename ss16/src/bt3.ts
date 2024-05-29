// Khai báo enum
enum WeekDays {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

// Hàm generic lấy các giá trị của enum
function getEnumValues<T extends object>(enumObj: T): string[] {
    return Object.keys(enumObj).filter(key => isNaN(Number(key))) as string[];
}

// Sử dụng hàm generic với enum WeekDays
const weekDayValues = getEnumValues(WeekDays);

// In kết quả
weekDayValues.forEach(day => console.log(day));
