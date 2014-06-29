import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberSplitViewDemoENV.locationType
});

Router.map(function() {
  this.resource('vertical');
  this.route('horizontal');
  this.route('verticalComposite');
  this.route('horizontalComposite');
  this.route('composite');
});

export default Router;
