<template>

    <div class="policy">
        <appHeader></appHeader>
        <policyCom></policyCom>
        <footerLinks></footerLinks>
    </div>

</template>

<script>
import appHeader from '../components/headerNav.vue';
import policyCom from '../components/policyComponent.vue';
import footerLinks from '../components/linksFooter.vue';

export default {
  name: 'privacyPolicy',
  components: {
    appHeader,
    policyCom,
    footerLinks

  }
}

</script>

<style scoped>

.policy {
    background: rgb(255,240,252);
background: linear-gradient(87deg, rgba(255,240,252,0.9780287114845938) 35%, rgba(255,250,252,1) 73%);
}

</style>