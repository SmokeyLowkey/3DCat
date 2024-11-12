import { Button } from "../../../components/ui/button";
import { Box } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
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
          <div className="container mx-auto px-4 md:px-6"> {/* Centered with auto margins */}
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center mb-8">
              Get in Touch
            </h1>
            <p className="text-gray-500 md:text-xl text-center mb-4">
              We would love to hear from you! Please fill out the form below to reach out to us.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700" htmlFor="name">Name</label>
                <input className="mt-1 block w-full border border-gray-300 rounded-md p-2" type="text" id="name" required />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor="email">Email</label>
                <input className="mt-1 block w-full border border-gray-300 rounded-md p-2" type="email" id="email" required />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor="message">Message</label>
                <textarea className="mt-1 block w-full border border-gray-300 rounded-md p-2" id="message" rows={4} required></textarea>
              </div>
              <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700">Send Message</Button>
            </form>
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
