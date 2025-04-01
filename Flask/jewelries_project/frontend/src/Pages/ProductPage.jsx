import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

import ImageCarousel from "../component/image_carousel/image_carousel";
import Contact from "../component/Contact/Contact";

import { Info } from "lucide-react"

import { useParams, useRouter } from "react-router-dom";

import sendHttpRequest from "../http_call/HttpRequest";
import JewelryUrlConfig from "../service_url/JewelryUrlConfig";

export default async function ProductPage() {
    const params = useParams()
    const router = useRouter()

    const response = await sendHttpRequest(
        JewelryUrlConfig.JEWELRY_SERVICE_URL + `/${params.token}`,
        "GET")

    const product = response.json
    if (!product) {
        return (
            <div className="container flex items-center justify-center min-h-[50vh]">
                <div className="text-center">
                    <h1 className="text-2xl font-bold"> Jewelry not found</h1>
                    <p className="mt-2 text-muted-foreground">
                        The product you are looking for doesn't exist
                    </p>
                    <Button className="mt-4" onClick={
                        () => router.push("/products")
                    }>
                        Back to Products
                    </Button>
                </div>
            </div>
        )
    } else {
        const productImages = [
            product.support_picture || "/placeholder.svg?height=500&width=500",
            `/placeholder.svg?height=500&width=500&text=Image+2`,
            `/placeholder.svg?height=500&width=500&text=Image+3`,
            `/placeholder.svg?height=500&width=500&text=Image+4`,
        ]

        {////////////////////////////////////////////////////////////////
        }


        return (
            <div className="container px-4 py-12 md:px-6 md:py-16">
                {/* Product Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">{product.name}</h1>
                        <div className="flex items-center gap-4 mt-2">
                            <p className="text-2xl font-medium">${product.goldWeight}</p>
                        </div>
                    </div>
                    <Button variant="outline" onClick={() => router.push("/products")}>
                        Back to Products
                    </Button>
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column - Image and Carousel*/}
                    <div className="flex flex-col space-y-4">
                        <ImageCarousel productImages={productImages} />
                    </div>

                    {/* Right Column - Tabs */}
                    <div>
                        <Tabs defaultValue="details" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="specs">Specifications</TabsTrigger>
                                <TabsTrigger value="contact">Contact Us</TabsTrigger>
                            </TabsList>


                            {/* Specifications Tab */}
                            <TabsContent value="specs" className="pt-4">
                                <Card>
                                    <CardContent className="pt-6">
                                        <div className="grid grid-cols-1 gap-4">
                                            {product.map(([key, value]) => (
                                                <div key={key} className="flex items-start space-x-2 pb-2 border-b last:border-0">
                                                    <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <p className="font-medium capitalize">{key}</p>
                                                        <p className="text-sm text-muted-foreground">{value}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* Contact Tab */}
                            <TabsContent value="contact" className="pt-4">
                                <Card>
                                    <CardContent className="pt-6">
                                        <Contact />
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}
