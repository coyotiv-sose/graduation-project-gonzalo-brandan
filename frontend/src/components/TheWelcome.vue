<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

import axios from 'axios'

const { data: tandems } = await axios.get('http://localhost:3000/tandems')
</script>

<template>
  <h1>Tandems</h1>
  <ul>
    <li v-for="tandem in tandems" :key="tandem.id">
      {{ tandem.user?.name }} and {{ tandem.partner?.name }} have a tandem in
      {{ tandem.language }} on {{ tandem.date }} at {{ tandem.time }}.
    </li>
  </ul>
</template>
