import { Button } from "../../../components/ui/button";
import { Check, Zap, Clock, Users, Box } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Pricing Plans</h1>
        <p className="text-xl text-gray-600 text-center mb-12">Choose the plan that best fits your needs and start saving time today</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col h-full">
            <div className="flex flex-col border p-4 flex-grow">
              <h2 className="text-xl font-bold">Starter</h2>
              <p>For small teams or departments</p>
              <div className="text-4xl font-bold mb-4">$299<span className="text-xl font-normal text-gray-600">/month</span></div>
              <ul className="space-y-2 flex-grow">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Up to 5 users</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Basic 3D catalog features</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Save 10+ hours per week</span>
                </li>
              </ul>
            </div>
            <Button className="mt-4">Get Started</Button>
          </div>
          <div className="flex flex-col h-full">
            <div className="flex flex-col border p-4 flex-grow">
              <h2 className="text-xl font-bold">Pro</h2>
              <p>For medium-sized businesses</p>
              <div className="text-4xl font-bold mb-4">$799<span className="text-xl font-normal text-gray-600">/month</span></div>
              <ul className="space-y-2 flex-grow">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Up to 20 users</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Advanced 3D modeling and search</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Save 25+ hours per week</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Priority support</span>
                </li>
              </ul>
            </div>
            <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Get Started</Button>
          </div>
          <div className="flex flex-col h-full">
            <div className="flex flex-col border p-4 flex-grow">
              <h2 className="text-xl font-bold">Enterprise</h2>
              <p>For large organizations</p>
              <div className="text-4xl font-bold mb-4">Custom</div>
              <ul className="space-y-2 flex-grow">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Unlimited users</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Full 3D catalog customization</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Save 50+ hours per week</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  <span>Custom integrations</span>
                </li>
              </ul>
            </div>
            <Button className="mt-4" variant="outline">Contact Sales</Button>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our 3D Parts Catalog?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Save Valuable Time</h3>
              <p className="text-gray-600">Reduce part search time by up to 80% with our intuitive 3D interface</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Zap className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Increase Efficiency</h3>
              <p className="text-gray-600">Streamline your parts ordering process and reduce errors</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Improve Collaboration</h3>
              <p className="text-gray-600">Enhance communication between teams with shared 3D models</p>
            </div>
          </div>
        </div>
        <div className="mt-16 bg-blue-700 text-white rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to transform your parts catalog?</h2>
              <p className="text-xl mb-4 md:mb-0">Start your 14-day free trial today. No credit card required.</p>
            </div>
            <Button className="bg-white text-blue-700 hover:bg-gray-100">Start Free Trial</Button>
          </div>
        </div>
      </main>
      <footer className="bg-white border-t border-gray-200 py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Box className="h-6 w-6 mr-2 text-blue-600" />
              <span className="font-bold text-gray-800">3D Parts Catalog</span>
            </div>
            <nav className="flex gap-4">
              <Link className="text-sm text-gray-600 hover:text-blue-600 transition-colors" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm text-gray-600 hover:text-blue-600 transition-colors" href="#">
                Privacy Policy
              </Link>
              <Link className="text-sm text-gray-600 hover:text-blue-600 transition-colors" href="#">
                Contact Us
              </Link>
            </nav>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            © 2024 3D Parts Catalog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
