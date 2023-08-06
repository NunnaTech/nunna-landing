<template>
  <div
    id="contact"
    class="w-full h-full sm:h-screen sm:flex sm:items-center sm:justify-center"
  >
    <div class="py-5">
      <h1 class="text-center text-accent font-bold text-4xl sm:text-6xl mb-2">
        Contáctanos
      </h1>
      <p class="text-justify sm:text-center">
        "¿Listo para llevar tu idea al siguiente nivel? ¡Nos encantaría
        escucharte! Contáctanos hoy y descubre cómo podemos transformar tu
        visión en una solución digital efectiva. Estamos aquí para ti."
      </p>
      <form @submit="handleSubmit">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-12 my-7">
          <section>
            <input
              type="text"
              placeholder="Nombre Completo"
              class="input input-bordered bg-neutral w-full text-xl"
              v-model="formData.name"
              @blur="errors.name = ''"
            />
            <span class="ml-4 text-red-500 text-xl font-bold">{{
              errors.name
            }}</span>
          </section>
          <section>
            <input
              type="email"
              placeholder="Correo Electrónico"
              class="input input-bordered bg-neutral w-full text-xl"
              v-model="formData.email"
              @blur="errors.email = ''"
            />
            <span class="ml-4 text-red-500 text-xl font-bold">{{
              errors.email
            }}</span>
          </section>
          <section class="sm:col-span-2">
            <div class="flex flex-col">
              <textarea
                class="text-xl textarea textarea-bordered bg-neutral w-full"
                placeholder="Mensaje"
                rows="5"
                v-model="formData.message"
                @blur="errors.message = ''"
              ></textarea>
              <span class="ml-4 text-red-500 text-xl font-bold">{{
                errors.message
              }}</span>
            </div>
          </section>
        </div>
        <div class="flex justify-center">
          <button type="submit" class="w-full sm:w-auto btn btn-accent btn-lg">Enviar</button>
        </div>
      </form>
      <div
        v-if="showSuccessMessage"
        class="text-green-500 text-xl font-bold mt-7"
      >
        ¡El formulario se envió correctamente!
      </div>
    </div>
  </div>
</template>

<script>
import { API_FORM_URL } from "../constants.js";
export default {
  name: "ContactBlock",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      errors: {
        name: "",
        email: "",
        message: "",
      },
      errorsMessage: {
        name: "El nombre es requerido.",
        email: "El correo electrónico es requerido.",
        emailInvalid: "El correo electrónico no es válido.",
        message: "El mensaje es requerido.",
      },
      isSubmitting: false,
      showSuccessMessage: false,
      userAgent: "",
    };
  },
  mounted() {
    this.userAgent = navigator.userAgent;
  },
  methods: {
    validateForm() {
      this.errors.name = !this.formData.name ? this.errorsMessage.name : "";
      this.errors.email = !this.formData.email
        ? this.errorsMessage.email
        : !this.isValidEmail(this.formData.email)
        ? this.errorsMessage.emailInvalid
        : "";
      this.errors.message = !this.formData.message
        ? this.errorsMessage.message
        : "";
    },
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },

    handleSubmit(event) {
      console.log("Formulario handleSubmit");
      event.preventDefault();
      this.validateForm();
      if (!Object.values(this.errors).some((error) => error !== "")) {
        this.sendFormData();
      }
    },
    sendFormData() {
      this.isSubmitting = true;

      fetch(API_FORM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.formData.name,
          email: this.formData.email,
          message: this.formData.message,
          user_agent: this.userAgent,
          created_at: new Date(),
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
        .finally(() => {
          this.isSubmitting = false;
          this.showSuccessMessage = true;
          this.formData = {
            name: "",
            email: "",
            message: "",
          };
        });
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 5000);
    },
  },
};
</script>
