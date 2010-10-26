$( 'body' ).bind(	'create_customer', function( event, event_object ) {
	$.get(
		'Customer.cfc?method=create',
		{"event_object" : JSON.stringify( event_object )},
		function( response ){
			$( 'body' ).trigger(
				response.name,
				response
			);				
		},
		'json'
	);
});