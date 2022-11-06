let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');






setInterval(()=>{let currentDate = new Date();
    let futureDate = new Date('25 September 2022');
    let ruthBirthday = futureDate - currentDate
        let daysToBirthD = ruthBirthday / 1000 / 60 / 60 / 24
    
    days.innerHTML=Math.floor(daysToBirthD)
    
    let hoursToBirthD = Math.floor(ruthBirthday / 60 / 60 / 1000) % 24
    hours.innerHTML = hoursToBirthD
    
    let minutesToBirthD = Math.floor(ruthBirthday / 60 / 1000) % 60
    minutes.innerHTML = minutesToBirthD
    
    let secondsToBirthD = Math.floor(ruthBirthday / 1000) % 60
    seconds.innerHTML = secondsToBirthD
    }, 1000)

   
    