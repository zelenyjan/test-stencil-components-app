<script setup>
import {ref} from "vue";
import {GreenButton, GreenInput} from "@zelenyjan/stencil-vue-sample-vue/dist";
import {GovButton, GovFormInput} from "@gov-design-system-ce/vue";

const value = ref("Default value for H1, button and input")
const govValue = ref("Gov default value")

const setToDefault = (e) => {
  console.log(e)
  value.value = "Default value for H1, button and input"
}

const setToGovDefault = (e) => {
  console.log(e)
  govValue.value = "Gov default value"
}

</script>

<template>
  <div style="padding: 20px; background: #d7a0a0">
    <h1>{{ value }}</h1>
    <GreenButton :label="value" @click="setToDefault"></GreenButton>
    <GreenInput v-model="value"></GreenInput>
  </div>
  <hr>
  <hr>
  <hr>
  <hr>
  <div style="padding: 20px; background: #aab3f1">
    <div>GOV komponenty</div>

    <h1>{{ govValue }}</h1>
    <GovButton size="xl" variant="primary" type="solid" native-type="button" wcag-label="Klikni na mě a uvidíš zázrak!"
               @click="setToGovDefault">{{ govValue }}
    </GovButton>
    <GovFormInput v-model="govValue" variant="primary"></GovFormInput>
  </div>
</template>
