import { Meteor } from 'meteor/meteor';
import { CartCollection } from '../collections/CartCollection';

Meteor.publish('Cart', function publishCart() {
    return CartCollection.find({ userId: this.userId });
});