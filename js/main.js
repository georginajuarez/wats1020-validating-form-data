/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.

//Atom didn't save my work any of the times that I was hitting save the first time, agh!
//Atom was being a bit wonky. After redoing assignment stated pulling up lost assignment. Oy!

$(document).on('ready', function(){

//custom addMethod for comments
$.validator.addMethod('commentLength', function( value, element ) {
  return value.length <=500;
}, 'Must be less than 500 characters.');


    $('#order-form').validate({
        submitHandler: function(form) {
            form.submit();
        },

        rules: {
            "your-name": {
                required: true,
                maxlength: 128,
                lettersonly: true
            },

            "your-address": {
              required: true
            },

            "your-city": {
              required: true
            },

            "your-state": {
                required: true,
                maxlength: 2,
                stateUS: true,
                caseSensitive: false,
                includeTerritories: false,
                includeMilitary: false
            },

            "your-zip": {
                required: true,
                minlength: 5,
                digits: true,
                integer: true
            },

            "card-holder-name": {
                required: true,
                maxlength: 128,
                lettersonly: true,
                equalTo: "#your-name"
                //add message that card holder name needs to match your-name
            },

            "card-number": {
                required: true,
                creditcard: true
            },

            "expiry-month": {
              required: true
            },

            "expiry-year": {
              required: true
            },

            "cvv": {
                required: true,
                minlength: 3,
                digits: true
            },

            "shipping-method": {
              required: true
            },

            "comments": {
            commentLength: true
          } //Could have used maxlength but wanted to try creating my own .addMethod

        } //rules
    }); //.validate


    // Tooltips
    $('label span.glyphicon').tooltip();
}); //on ready function
