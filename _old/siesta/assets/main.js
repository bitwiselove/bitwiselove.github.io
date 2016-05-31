new WOW().init();

var toggleCartVisbility = function() {
  $('.js-cart').toggleClass('is-visible');
};

var updateCartTotal = function() {
  console.log('TODO: Implement Cart.js');
};

$('.js-burger').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('is-active');
  $('.js-mobileNav').toggleClass('is-visible');
});

$('.js-cartToggle').on('click', function(e) {
  e.preventDefault();
  toggleCartVisbility();
});

$('.js-remove-cart-item').on('click', function(e) {
  e.preventDefault();

  var $parent = $(this).closest('.c-Cart__row');
  var itemId = $parent.data('item-id');
  var itemPrice = parseFloat($parent.data('item-price'));
  var itemQuantity = parseInt($parent.data('item-quantity'));

  console.log('TODO: Remove item from cart in Shopify:', itemId);

  $parent.remove();

  updateCartTotal();
});
