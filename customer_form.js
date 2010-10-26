$( '#customer_form' ).submit(function( e ){
	console.log( event( 'create_customer', formToObject( this ) ) );
  $( '#customer_form' ).trigger( 'create_customer' , event( 'create_customer', formToObject( this ) ) );
  e.preventDefault();
});
