<cfcomponent displayname="Customer" output="false" hint="I am a Customer controller">
	<cffunction 
		name="create" 
		access="remote" 
		output="false" 
		returnformat="json" 
		hint="I create a new customer">
		
		<cfset args = DeserializeJSON( arguments.event_object )>
		
		<!--- Code for creating object, persisting to the DB, etc would go here.
		For now, I'm simulating getting back a customer ID of 1001 --->
		
		<cfreturn {
			'name' = "customer_created",
			'id' = CreateUUID(),
			'payload' = {
				'customer_id' = 1001,
				'customer_name' = args.payload.customer_name
			}
		}>
	</cffunction>
</cfcomponent>