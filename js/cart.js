App.CheckoutRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('cart');
  }
});

App.CheckoutController = Ember.ArrayController.extend({
  itemCount: Ember.computed.alias('length')
});
