new Vue({
  el: '#our-app',
  data: {
    message: 'Tutorial - 13 (for Loop : v-for directive)',
    students: ['niri', 'Ram', 'Sham', 'singh'],
    teachers: [
      {name: 'Teacher 1', subject: 'Subject 1', location: { street: 'Street 1', city: 'city 1' }},
      {name: 'Teacher 2', subject: 'Subject 2', location: { street: 'Street 2', city: 'city 2' }},
      {name: 'Teacher 3', subject: 'Subject 3', location: { street: 'Street 3', city: 'city 3' }},
      {name: 'Teacher 4', subject: 'Subject 4', location: { street: 'Street 4', city: 'city 4' }},
      {name: 'Teacher 5', subject: 'Subject 5', location: { street: 'Street 5', city: 'city 5' }},
    ],
  }
});
