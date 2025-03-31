import ImgCarouselControl from "./image_carousel_control"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ImageCarousel({ productImages }) {
    const { activeImageIndex, setActiveImageIndex, nextImage, prevImage } = ImgCarouselControl({ productImages })

    return (
        <> <div className="relative rounded-xel overflow-hidden aspect-square bg-muted">
            <img
                src={productImages[activeImageIndex] || "/placeholder.svg"}
                alt={`${product.name} - Image ${activeImageIndex + 1}`}
                className="object-cover object-center w-full h-full"
            />
            {/* Navigation Arrows*/}
            <div className="absolute inset-0 flex-items-center justify-between p-2">
                <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full opacity-70 hover:opacity-100"
                    onClick={prevImage}>

                    <ChevronLeft className="h-6 w-6" />
                    <span className="sr-only"> Previous image</span>
                </Button>

                <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full opacity-70 hover:opacity-100"
                    onClick={nextImage}>

                    <ChevronRight className="h-6 w-6" />
                    <span className="sr-only"> Next image</span>
                </Button>
            </div>
        </div>
            {/* Thumbnail Carousel */}
            <div className="flex space-x-2 justify-center">
                {productImages.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={
                            `relative w-16 h-16 rounded-md overflow-hidden border-2 transition-all 
                                        ${activeImageIndex === index ?
                                "border-primary ring-2 ring-primary ring-offset-2" :
                                "border-muted hover:border-primary/50"}`
                        }
                    >
                        <img
                            src={image || "/placeholder.svg"}
                            alt={`Thumbnail ${index + 1}`}
                            className="object-cover object-center w-full h-full"
                        />
                    </button>
                ))}
            </div>
        </>
    )

}