<template>
	<table class="standard" width="100%">
		<thead>
			<tr>
				<th @click="changeSort('Date')" :class="(sort=='Date') ? `sortable active ${order}` : `sortable`">Date</th>
				<th @click="changeSort('Ledger')" :class="(sort=='Ledger') ? `sortable active ${order}` : `sortable`">Ledger</th>
				<th @click="changeSort('Company')" :class="(sort=='Company') ? `sortable active ${order}` : `sortable`">Company</th>
				<th>{{total|format_currency}}</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="transaction in transactions">
				<td>{{transaction.Date}}</td>
				<td><strong>{{transaction.Ledger||'-'}}</strong></td>
				<td>{{transaction.Company}}</td>
				<td>{{transaction.Amount|format_currency}}</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters({
			total: 'transactions/total'
		}),
		transactions() {
			var transactions = _.each(this.$store.getters['transactions/list'], (o) => {
				// Search filters perhaps?
			})
			return _.orderBy(transactions, [this.sort], [this.order]);  ;
		}
	},
	data() {
		return {
			sort: 'Date',
			order: 'asc'
		}
	},
	methods: {
		changeSort(field) {
			if (this.sort==field) {
				this.order = (this.order=='asc') ? 'desc' : 'asc'
			} else {
				this.sort = field
			}
		}
	}
}
</script>

<style lang="scss" scoped>

/*
Regular Financial Table Styles
*/

table {
  border-collapse: collapse;
  width: 100%;
  tr {
    > th, > td {
      background: #fff;
      padding: 1rem;
      text-align: left;
    }
    > th {
      color: #008080;
      font-weight: bold;
      &.active {
        font-weight: bolder;
        text-decoration: underline;
      }
      &.asc, &.desc {

        padding-right: 10px;
        &:after {
          float: right;
          content: ' ';
          position: relative;
          left: 2px;
          border: 8px solid transparent;
        }
      }
      &.asc {
        &:after {
          top: 10px;
          border-top-color: silver;
        }
      }
      &.desc {
        &:after {
          bottom: -0px;
          border-bottom-color: silver;
        }
      }
      &.sortable {
        &:hover {
          cursor: pointer;
        }
      }
    }
    > td {
      border-top: solid 2px #f6f6f5;
    }
  }
  > tbody {
    > tr {
      &:hover {
        > td {
          color:#008080;
        }
      }
    }
  }
}



/* 
Max width before this PARTICULAR table gets nasty
This query will take effect for any screen smaller than 760px
and also iPads specifically.
*/
@media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

  /* Force table to not be like tables anymore */
  table, thead, tbody, th, td, tr { 
    display: block; 
  }
  
  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr { 
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  
  tr { border: 1px solid #ccc; }
  
  td { 
    /* Behave  like a "row" */
    border: none !important;

    padding: 0.5rem !important;
    font-size: 0.8em;

    position: relative;
    padding-left: 25% !important; 

  }
  
  td:before { 
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 8px;
    left: 10px;
    width: 45%; 
    padding-right: 10px !important; 
    white-space: nowrap;
  }
  
  /*
  Label the data
  */
  td:nth-of-type(1):before { content: "Date"; }
  td:nth-of-type(2):before { content: "Ledger"; }
  td:nth-of-type(3):before { content: "Company"; }
  td:nth-of-type(4):before { content: "Amount"; }

}
</style>


