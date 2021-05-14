import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
        
        
Meteor.methods({  
    'account.create'(toSend) {      
        if (!Accounts.findUserByUsername(toSend.username)) {
            Accounts.createUser({
                username: toSend.username,
                password: toSend.password,
                profile: {
                    address: toSend.profile.address,
                    usertype: toSend.profile.usertype,
                }
            });
        }
    }

});        