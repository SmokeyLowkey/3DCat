import { Button } from "../../../components/ui/button";
import { Search, Zap, Clock, Users, BarChart, Cog, DollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-200 bg-white">
        <Link className="flex items-center justify-center" href="/">
          <Zap className="h-6 w-6 mr-2 text-blue-600" />
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
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Visualize, Identify, and Order Parts with Precision
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Experience the future of parts catalogs with our cutting-edge 3D visualization technology. Streamline your aftersales process and boost customer satisfaction.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Revolutionize Your Aftersales Experience
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col border p-4">
                <DollarSign className="h-10 w-10 text-blue-600 mb-2" />
                <h3 className="text-xl font-bold">Increase Sales</h3>
                <p>Boost customer confidence with accurate visualization.</p>
              </div>
              <div className="flex flex-col border p-4">
                <Users className="h-10 w-10 text-blue-600 mb-2" />
                <h3 className="text-xl font-bold">Enhance Support</h3>
                <p>Provide visual aids to improve customer support.</p>
              </div>
              <div className="flex flex-col border p-4">
                <Clock className="h-10 w-10 text-blue-600 mb-2" />
                <h3 className="text-xl font-bold">Save Time</h3>
                <p>Quickly identify the correct parts with our tools.</p>
              </div>
              <div className="flex flex-col border p-4">
                <BarChart className="h-10 w-10 text-blue-600 mb-2" />
                <h3 className="text-xl font-bold">Gain Insights</h3>
                <p>Track popular parts and optimize inventory.</p>
              </div>
              <div className="flex flex-col border p-4">
                <Cog className="h-10 w-10 text-blue-600 mb-2" />
                <h3 className="text-xl font-bold">Custom Integrations</h3>
                <p>Seamlessly integrate with existing systems.</p>
              </div>
              <div className="flex flex-col border p-4">
                <Zap className="h-10 w-10 text-blue-600 mb-2" />
                <h3 className="text-xl font-bold">Real-time Updates</h3>
                <p>Access the latest part information and availability.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Experience the Power of 3D Visualization
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our interactive 3D catalog brings your parts to life, allowing customers to explore every detail before making a purchase.
                </p>
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Request a Demo
                </Button>
              </div>
              <div className="lg:order-last">
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                  <Image
                    alt="3D Parts Catalog Demo"
                    className="object-cover"
                    fill
                    src="/placeholder.svg?height=400&width=600"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Aftersales Experience?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join the growing number of businesses revolutionizing their parts sales with our 3D visualization technology.
              </p>
              <Button className="bg-white text-blue-500 hover:bg-gray-200">
                Get Started Today
              </Button>
            </div>
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
