const ctx = document.getElementById('myChart').getContext('2d');
const themaBtn = document.querySelector('.thema__btn');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const aside = document.querySelector('.saidbar__left');
const close = document.querySelector('.close');
let conde = false;
const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov'
  ];

  const data = {
    labels: labels,
    datasets: [
        {
          label: 'BTC',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
          data: [4, 150, 22, 266, 26, 37, 45, 555, 88, 99, 889],

        },
        {
          label: 'BTC',
          borderColor: 'blue',
          borderWidth: 2,
          data: [0, 10, 555, 2, 20, 30, 454, 53, 75, 42, 2, 55],
        }

    ]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true
    }
  };
const myChart = new Chart(ctx, config);

themaBtn.addEventListener("click", ({target})=>{
    for(let key of themaBtn.querySelectorAll('i')){
        key.classList.remove('dark-active');
    }
    target.classList.add('dark-active');

    if(target.classList[1] === "fa-sun"){
        body.classList.remove('dark-thema');
    }else {
        body.classList.add('dark-thema');
    }
})

menu.addEventListener("click", ()=>{
    conde = !conde? true : false;
    if(conde){
        aside.style.left = "0px";
        aside.style.visibility = "visible";
        body.style.overflow = 'hidden';
    }else{
        aside.style.left = "-110%";
        aside.style.visibility = "hidden";
        body.style.overflow = 'auto';
    }
})

close.addEventListener('click', ()=>{
    conde = false;
    aside.style.left = "-110%";
    aside.style.visibility = "hidden";
    body.style.overflow = 'auto';
})