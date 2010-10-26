$( 'body' ).bind(
	'customer_created',
	function( event, event_object ) {
		$( '#notice' )
			.html( 'The customer was created and has a customer id of ' + event_object.payload.customer_id )
			.fadeOut( 7000 );
	}
);