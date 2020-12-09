<template>
  <v-flex>
    <v-container fluid grid-list-lg class="mt-5">
      <transactions />
    </v-container>
  </v-flex>
</template>


<script>
import transactions from "~/components/transactions.vue";

export default {
  components: { 
    transactions 
  }
};
</script>