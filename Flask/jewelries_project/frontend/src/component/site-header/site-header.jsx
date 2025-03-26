import Link from "next/link"
import { Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { Input } from "@/components/ui/input"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
const navigate = useNavigate()
const [searchValue, setSearchValue] = useState('')
export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background">
            <div className="container flex h-16 items-center">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w[400px]">
                        <nav className="flex flex-col gap-4">
                            <Link href="/" className="text-lg font-medium">
                                Home
                            </Link>
                            <Link href="/products" className="text-lg font-medium">
                                Products
                            </Link>
                            <Link href="/collections" className="text-lg font-medium">
                                Collections
                            </Link>
                            <Link href="/about" className="text-lg font-medium">
                                About
                            </Link>
                            <Link href="/contact" className="text-lg font-medium">
                                Contact
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="font-bold text-xl">STORE</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <Link href="/" className="transition-colors hover:text-foreground/80">
                        Home
                    </Link>
                    <Link href="/products" className="transition-colors hover:text-foreground/80">
                        Products
                    </Link>
                    <Link href="/collections" className="transition-colors hover:text-foreground/80">
                        Collections
                    </Link>
                    <Link href="/about" className="transition-colors hover:text-foreground/80">
                        About
                    </Link>
                    <Link href="/contact" className="transition-colors hover:text-foreground/80">
                        Contact
                    </Link>
                </nav>
                <div className="flex items-center space-x-4 ml-auto">
                    <form className="hidden lg:flex items-center">
                        <div className="relative">
                            <Search className="absolute left-2.5 
                            top-2.5 h-4 w-4 text-muted-foreground"
                            />
                            <Input
                                type="search"
                                name="searchKey"
                                value={searchValue}
                                onChange={setSearchValue}
                                placeholder="Search products..."
                                className="w-[200px] pl-8 rounded-lg bg-background"
                                onSubmit={() => {
                                    navigate('/product')
                                    localStorage.setItem("searchKey", searchValue)
                                }
                                    //IN THE PROGRESS OF WORKING
                                }
                            />
                        </div>
                    </form>
                </div>
            </div>
        </header>
    )
}


