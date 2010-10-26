var messages = {
	customer_created : "After creating a customer, remember to send them an email asking them to register for the company competitive sushi-eating team!"
};

$( 'body' ).bind( 'customer_created', function( event, event_object ) { 
	console.log( event );
	$( '#help' ).hide().html ( messages[ event_object.name ] ).fadeIn( 3000 );
});