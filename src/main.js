// document.querySelector( '.ufn' ).classList.add('animate__animated', 'animate__fadeIn',);
// document.querySelector( '.ufn' ).style.display = 'none';
// printText( document.getElementById( 'my-text' ) );
    
//     function printText( el ){
//       let letterTimeout = 100
      
//       let text = el.innerHTML
//       let i = 1
    
//       print__fn()
    
//       function print__fn(){ 
//         if( i <= text.length ){
//           el.innerHTML = text.substr( 0, i );
//           setTimeout( arguments.callee, letterTimeout );
//         } else {
//           document.querySelector( '.ufn' ).style.display = 'block';
//         }
//         i++;
//       }
//     }
// document.querySelector( '.ufn' ).style.display = 'none'

document.querySelector( '.ufn' ).classList.add('animate__animated', 'animate__flash',);

let textBox = document.querySelector('.screen'),
    text    = textBox.innerText,
    newHTML = '';

for(i = 0; i < text.length; i++){  
  if ('<span>'+text[i]+'span' != '<span><span>') {
    newHTML += '<span>'+text[i]+'<span>';
  } else {
    newHTML += ' ';
  }
}
textBox.innerHTML = newHTML;

let spans   = textBox.querySelectorAll('span'),
    count   = 0,
    timeout = 450;

function typing_text(){
    spans[count].classList.add('visible');
    timeout = 40;
    if (count < text.length * 2){
        setTimeout(() => {
            count ++;
            typing_text();
        }, timeout);
    } else {
      document.querySelector( '.ufn' ).style.display = 'block'
    }
}
typing_text();