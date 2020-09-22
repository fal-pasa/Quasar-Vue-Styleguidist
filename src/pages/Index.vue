<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
    <custon-buttom color="green" icon="edit" label="Editar" />
  </q-page>
</template>

<script>
import CustonButtom from 'src/components/custon-buttom/CustonButtom'
export default {
  name: 'PageIndex',
  components: {
    CustonButtom
  }
}
</script>
