'use client';

import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Search, Zap, Mouse, Box, Book } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';

function CatalogComparison() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      setSliderPosition(Math.min(Math.max(x, 0), 100));
    }
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const touch = event.touches[0];
      const x = ((touch.clientX - rect.left) / rect.width) * 100;
      setSliderPosition(Math.min(Math.max(x, 0), 100));
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] overflow-hidden cursor-ew-resize"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <div className="absolute inset-0 z-10">
        <Image
          src="/vercel.svg"
          alt="3D Catalog View"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div
        className="absolute inset-0 z-20"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src="/globe.svg"
          alt="2D Catalog View"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div
        className="absolute top-0 bottom-0 w-1 bg-white z-30"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 w-8 h-8 -mt-4 -ml-4 bg-white rounded-full shadow flex items-center justify-center">
          <Box className="w-4 h-4 text-blue-600" />
        </div>
      </div>
      <div className="absolute bottom-4 left-4 z-40 bg-white px-2 py-1 rounded text-sm font-semibold">2D Catalog</div>
      <div className="absolute bottom-4 right-4 z-40 bg-white px-2 py-1 rounded text-sm font-semibold">3D Catalog</div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-200 bg-white">
        <Link className="flex items-center justify-center" href="#">
          <Box className="h-6 w-6 mr-2 text-blue-600" />
          <span className="font-bold text-gray-800">3D Parts Catalog</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors" href="#">
            About
          </Link>
          <Link className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_700px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-800">
                    Revolutionize Your Parts Search with 3D Precision
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Step into the future of construction and forestry parts catalogs. Our advanced 3D technology transforms how you find, visualize, and order parts.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    Get Started
                    <Zap className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">Learn More</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <CatalogComparison />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-gray-800">Key Features</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-white rounded-lg shadow-lg">
                <Zap className="h-12 w-12 mb-2 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">Lightning Fast Search</h3>
                <p className="text-gray-600">Find the exact part you need in seconds with our powerful search engine.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-white rounded-lg shadow-lg">
                <Box className="h-12 w-12 mb-2 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">Interactive 3D Models</h3>
                <p className="text-gray-600">Explore parts in detail with our interactive 3D models for precise identification.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-white rounded-lg shadow-lg">
                <Mouse className="h-12 w-12 mb-2 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">User-Friendly Interface</h3>
                <p className="text-gray-600">Navigate our catalog with ease, designed for both experts and newcomers.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_700px]">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-800">The Evolution of Parts Catalogs</h2>
                <p className="text-gray-600 md:text-xl">
                  Say goodbye to flat, confusing diagrams. Our 3D catalog brings parts to life, allowing you to rotate, zoom, and explore every detail. Experience the leap from traditional 2D catalogs to our cutting-edge 3D technology.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Book className="h-5 w-5 mr-2 text-blue-600" />
                    <span>Traditional catalogs: Static images and complex diagrams</span>
                  </li>
                  <li className="flex items-center">
                    <Box className="h-5 w-5 mr-2 text-blue-600" />
                    <span>Our 3D catalog: Interactive models with 360° views</span>
                  </li>
                </ul>
                <Button className="bg-blue-600 text-white hover:bg-blue-700 w-fit">
                  Experience the Difference
                  <Box className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <CatalogComparison />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-gray-800">What Our Customers Say</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-2 p-6 bg-white rounded-lg shadow-lg">
                  <Zap className="h-8 w-8 text-blue-600" />
                  <p className="text-gray-600">
                    "This 3D catalog has transformed how we find and order parts. It's faster, more accurate, and actually enjoyable to use."
                  </p>
                  <p className="font-semibold text-gray-800">- Satisfied Customer {i}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Ready to Revolutionize Your Parts Search?</h2>
              <p className="text-blue-100 md:text-xl">
                Join thousands of satisfied customers who have streamlined their parts ordering process.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white border-blue-300 text-gray-800 placeholder-gray-400"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" className="bg-white text-blue-700 hover:bg-blue-100">
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-blue-100">
                  By signing up, you agree to our Terms & Conditions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-600">
          © 2024 3D Parts Catalog. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-600 hover:text-blue-600 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-600 hover:text-blue-600 transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
