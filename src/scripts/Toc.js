document.querySelector( '.buttons' ).classList.add( 'animate__animated', 'animate__flash', 'animate__fast', )
document.querySelector( '.buttons' ).style.display = 'block'

setTimeout(() => {
  document.querySelector( '.buttons' ).classList.remove( 'animate__animated', 'animate__flash', 'animate__fast' )
}, 500);

setTimeout(() => {
  document.querySelector( '.buttons' ).classList.add( 'animate__animated', 'animate__flash', 'animate__faster', 'animate-repeat-2' )
}, 600);

setTimeout(() => {
  document.querySelector( '.buttons' ).style.display = 'block'
}, 1000);