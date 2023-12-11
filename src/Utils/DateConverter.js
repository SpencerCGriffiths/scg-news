export function DateConverter(isoDate) { 
    const date = new Date(isoDate);
    
    const hour = date.getHours();
    const minute = date.getMinutes();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() % 100;

    const formattedHour = String(hour).padStart(2, '0');
    const formattedMinute = String(minute).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');
    const formattedMonth = String(month).padStart(2, '0');
    const formattedYear = String(year).padStart(2, '0');
    
    const formattedDate = `${formattedHour}:${formattedMinute} ${formattedDay}/${formattedMonth}/${formattedYear}`;
return formattedDate
}

export function console () { 
    console.log("hi")
}