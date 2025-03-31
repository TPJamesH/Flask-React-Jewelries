import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail } from "lucide-react"
import Contact_Control from "./Contact_control"

export default function Contact() {
    const {formData, setFormData, isSubmitting, setIsSubmitting, handleInputChange, handleCheckboxChange, handleSubmit} = Contact_Control()
    return (
        <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <h3 className="font-medium">Interested in this product?</h3>
            </div>
            <p className="text-sm text-muted-foreground">
                Leave your contact information and we'll reach out with more details about this product, including
                special offers and availability updates.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(123) 456-7890"
                        required
                    />
                </div>

                <div className="flex items-start space-x-2">
                    <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={handleCheckboxChange}
                        required
                    />
                    <Label htmlFor="consent" className="text-sm font-normal">
                        I agree to be contacted about this product and related offers
                    </Label>
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
            </form>
        </div>
    )
}