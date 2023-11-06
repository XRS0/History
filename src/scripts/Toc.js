document.querySelector( '.buttons' || '.svg' ).classList.add( 'animate__animated', 'animate__flash', 'animate__fast', )
document.querySelector( '.buttons' || '.svg' ).style.display = 'block'

setTimeout(() => {
  document.querySelector( '.buttons' || '.svg' ).classList.remove( 'animate__animated', 'animate__flash', 'animate__fast' )
}, 500);

setTimeout(() => {
  document.querySelector( '.buttons' || '.svg' ).classList.add( 'animate__animated', 'animate__flash', 'animate__faster', 'animate-repeat-2' )
}, 600);

setTimeout(() => {
  document.querySelector( '.buttons' || '.svg' ).style.display = 'block'
}, 1000);