export default function Contact_Control() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        consent: false

    })

    const [isSubmitting, setIsSubmitting] = useState(false)


    function handleInputChange() {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }
    //check: boolean
    function handleCheckboxChange(checked) {
        setFormData((prev) => ({
            ...prev, consent: checked
        }))
    }

    //e:React.FormEvent
    function handleSubmit(e) {
        e.preventDefault()
        setIsSubmitting(true)

        setTimeout(() => {
            setIsSubmitting(false)
            toast({
                title: "Contact information submitted",
                description: "We will get back to you soon"
            })
            setFormData({
                name: "",
                phone: "",
                consent: false
            })
        }, 1000)

    }

    return {formData, setFormData, isSubmitting, setIsSubmitting, handleInputChange, handleCheckboxChange, handleSubmit}
}