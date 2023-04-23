const getYear = document.querySelector('.year');
const getMonth = document.querySelector('.month');
const getDay = document.querySelector('.day');

const submitPurp = document.querySelector('.purp');
const submitMobile = document.querySelector('.mobilebutton');

const setYear = document.querySelector('.years');
const setMobileYear = document.querySelector('.yearsmobile');
const setMonth = document.querySelector('.months');
const setMobileMonth = document.querySelector('.monthsmobile');
const setDay = document.querySelector('.days');
const setMobileDay = document.querySelector('.daysmobile');

const errormessageyear = document.querySelector('.errormessageyear');
const errormessagemonth = document.querySelector('.errormessagemonth');
const errormessageday = document.querySelector('.errormessageday');

submitPurp.addEventListener('click', getInfo);
submitMobile.addEventListener('click', getInfo);

const now = new Date();
const currentDay = now.getDay();
const currentMonth = now.getMonth();
const currentYear = now.getFullYear();

function getInfo(){
    const [years, months, days] = getAge(getYear.value, getMonth.value, getDay.value);
    if(parseInt(getYear.value) > 2023 || parseInt(getYear.value) < 1900 || getYear.value === ''){
        errormessageyear.innerHTML = "try again!"
    } else {
        animateValue(setYear, 0, years, 1000);
        animateValue(setMobileYear, 0, years, 1000);
    }
    if(parseInt(getMonth.value) > 12 || getMonth.value === ''){
        errormessagemonth.innerHTML = "try again!"
    } else {
        animateValue(setMonth, 0, months, 1000);
        animateValue(setMobileMonth, 0, months, 1000);
    }
    if(parseInt(getDay.value) > 31 || getDay.value === ''){
        errormessageday.innerHTML = "try again!"
    } else {
        animateValue(setDay, 0, days, 1000);
        animateValue(setMobileDay, 0, days, 1000);
    }
}

function getAge(birthYear, birthMonth, birthDay) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // JavaScript counts months from 0 to 11
    const currentDay = currentDate.getDate();
  
    let ageYear = currentYear - birthYear;
    let ageMonth = currentMonth - birthMonth;
    let ageDay = birthDay - currentDay;
  
    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
      ageYear--;
      ageMonth += 12;
    }
  
    if (ageDay < 0) {
      const daysInLastMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
      ageMonth--;
      ageDay += daysInLastMonth;
    }
  
    return [ageYear, ageMonth, ageDay];
  }

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
        window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}