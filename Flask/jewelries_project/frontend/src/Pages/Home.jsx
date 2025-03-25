import { Button } from "@/components/ui/button";
import Link from "next/link";
import { JewelryCard } from "../component/guest-jewelry-list/child-component/jewelry-card";
import sendHttpRequest from "../../../http_call/HttpRequest";
import JewelryUrlConfig from "../../../service_url/JewelryUrlConfig";

export default async function Home() {
    const response = await sendHttpRequest(JewelryUrlConfig.JEWELRY_SERVICE_GETALL)
    let products = response.json.jewelry_list
    let i = 0
    products.forEach((element) => {
        element.token = response.json.token[i];
        i++;
    })

    const featuredProducts = products.slice(0, products.length / 2)
    const newArrivals = products.slice(products.length / 2, products.length - 1);

    return (
        <div className="flex flex-col min-h-screen">
            <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Discover Our Latest Collection
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    Find your perfect style here
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link href="/products">
                                    <Button size="lg">Shop Now</Button>
                                </Link>
                            </div>
                        </div>
                        <img
                            src="/placeholder.svg?height=550&width=550"
                            alt="Hero Image"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                            width={550}
                            height={550}
                        />
                    </div>
                </div>
            </section>

            {/*Featured Products*/}
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Products</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Our most popular items, hand-picked for you.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
            {/* New Arrivals */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">New Arrivals</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                The latest additions to our collection.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-4">
                        {newArrivals.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <Link href="/products">
                            <Button variant="outline" size="lg">
                                View All Products
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}