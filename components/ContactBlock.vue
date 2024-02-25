<template>
  <div
      id="contact"
      class="w-full sm:flex sm:items-center sm:justify-center"
  >
    <div class="py-5">
      <h1 class="my-5 text-center text-accent font-bold text-4xl sm:text-6xl" v-t="'NavBar.3.label'"/>
      <p class="my-4 font-light text-justify sm:text-center" v-t="'Contact.description'"/>
      <form class="my-4" @submit="handleSubmit">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-12">
          <section>
            <input
                type="text"
                :placeholder="$t('Contact.form.name')"
                class="input input-bordered bg-neutral w-full text-xl"
                v-model="formData.name"
                @blur="errors.name = ''"
            />
            <span class="ml-4 text-red-500 text-xl font-bold">{{errors.name}}</span>
          </section>
          <section>
            <input
                type="email"
                :placeholder="$t('Contact.form.email')"
                class="input input-bordered bg-neutral w-full text-xl"
                v-model="formData.email"
                @blur="errors.email = ''"
            />
            <span class="ml-4 text-red-500 text-xl font-bold">{{errors.email}}</span>
          </section>
          <section class="sm:col-span-2">
            <div class="flex flex-col">
              <textarea
                  class="text-xl textarea textarea-bordered bg-neutral w-full"
                  :placeholder="$t('Contact.form.message')"
                  rows="5"
                  v-model="formData.message"
                  @blur="errors.message = ''"
              />
              <span class="ml-4 text-red-500 text-xl font-bold">{{errors.message}}</span>
            </div>
          </section>
        </div>
        <div class="flex justify-center">
          <button type="submit" class="w-full my-4 sm:w-auto btn btn-accent btn-lg" role="button" aria-label="Enviar"
                  aria-labelledby="Enviar" v-t="'Contact.form.send'"/>
        </div>
      </form>

      <div v-if="showSuccessMessage" role="alert" class="alert alert-success">
        <MdiIcon icon="mdiCheckCircle" />
        <span class="w-100 text-end" v-t="'Contact.form.success'" />
      </div>
      
      <div v-if="showErrorMessage" role="alert" class="alert alert-error">
        <MdiIcon icon="mdiAlphaXCircle" />
        <span class="w-100 text-end" v-t="'Contact.form.error'" />
      </div>
    </div>
  </div>
</template>

<style>
  svg {
    width: 2.25rem;
  }
</style>

<script>
import {MixinContactBlock} from "../mixins/MixinContactBlock";
import {ContactBlockData} from "../data-components/ContactBlockData";

export default {
  name: "ContactBlock",
  data() {
    return ContactBlockData;
  },
  mixins:[MixinContactBlock]
};
</script>
