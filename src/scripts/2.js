document.querySelector( '.flash-text' ).classList.add( 'animate__animated', 'animate__flash', 'animate_slow', );
setTimeout(() => {
  document.querySelector( '.flash-text' ).classList.remove( 'animate__animated', 'animate__flash', 'animate_slow' )
}, 1000);
setTimeout(() => {
  document.querySelector( '.flash-text' ).classList.remove( 'animate__animated', 'animate__flash', 'animate__slow' )
}, 1100);
setTimeout(() => {
  document.querySelector( '.flash-text' ).classList.add( 'animate__animated', 'animate__flash', 'animate__fast')
}, 1100);
setTimeout(() => {
  document.querySelector( '.flash-text' ).classList.remove( 'animate__animated', 'animate__flash', 'animate__fast')
}, 1900);
setTimeout(() => {
  document.querySelector( '.flash-text' ).classList.add( 'animate__animated', 'animate__flash', 'animate__faster', 'animate__repeat-3')
}, 1900);