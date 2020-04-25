<template>  
    <v-container> <!-- provides the ability to center and horizontally pad your site's contents. -->
      <v-row class="text-center">   <!--Centers text on screen --> 
        <v-col cols="12">

          <!-- Below is the code used to add UNA image into Home page -->
           <!--   <v-img          
                :src="require('../assets/UNALogo.png')"
                class="my-4"
                contain      
                height="200"
              />    -->

            </v-col>

              <template>
                <v-row>
                  <v-col cols="12">
                    <v-card>
                      <v-col class="mb-4">
              <h1 class="display-2 font-weight-bold mb-3">      <!--makes the text below bold -->
                Welcome to the GradTracker 
              </h1>
              <v-img          
                :src="require('../assets/UNALogo.png')"
                class="my-4"
                contain      
                height="200"
              />  
        </v-col>
                      <v-card-title>
                        Student Search
                        <v-spacer></v-spacer>
                        <v-text-field
                          v-model="search"
                          append-icon="mdi-magnify"
                          label="Search"
                          single-line
                          hide-details
                        ></v-text-field>
                      </v-card-title>
                      <v-data-table
                        :headers="headers"
                        :items="students"
                        :items-per-page="5"
                        :search="search"
                        class="elevation-1"            
                      >
                      <template v-slot:item.actions="{ item }">
                          <v-icon
                            small
                            class="mr-2"
                            @click="editItem(item)"
                          >
                            mdi-pencil
                          </v-icon>
                          <v-icon
                            small
                            @click="deleteItem(item)"
                          > 
                            mdi-delete
                          </v-icon>
                          </template>
                      </v-data-table>
                    </v-card>
                  </v-col>
                </v-row>
              </template>
          
      </v-row>
    </v-container>  
</template>

<script>
export default {
    data () {
          return {
            search: '',
            headers: [
              {
                text: 'Name',
                align: 'start',
                sortable: true,
                value: 'name',
              },
              { text: 'Graduation Year', value: 'gradYear', sortable: true },
              { text: 'Phone Number', value: 'phone', sortable: false },
              { text: 'Email', value: 'email', sortable: false },
              { text: 'Major', value: 'major', sortable: true },
              { text: 'Employer', value: 'employer', sortable: true },
              { text: 'Edit/Delete', value: 'actions', sortable: false}
            ],
            students: [
              {
                name: 'Jim Jackson',
                gradYear: 2016,
                phone: '256-493-3443',
                email: 'johndoe@email.com',
                major: 'art',
                employer: 'UNA',
              },
              {
                name: 'Kendra Montgomery',
                gradYear: 2014,
                phone: '931-555-8969',
                email: 'johndoe@email.com',
                major: 'criminal justice',
                employer: 'None',
              },
              {
                name: 'Michael Turner',
                gradYear: 2012,
                phone: '931-555-1154',
                email: 'johndoe@email.com',
                major: 'finance',
                employer: 'SAIC',
              },
              {
                name: 'Bill Turner',
                gradYear: 2020,
                phone: '256-555-1548',
                email: 'johndoe@email.com',
                major: 'accounting',
                employer: 'Netflix',
              },
              {
                name: 'Kobe Bryant',
                gradYear: 2011,
                phone: '631-545-5486',
                email: 'johndoe@email.com',
                major: 'pre-med',
                employer: 'None',
              },
              {
                name: 'Jelly Bean',
                gradYear: 2014,
                phone: '631-249-6545',
                email: 'johndoe@email.com',
                major: 'computer science',
                employer: 'Hexagon',
              },
              {
                name: 'Lebron James',
                gradYear: 2019,
                phone: '256-777-6543',
                email: 'johndoe@email.com',
                major: 'public relations',
                employer: 'None',
              },
              {
                name: 'Kevin Durant',
                gradYear: 2013,
                phone: '256-777-8598',
                email: 'johndoe@email.com',
                major: 'crminal justice',
                employer: 'Madison City',
              },
            ]
          }    
        },
      
  name: "HelloWorld"
}

</script>