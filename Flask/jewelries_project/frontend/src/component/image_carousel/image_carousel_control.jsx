
const ImgCarouselControl =({productImages}) =>{
const [activeImageIndex, setActiveImageIndex] = useState(0)

function nextImage(){
    setActiveImageIndex((prev) => (prev + 1) % productImages.length)
}

function prevImage(){
    setActiveImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
}

return {activeImageIndex, setActiveImageIndex, nextImage, prevImage}
}

export default ImgCarouselControl
