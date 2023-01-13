const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) =>{
    item.onclick = () =>{
      switch(display == item.id) {
        case 'sin':
          
      }

        if (item.id == 'clear'){
            display.innerText = '';
        } else if (item.id == 'backspace') {
            let String = display.innerText.tostring();
            display.innerText = String.substr(0, string.length - 1);
        } else if (display.innerText != '' && item.id == 'equal'){
            display.innerText = eval(display.innerText);
        }  else if (display.innerText == '' && item.id =='equal'){
            display.innerText = 'Empty';
            setTimeout(() =>  (display.innerText =''), 2000);
//         } else if (item.id == 'sin') {
//           // display.innerText += item.id
//           //  display.innerText = display.innerText+item.id
//           display.innerText = display.innerText+Math.sin





//             var input = document.getElementById("display").value;
//             console.log(input)
//             let result = Math.sin(input);
//             console.log(result)
//             display.innerText=result
//             // if (isNaN(input)) {
//             //   display.innerText = 'Invalid input';
//             // }
//             //  else {
//               // var radians = input * (Math.PI / 100);
//               // var result = Math.sin(radians);
//               // display.innerText = result;
//             // }
//         } else if (item.id == 'cos' ) {
//             console.log('cos function called');
//             var input = document.getElementById("display").value;
//             if (isNaN(input)) {
//               display.innerText = 'Invalid input';
//             } else {
//               var radians = input * (Math.PI / 100);
//               var result = Math.cos(radians);
//               display.innerText = result;
//             }
//         } else if (item.id == 'sqrt2') {
//             console.log('squre function called');
//             var input = document.getElementById("display").value;
//             if (isNaN(input)) {
//               display.innerText = 'Invalid input';
//             } else {
//               var result = Math.sqrt(input);
//               display.innerText = result;
//             }
        } else {
            display.innerText += item.id
        }
    }
    
// })

// window.onload = function() {
//     document.getElementById("sin").addEventListener("click", function sin() {
//         console.log('sin function called');
//         var input = document.getElementById("display").value;
//         if (display.innerText === '') {
//             display.innerText = 'Input required';
//           } else {
//             // input is present, check if it is a number
//             var input = document.getElementById("display").value;
//             if (isNaN(input)) {
//               // input is not a number
//               display.innerText = 'Invalid input';
//             } else {
//               // input is a number, calculate and display result
//               var radians = input * (Math.PI / 100);
//               var result = Math.sin(radians);
//               display.innerText = result;
//             }
//           }
          
          
    
    })
// }




const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
}




