function previousDay(year,month,day){

    let dateInput = `${year}-${month}-${day}`
    let pastDay = new Date(dateInput)

     pastDay.setDate(pastDay.getDate() -1)

    console.log(`${pastDay.getFullYear()}-${pastDay.getMonth() +1 }-${pastDay.getDate()}`)
}

previousDay(2016, 10, 1)