export const MixinUserCard = {
    props: {
        username: {
            type: String,
            required: true
        }
    },
    mounted() {
        this.getUser()
    },
    methods: {
        getUser() {
            console.log(`USERNAME => ${this.username}`);
            fetch(`https://api.github.com/users/${this.username}`)
                .then(res => res.json())
                .then(data => {this.user = data})
        }
    }
}