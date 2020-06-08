
<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card
            class="pa-md-4 mb-4 mx-auto"
            elevation="10"
            color="grey lighten-3"
            width="50%"
            v-for="student in students"
            :key="student.id"
          >
            <v-card-title
              class="headline primary--text"
              primary-title
            >{{ student.firstName + " " + student.lastName }}</v-card-title>

            <v-row>
              <v-col xs12 md6>
                <div class="caption grey--text text--darken-2">Student ID</div>
                <div>{{ student.studentID }}</div>
              </v-col>

              <v-col xs12 md6>
                <div class="caption grey--text text--darken-2">Major</div>
                <div>{{ student.major }}</div>
              </v-col>
              <v-col xs12 md6>
                <div class="caption grey--text text--darken-2">Email</div>
                <div>{{ student.email }}</div>
              </v-col>
              <v-col xs12 md6>
                <div class="caption grey--text text--darken-2">Phone</div>
                <div>{{ student.phone }}</div>
              </v-col>
              <v-col xs12 md6>
                <div class="caption grey--text text--darken-2">Employer</div>
                <div>{{ student.employer }}</div>
              </v-col>
              <v-col xs12 md6>
                <div class="caption grey--text text--darken-2">Birthday</div>
                <div>{{ student.birthday }}</div>
              </v-col>
              <v-col xs12 md6>
                <div class="caption grey--text text--darken-2">Employed</div>
                <div>{{ student.employed }}</div>
              </v-col>

              <v-col xs12 md6>
                <div class="caption grey--text text--darken-2">Semester</div>
                <div>{{ student.semesters }}</div>
              </v-col>
              <v-col xs12 md6>
                <div class="caption grey--text text--darken-2">Position</div>
                <div>{{ student.position }}</div>
              </v-col>

              <v-col xs12 md6>
                <div class="caption grey--text text--darken-2">Grad Year</div>
                <div>{{ student.graduation }}</div>
              </v-col>
              <v-col xs12 md6>
                <div class="caption grey--text text--darken-2">Resume</div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import db from "@/fb2";
//import firebase from "firebase";
export default {
  data() {
    return {
      students: []
    };
  },
  methods: {
    sortBy(prop) {
      this.students.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  },
  // }
  // Pull updated data from database
  created() {
    db.collection("Student").onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        if (change.type === "added") {
          this.students.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
  } // end created
}; // end export default
</script>

