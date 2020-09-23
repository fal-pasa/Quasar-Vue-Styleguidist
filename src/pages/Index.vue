<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
    <custon-button color="green" icon="edit" label="Editar" />
  </q-page>
</template>

<script>
import CustonButton from 'src/components/CustonButton/CustonButton.vue'

export default {
  name: 'PageIndex',
  components: {
    CustonButton
  }
}
</script>
