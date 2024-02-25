export const MixinIcon = {
    props: {
        icon: {
            type: String, 
            required: false,
            default: undefined,
        },
        width: {
            type: String, 
            required: false,
            default: '2.25rem', 
        },
        height: {
            type: String, 
            required: false,
            default: '2.25rem', 
        },
        viewBox: {
            type: String, 
            required: false,
            default: '0 0 30 30',
        },
        fill: {
            type: String, 
            required: false,
            default: '',
        },

        classes: {
            type: Object, 
            required: false,
            default: {},
        },
        styles: {
            type: Object, 
            required: false,
            default: {},
        },
        ignoreDefaultClasses: {
            type: Boolean,
            required: false, 
            default: false, 
        },
        ignoreDefaultStyles: {
            type: Boolean,
            required: false, 
            default: false, 
        },
    },

    computed: {
        propsIcon() {
            return {
                icon: this.icon,
                width: this.width,
                height: this.height,
                viewBox: this.viewBox,
                fill: this.fill,
            }
        },

        classValues() {
            const defaultClasses = this.ignoreDefaultClasses ? {} : this.defaultClasses
            return { 
                ...this.classes,

                ...defaultClasses,
            }
        },

        stylesValues() {
            const defaultStyles = this.ignoreDefaultStyles ? {} : this.defaultStyles
            return { 
                ...this.styles,

                ...defaultStyles,
            }
        },

        content() {
            const icon = this.icon ?? this.defaultPathKey
            return this.pathIconTemplates[icon] ?? this.pathIconTemplates[this.defaultPathKey]
        }
    }
}
