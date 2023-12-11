document.querySelector( '.screen' ).style.display = 'block'
document.querySelector( '.page' ).classList.add('animate__animated', 'animate__flash',);

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
    timeout = 10;
    if (count < text.length * 2){
        setTimeout(() => {
            count ++;
            typing_text();
        }, timeout);
}}
typing_text();