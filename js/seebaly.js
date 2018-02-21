var stripe = Stripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
var elements = stripe.elements();

var style = {
    base: {
      // Add your base input styles here. For example:
      fontSize: '16px',
      color: "#32325d",
    }
  };
  
  // Create an instance of the card Element
  var card = elements.create('card', {style: style});
  
  // Add an instance of the card Element into the `card-element` <div>
  card.mount('#card-element');