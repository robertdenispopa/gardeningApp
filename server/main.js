import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { ProductsCollection } from '../imports/api/collections/ProductsCollection';
import '../imports/api/methods/productsMethods';

const insertProduct = (product, user) => 
    ProductsCollection.insert({ 
        userId: user._id,
        name: product.name, 
        description: product.description, 
        price: product.price, 
        createdAt: new Date(),
    });

const SEED_USERNAME = 'meteorite';

var options = {
    username: 'meteorite',
    password: 'password',
    profile: {
        address:'Archis, Arad',
        usertype: 'admin',
    }
}


Meteor.startup(() => {

    if (!Accounts.findUserByUsername(SEED_USERNAME)) {
        Accounts.createUser({
            username: options.username,
            password: options.password,
            profile: {
                address: 'Archis, Arad',
                usertype: 'admin',
            }
        });
    }

    const user = Accounts.findUserByUsername(SEED_USERNAME);

    if (ProductsCollection.find().count() === 0) {
    [
        
        {
            name: 'First ', 
            description: "ceva", 
            price: 100
        },
        {   
            name: 'Second ', 
            description: "ceva", 
            price: 100
        },
    ].forEach(product => insertProduct(product, user))
}
});