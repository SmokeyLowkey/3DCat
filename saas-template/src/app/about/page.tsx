import { Button } from "../../../components/ui/button";
import { Box } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-200 bg-white">
        <Link className="flex items-center justify-center" href="/">
          <Box className="h-6 w-6 mr-2 text-blue-600" />
          <span className="font-bold text-gray-800">3D Parts Catalog</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors" href="/features">
            Features
          </Link>
          <Link className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors" href="/pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors" href="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center mb-8">
              Our Story
            </h1>
            <p className="text-gray-500 md:text-xl text-center">
              At 3D Parts Catalog, we recognized a significant challenge faced by many in the construction and forestry industries: the difficulty in locating the right parts quickly and efficiently. Traditional parts catalogs were often cumbersome, filled with static images and complex diagrams that made it hard to identify the correct components.
            </p>
            <p className="text-gray-500 md:text-xl text-center mt-4">
              Frustrated by the inefficiencies and the time wasted in searching for parts, we set out to create a solution. Our vision was to develop a platform that would not only simplify the process of finding parts but also enhance the overall user experience. With cutting-edge 3D visualization technology, we aimed to revolutionize how parts are cataloged and accessed.
            </p>
            <p className="text-gray-500 md:text-xl text-center mt-4">
              Today, our 3D Parts Catalog empowers users to visualize, identify, and order parts with precision, saving valuable time and improving accuracy. We are committed to continuously enhancing our platform to meet the evolving needs of our customers.
            </p>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 3D Parts Catalog. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
