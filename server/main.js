import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { ProductsCollection } from '../imports/api/collections/ProductsCollection';

const insertProduct = (product, user) => 
    ProductsCollection.insert({ 
        name: product.name, 
        description: product.description, 
        price: product.price, 
        createdAt: new Date(),
    });

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';


Meteor.startup(() => {

    if (!Accounts.findUserByUsername(SEED_USERNAME)) {
        Accounts.createUser({
            username: SEED_USERNAME,
            password: SEED_PASSWORD,
        });
    }

    const user = Accounts.findUserByUsername(SEED_USERNAME);

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