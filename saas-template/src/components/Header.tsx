import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import Link from 'next/link';
import { Box } from 'lucide-react';

export default function Header() {
  return (
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
        <SignedOut>
          <div className=" text-sm bg-blue-600 text-white rounded-full px-2 py-0 hover:bg-blue-700">
            <SignInButton>
              Sign In
            </SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  );
}
