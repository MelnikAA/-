// пропишем функцию random
const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

const btn = document.querySelector('#btn');

let numb = 0;
btn.addEventListener('mouseover', () =>{
    numb++;
    console.log(numb);
    });

function  func(){
    if(numb < 15 ){
        btn.style.left = `${random(0, 90)}%`;
        btn.style.top = `${random(0, 90)}%`; 
    }
    else{
        btn.removeEventListener('mouseover', func);
    }
    
    
}
    

btn.addEventListener('mouseover', (func))

btn.addEventListener('click', () => {
    document.querySelector('#img').style.opacity="1.1";
    document.querySelector('#img').style.width="500px";
    document.querySelector('#btn').style.opacity="0.0";
});


























// // функция рандом
// const random = (min, max) => {
//   const rand = min + Math.random() * (max - min + 1);
//   return Math.floor(rand);
// };

// // убегающая кнопка
// const btn = document.querySelector('#btn');
// btn.addEventListener('mouseenter', () => {
//     btn.style.left = `${random(0, 90)}%`;
//     btn.style.top = `${random(0, 90)}%`;
// });

// // победа
// btn.addEventListener('click',
//   () => alert('Congratulations! You hit the button! What are you doing with your life?')
// );