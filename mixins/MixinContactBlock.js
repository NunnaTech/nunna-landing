import {API_FORM_URL} from "../constants";

export const MixinContactBlock = {
    mounted() {
        this.userAgent = navigator.userAgent;
        this.errorsMessage = {
            name: this.$t('Contact.form.errorsMessages.name'),
                email: this.$t('Contact.form.errorsMessages.email'),
                emailInvalid: this.$t('Contact.form.errorsMessages.emailInvalid'),
                message: this.$t('Contact.form.errorsMessages.message'),
        }
    },
    methods: {
        validateForm() {
            this.errorsMessage.name = this.$t('Contact.form.errorsMessages.name');
            this.errorsMessage.email = this.$t('Contact.form.errorsMessages.email');
            this.errorsMessage.emailInvalid = this.$t('Contact.form.errorsMessages.emailInvalid');
            this.errorsMessage.message = this.$t('Contact.form.errorsMessages.message');
            this.errors.name = !this.formData.name ? this.errorsMessage.name : "";
            this.errors.email = !this.formData.email ? this.errorsMessage.email: !this.isValidEmail(this.formData.email) ? this.errorsMessage.emailInvalid : "";
            this.errors.message = !this.formData.message
                ? this.errorsMessage.message
                : "";
        },
        isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },

        handleSubmit(event) {
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
}