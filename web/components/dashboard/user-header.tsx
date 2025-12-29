"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { BookOpen, Menu, ChevronDown, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

const genres = [
  { name: "Fiction", href: "/books?genre=fiction" },
  { name: "Non-Fiction", href: "/books?genre=non-fiction" },
  { name: "Science Fiction", href: "/books?genre=sci-fi" },
  { name: "Fantasy", href: "/books?genre=fantasy" },
  { name: "Mystery", href: "/books?genre=mystery" },
  { name: "Thriller", href: "/books?genre=thriller" },
  { name: "Romance", href: "/books?genre=romance" },
  { name: "Biography", href: "/books?genre=biography" },
  { name: "History", href: "/books?genre=history" },
  { name: "Self-Help", href: "/books?genre=self-help" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold text-foreground">Bukupedia</span>
          </Link>

          {/* Desktop Navigation - properly spaced */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/books"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Browse
            </Link>

            {/* Genres Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Genres
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {genres.map((genre) => (
                  <DropdownMenuItem key={genre.name} asChild>
                    <Link href={genre.href} className="cursor-pointer text-sm">
                      {genre.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/categories"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Categories
            </Link>
          </nav>

          {/* Desktop Actions - properly spaced */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search */}
            {searchOpen ? (
              <div className="flex items-center gap-2 animate-in slide-in-from-right">
                <Input type="search" placeholder="Search books..." className="w-64 h-9" autoFocus />
                <Button variant="ghost" size="sm" onClick={() => setSearchOpen(false)} className="h-9 w-9 p-0">
                  ✕
                </Button>
              </div>
            ) : (
              <Button variant="ghost" size="sm" onClick={() => setSearchOpen(true)} className="h-9 w-9 p-0">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            )}

            <Button variant="outline" size="sm" asChild className="h-9 bg-transparent">
              <Link href="/auth/login">Log in</Link>
            </Button>
            <Button size="sm" asChild className="h-9">
              <Link href="/auth/register">Sign up</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex lg:hidden items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => setSearchOpen(!searchOpen)} className="h-9 w-9 p-0">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-75 sm:w-100">
                <nav className="flex flex-col gap-6 mt-8">
                  <Link
                    href="/books"
                    className="text-base font-medium hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Browse Books
                  </Link>

                  {/* Mobile Genres Section */}
                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-muted-foreground">Genres</div>
                    <div className="grid grid-cols-2 gap-2">
                      {genres.map((genre) => (
                        <Link
                          key={genre.name}
                          href={genre.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-md hover:bg-accent"
                          onClick={() => setOpen(false)}
                        >
                          {genre.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/categories"
                    className="text-base font-medium hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Categories
                  </Link>

                  {/* Mobile Auth Buttons */}
                  <div className="flex flex-col gap-3 mt-6 pt-6 border-t">
                    <Button variant="outline" asChild>
                      <Link href="/auth/login" onClick={() => setOpen(false)}>
                        Log in
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link href="/auth/register" onClick={() => setOpen(false)}>
                        Sign up
                      </Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {searchOpen && (
          <div className="lg:hidden pb-4 animate-in slide-in-from-top">
            <Input type="search" placeholder="Search books..." className="w-full" autoFocus />
          </div>
        )}
      </div>
    </header>
  )
}
