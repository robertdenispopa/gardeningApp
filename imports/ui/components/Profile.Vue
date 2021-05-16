<template>
    <div class="signup-form" @submit.prevent="handleSubmit">
        
            <label>Username: {{this.currentUser.username}}</label>
        

        
            <label>Address:{{this.currentUser.profile.address}}</label>
        
        
            <label>UserType:{{this.currentUser.profile.usertype}}</label>
        
        
            <button >Edit</button>
        
    </div>
</template>

<script>
export default {
    meteor: {
        currentUser() {
        return Meteor.user();
    }
    }
}
</script>
