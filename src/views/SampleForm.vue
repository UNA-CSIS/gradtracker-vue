<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <h1>Signup Page</h1>
          <v-form>
            <v-text-field label="Email" type="email" />
            <v-text-field label="First Name" />
            <v-text-field label="Last Name" />
            <!--v-autocomplete label="Which browser do you use?" :items="browsers" /-->
            <v-file-input label="Attach profile picture" />
            <v-text-field label="Birthday" v-model="birthday" readonly />
            <v-date-picker v-model="birthday" />
            <v-checkbox label="Agree to terms & conditions" />
            <v-btn type="submit" color="primary">Submit</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    birthday: "",
    browsers: ["Chrome", "Firefox", "Safari", "Edge", "Brave"]
  })
};
</script>
