import { Meteor } from 'meteor/meteor';
import { ProductsCollection } from '../imports/api/collections/ProductsCollection';

const insertProduct = product => ProductsCollection.insert({ name: product.name, description: product.description, price: product.price });

Meteor.startup(() => {
    if (ProductsCollection.find().count() === 0) {
    [
        {name: 'First ', description: "ceva", price: 100},
        {name: 'Second ', description: "ceva", price: 100},
        {name: 'Third ', description: "ceva", price: 100},
        {name: 'Fourth ', description: "ceva", price: 100},
        {name: 'Fifth ', description: "ceva", price: 100},
        {name: 'Sixth ', description: "ceva", price: 100},
        {name: 'Seventh ', description: "ceva", price: 100}
    ].forEach(insertProduct)
}
});