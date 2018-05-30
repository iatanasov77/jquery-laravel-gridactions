/**
 * Jquery.Laragrid.Actions
 * 
 * @version 0.1
 * 
 * @author: Ivan I. Atanasov
 */

( function ( $ )
{
    $.fn.LaragridActions	= function ( options )
    {
    	var options 	= $.extend( {}, $.fn.LaragridActions.defaults, options );
    	
    	// On Delete event handler callback
    	var onDelete	= function ( event ) 
    	{
    		event.preventDefault();
    		event.stopPropagation();
    		
    		if ( ! confirm( 'Наистина ли искате да изтриете това' ) )
    			return false;
    		
    		$.ajax({
    			url:	$(this).attr( 'href' ),
    			method:	'POST',
    			data: {
    		        "_method": "DELETE"
    		    }
    		}).done( function() {
    			location.reload();
    		})
			.fail( function() {
				alert( "Error" );
			});
    	}
    	
    	if ( options.btnDelete ) {
    		console.log($(this).find( options.btnDelete ));
    		$(this).find( options.btnDelete ).on( 'click', onDelete );
    	}
    }
    
    // Set up the default options.
    $.fn.LaragridActions.defaults = {
        btnDelete:	null
    };
        
})( jQuery );
