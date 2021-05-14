<template>
    <div>
        <form class="signup-form" @submit.prevent="handleSubmit">
            
                <label for="username">Username</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Username"
                    required
                    v-model="toSend.username"
                />

                <label for="address">Address</label>
                <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Address"
                    required
                    v-model="toSend.profile.address"
                />
            
                <label for="usertype">UserType</label>
                <select id="usertype" name="usertype" v-model="toSend.profile.usertype">
                    <option value="Buyer" selected >Buyer</option>
                    <option value="Seller">Seller</option>
                </select>
            
                <label for="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    v-model="toSend.password"
                />
            
                <button type="submit">Create Account</button>
        </form>
    </div>
</template>

<script>
import { Meteor } from 'meteor/meteor';


export default {
    name: "SignupForm",
    data() {
    return {
        toSend:{
            username: "",
            password: "",
            profile: {
                address: "",
                usertype: "",
            }
        }
        };
    },
    
    methods: {
    handleSubmit(event) {
        Meteor.call('account.create', this.toSend);
    }
    },
}
</script>