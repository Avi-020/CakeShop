"use client";

import React from "react";
import Image from "next/image";
import Head from "next/head";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Homepage() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  const handleImageLoad = () => {
    setLoading(false);
  };
  const products = [
    {
      name: "Birthday Cake in all Flavours",
      image: "/images/cake1.jpg",
      price: "Starting From 200 Rs",
    },
    {
      name: "Chocolate bars",
      image: "/images/cake3.jpg",
      price: "Starting From 50 Rs",
    },
    {
      name: "Pastries",
      image: "/images/cake2.jpg",
      price: "Starting From 60 Rs",
    },
    {
      name: "snacks",
      image: "/images/cake4.jpg",
      price: "Starting From 30 Rs",
    },
  ];

  return (
    <div>
      <div className="bg-pink-50 text-gray-800">
        <Head>
          <title>Food Delivery</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>

        {/* Navbar */}
        <header className="bg-pink-50 py-5">
          <div className="container mx-auto flex items-center justify-between px-6">
            <div className="flex items-center space-x-2">
              <Image
                className="mt-2 ml-5"
                src="/images/LOGO.png"
                alt="Logo"
                width={100}
                height={100}
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-pink-600 font-medium">
                Home
              </a>
              <a href="#" className="hover:text-pink-500">
                Menu
              </a>
              <a href="#" className="hover:text-pink-500">
                Services
              </a>
              <a href="#" className="hover:text-pink-500">
                Delivery
              </a>
              <a href="#" className="hover:text-pink-500">
                Contact
              </a>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600">
                Order Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Full-Screen Mobile Navigation */}
          {isOpen && (
            <div className="fixed inset-0 bg-pink-100 flex flex-col items-center justify-center space-y-6 shadow-md z-50">
              <button
                className="absolute top-5 right-5"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>
              <a href="#" className="text-pink-600 font-medium text-xl">
                Home
              </a>
              <a href="#" className="hover:text-pink-500 text-xl">
                Menu
              </a>
              <a href="#" className="hover:text-pink-500 text-xl">
                Services
              </a>
              <a href="#" className="hover:text-pink-500 text-xl">
                Delivery
              </a>
              <a href="#" className="hover:text-pink-500 text-xl">
                Contact
              </a>
              <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 text-xl">
                Order Now
              </button>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className=" mt-5 mb-5 container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
          {/* Left Section - Text and Buttons */}
          <div className="md:w-1/2 text-center md:text-left ml-5">
            <h2 className="text-3xl md:text-5xl font-bold text-pink-600">
              Sweetbitezz &#8211; Where Every Bite is a Delight!
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Sweetbitezz brings you freshly baked delights made with love and
              the finest ingredients. Celebrate every occasion with our
              irresistible cakes and sweet treats! Delicious cakes and snacks at
              your doorstep
            </p>
            <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
              <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600">
                Explore Menu
              </button>
              <button className="bg-gray-200 px-6 py-3 rounded-lg hover:bg-gray-300">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-3/5 flex justify-center mt-8 md:mt-0">
            <Image
              src="/images/HeroIMG1.svg"
              alt="heroimg"
              width={900}
              height={900}
              className="rounded-md"
            />
          </div>
        </section>

        {/* Featured Cakes Section */}
        <h3 className="text-4xl font-bold text-center text-pink-600 mt-20 mb-5">
          Why choose Us
        </h3>
        <section className="container pt-5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          <div className="bg-pink-400 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold">
              Food you love, delivered to you
            </h3>
            <p className="mt-2 text-sm">
              Fresh and delicious baked goods, straight to your home. Every
              treat is crafted with love, using the finest ingredients for the
              perfect taste. Indulge in sweetness, delivered just for you!{" "}
            </p>
            <button className="mt-4 bg-white text-pink-500 px-4 py-2 rounded-lg">
              Order Now
            </button>
          </div>
          <div className="bg-pink-500 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold">Have you tried our new cake?</h3>
            <p className="mt-2 text-sm">
              Indulge in the rich taste of our latest cake flavors. From classic
              favorites to unique creations, every bite is a delightful
              experience{" "}
            </p>
            <button className="mt-4 bg-white text-pink-500 px-4 py-2 rounded-lg">
              Order Now
            </button>
          </div>
        </section>

        {/* Product Cards */}
        <h3 className="text-4xl font-bold text-center text-pink-600 mt-20 mb-5">
          We Offer You Different Tastes{" "}
        </h3>
        <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-12">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              {/* Loader */}
              {loading && (
                <div className="h-40 bg-gray-200 animate-pulse rounded-md mb-4"></div>
              )}

              <Image
                src={item.image}
                alt={item.name}
                width={300} // Set specific width and height
                height={300}
                className={`rounded-md mx-auto mb-4 ${
                  loading ? "hidden" : "block"
                }`}
                onLoadingComplete={handleImageLoad}
              />

              <h3 className="mt-4 text-xl font-bold capitalize">{item.name}</h3>
              <p className="mt-2 text-gray-600">{item.price}</p>
              <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg">
                Order Now
              </button>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="bg-pink-500 text-white text-center py-6">
          <p>&copy; 2025 Sweetbitezz. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Homepage;
