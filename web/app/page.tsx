import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Star, Users, Library, Search, Heart } from "lucide-react";
import { Navbar } from "@/components/navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
              Discover your next favorite book.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Explore thousands of books across all genres. Read reviews, save
              your favorites, and join a community of passionate readers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/books">Start exploring</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/categories">Browse categories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">
                Books available
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">
                Active readers
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100K+</div>
              <div className="text-sm text-muted-foreground">
                Reviews posted
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Everything you need to discover great books
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Search</h3>
              <p className="text-muted-foreground leading-relaxed">
                Find exactly what you're looking for with our advanced search
                and filtering system. Search by title, author, genre, and more.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rate & Review</h3>
              <p className="text-muted-foreground leading-relaxed">
                Share your thoughts and help others discover great books. Rate
                books and read detailed reviews from our community.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personal Wishlist</h3>
              <p className="text-muted-foreground leading-relaxed">
                Save books you want to read later. Build your personal reading
                list and never forget about that book you heard about.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                <Library className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Curated Collections
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Explore carefully curated book collections across multiple
                genres and themes. From classics to contemporary bestsellers.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Active Community</h3>
              <p className="text-muted-foreground leading-relaxed">
                Join discussions, share recommendations, and connect with fellow
                book lovers. Be part of a thriving reading community.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Read Online</h3>
              <p className="text-muted-foreground leading-relaxed">
                Access your favorite books anytime, anywhere. Read directly in
                your browser with our clean, distraction-free reader.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Start your reading journey today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Join thousands of readers discovering amazing books every day.
          </p>
          <Button size="lg" asChild>
            <Link href="/auth/register">Create free account</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5" />
                <span className="font-semibold">Bukupedia</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your gateway to discovering and enjoying thousands of books
                online.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Explore</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/books"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    All Books
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/genres"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Genres
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Account</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/auth/login"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/auth/register"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/wishlist"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    My Wishlist
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 Bukupedia. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
