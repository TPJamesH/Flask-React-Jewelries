import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "react-router-dom";
import sendHttpRequest from "../http_call/HttpRequest";
import JewelryUrlConfig from "../service_url/JewelryUrlConfig";
export default async function ProductPage() {
    const params = useParams()
    const router = useRouter()
    const product = await sendHttpRequest(
        JewelryUrlConfig.JEWELRY_SERVICE_URL + `/${params.token}`,
        "GET")

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
    }

    const attributes = {
        goldWeight: product.goldWeight,
        stoneWeight: product.stoneWeight,
        totalWeight: product.totalWeight,
        type: product.type,
        provider: product.provider
    }
    {////////////////////////////////////////////////////////////////
    }

    return (
        <div className="container px-4 py-12 md:px-6 md:py-16">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                <div className="flex justify-center">
                    <img
                        src={product.picture || "/placeholder.svg"}
                        alt={product.name}
                        className="aspect-square overflow-hidden rounded-xl object-cover object-center"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="flex flex-col space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">{product.name}</h1>
                    </div>
                    <Separator />

                    <div className="space-y-4">
                        <h3 className="font-medium">Product Specifications</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Object.entries(attributes).map(([key, value]) => (
                                <div key={key} className="flex items-start space-x-2">
                                    <Info className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-medium capitalize">{key}</p>
                                        <p className="text-sm text-muted-foreground">{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Separator />
                    <div className="pt-4">
                        <Button onClick={() => router.push("/products")}>Back to Products</Button>
                    </div>
                </div>
            </div>
        </div>
    )

}