<script>
import { mapActions } from 'pinia'
import { useUserStore } from '../stores/user'

export default {
  name: 'UsersView',
  data() {
    return {
      users: []
    }
  },
  async created() {
    this.users = await this.fetchUsers()
  },
  methods: {
    ...mapActions(useUserStore, ['fetchUsers'])
  }
}
</script>

<template lang="pug">
.container
  .row
    .card(style='width: 18rem;', v-for="user in users" :key="user._id" class="col-12 col-md-4 col-lg-3")
      div.container-header
        img.card-img-top(src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACjCAMAAADRsl6yAAAAMFBMVEXh4eGjo6OgoKDk5OSoqKjW1tbd3d3Z2dnQ0NCdnZ3CwsKwsLDHx8erq6u7u7u3t7e/zzTGAAADw0lEQVR4nO2cXXujIBBGhQFEPv//v92gadNsGsOkg2N359zU3p0HAuLMq9MkCIIgCIIgCIIgCP8RME2ztXZer04IOJ+i0RumJu/O5gk2ZKW1+uBymYM9laUtX/xunsVyi90I6tFwtVSBW20D5vi94WoZ5xNMOKTlueJFcknskpB2BDe4JTsU2SX93jx/zrdnNARrOhSVMow7pdtZ0XcDGR2XIoQ+RaWWwDSQMHcaNri2yYJwLDyKc9+C2TAzhyKk3l9jQ7NskmBQjoblB7kgFC9Lm8HwcpbAOXJMdsFM9WWyOVZ2RCkqFY9XdJidp5GPvx+iHc3hjmCRikodfvgRRyJQd+sGwx3bZaQjw7r+Dftj/yF8QzMcxcEj79ee4+Bz/nPPBJ0Phdepjixn3F9wDr/sPv2SmmPnaSBWtuYqRCKOPscfeq5AV0VqHUaWjWejdtZ7Kpthb1GKsSTVmL/pJzwoapYaxSfgn7QUvigqxh/jVfJFuUIbbsV2IN/dynU+R7erPJ1vrepJ2obgnwylzvzzfCOph06SXlTi1roDwJfWeF23ovVPLh5ONIgrMM0+lJiNMTmW4Odz9tnXcXPOfVwKgiAIgiD8m8DG3dWJaEbO+hRCKbXWUkJI3rqziDYL60M0Zo0/XjOaawDSmBi85T5LwuR8qlktT2JxellUbpFSrjP5ZXqbn35RTVmfbWpyHKNpg1n6q/bLYsKhoVIAG6LqqEbdj6eKwR42mh4teNM8IsIHc8pvCX5o5jQ41gVT+Inh1TIMXeYJlTt6qmmGFVnAR1z77TlLHFKsAnhewsOjVaFf4mAz1SBuLOTF05clZTzUReiuiDUeyj7nIEVKyf6eGxa6Hh0+ytMP1UGjsyv4DkSdxHEzvUqSzDYg2v1vOGYCR7C0e/ffLARbOTZrhIUkm1SHKipFsGocNleGhaABj81YYyHJZOPyUFho8lNvJEYxEJ3Q/EBFqudEQEbq+9GF7nQ26I5NmvvpfbkMqUib+5nJHxXawwJt7gfcgOcZ6jgIWGJJPeDFSOKRpB/FVXLvPWu04qj3sl0lq6XUcUk+zFuPe4x8b6ojpvea0UG+Fwm4LsUDUnLpR0OpDwl4gf3B3VvXo6KG75ZzBxZwHwAX3rDUJhwahoQ5aOR7Hzoc/p44QIrdq0ermFhamzD5knc/8nEVXHLxbEnD1netZq+ruX7Lh6/vetUE50PN5qH/2v43uQbP0nF91JycTaF8fgVp/RJSLCFZd7KwZrNx7XNS1s6Ou/svCIIgCIIgCIIgCIfyB9y8JoFPUhGqAAAAAElFTkSuQmCC' alt='Avatar placeholder')
        h5.card-title {{ user?.name }}
      .card-body
        p.card-text
          | Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
        a.btn.btn-primary(href='#') See availabilities
</template>
<style scoped>
.card-img-top {
  width: 5rem;
}
.container-header {
  display: flex;
  justify-content: space-around;
  /* play it with margins */
  padding-top: 1rem;
}

.card {
  margin: 1rem;
}
</style>
