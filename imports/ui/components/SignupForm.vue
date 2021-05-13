<template>
    <form class="signup-form" @submit.prevent="handleSubmit">
        <div>
            <label for="username">Username</label>
            <input
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                required
                v-model="username"
            />
        </div>
        <div>
            <label for="address">Address</label>
            <input
                id="address"
                name="address"
                type="text"
                placeholder="Address"
                required
                v-model="address"
            />
        </div>
        <div>
            <label for="usertype">UserType</label>
            <select v-model="usertype" />
                <option disabled value="">Please select one</option>
                <option>Buyer</option>
                <option>Seller</option>
            </select>
        </div>

    <div>
    <label for="password">Password</label>
    <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        required
        v-model="password"
    />
    </div>

    <div>
        <button type="submit">Create Account</button>
    </div>
    </form>
</template>

<script>
import { Meteor } from 'meteor/meteor';

export default {
    name: "SignupForm",
    data() {
    return {
        username: "",
        address:"",
        password: "",
        usertype:""
    };
    },
    methods: {
    handleSubmit(event) {
        if (!Accounts.findUserByUsername(this.username)) {
        Accounts.createUser({
            username: this.username,
            password: this.password,
            profile: {
                address: this.address,
                usertype: this.usertype,
            }
        });
    }
    }
    },
}
</script>