import Vue from 'vue'


/* Future Functionality for Different Currencies */
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

Vue.filter('format_currency', val => formatter.format(val))