import { Button } from "@/components/ui/button"
import Link from "next/link"
export function JewelryCard({ product }) {
    return (
        <Link href={`/jewelry/${product.token}`}
            className="group relative overflow-hidden rounded-lg border" >
            <div className="aspect-square overflow-hidden">
                <img
                    src={product.picture || "/placeholder.svg"}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
            </div>
            <div className="p-4">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-muted-foreground"> <b>Gold Weight: </b> {product.goldWeight}</p>
            </div>
        </Link>
    )
}