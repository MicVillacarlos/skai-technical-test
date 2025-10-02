import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Task01Page() {
  const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "New York, NY",
    rating: 4,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    text: "The quality is exceptional. Every piece I've purchased has exceeded my expectations. Worth every penny."
  },
  {
    name: "Michael Chen",
    location: "San Francisco, CA",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    text: "Minimalist design done right. These products seamlessly integrate into my daily life. Highly recommend."
  },
  {
    name: "Emma Rodriguez",
    location: "Austin, TX",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    text: "Fast shipping, beautiful packaging, and sustainable products. This is my go-to store for thoughtful gifts."
  }
];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2">
        <div className="container mx-auto flex items-center px-4 py-24 md:px-16">
          <div className="max-w-xl space-y-8">
            <span className="inline-block border border-gray-300 px-4 py-1.5 text-xs uppercase tracking-widest text-gray-600">
              New Collection
            </span>
            <h1 className="text-balance text-6xl font-light tracking-wide text-black">
              Discover Premium Products
            </h1>
            <p className="text-balance text-xl font-light text-gray-600">
              Carefully curated items for the modern lifestyle. Free shipping on
              orders over $50.
            </p>
            <div className="flex gap-4 pt-8">
              <button className="border border-black px-8 py-3 text-sm uppercase tracking-wider transition-colors duration-200 hover:bg-black hover:text-white">
                Shop Now
              </button>
              <button className="border border-gray-300 px-8 py-3 text-sm uppercase tracking-wider transition-colors duration-200 hover:border-black">
                View Catalog
              </button>
            </div>
          </div>
        </div>
        <div className="relative min-h-[600px] border-l border-gray-200">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
            alt="Premium products collection"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="border-t border-gray-200 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-balance text-4xl font-light tracking-wide text-black">
              Featured Collection
            </h2>
            <p className="text-balance mt-4 text-lg font-light text-gray-600">
              Discover our handpicked selection
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 divide-x divide-gray-200 border-x border-gray-200 md:grid-cols-4">
          {/* Product Card 1 */}
          <div className="group border-b border-gray-200">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80"
                alt="Minimal Watch"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="divide-y divide-gray-200">
              <div className="p-6">
                <h3 className="text-balance mb-2 font-light tracking-wide text-black">
                  Minimal Watch
                </h3>
                <p className="text-sm font-light text-gray-600">$299</p>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="group border-b border-gray-200">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80"
                alt="Leather Bag"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="divide-y divide-gray-200">
              <div className="p-6">
                <h3 className="text-balance mb-2 font-light tracking-wide text-black">
                  Leather Bag
                </h3>
                <p className="text-sm font-light text-gray-600">$189</p>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="group border-b border-gray-200">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80"
                alt="Wireless Speaker"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="divide-y divide-gray-200">
              <div className="p-6">
                <h3 className="text-balance mb-2 font-light tracking-wide text-black">
                  Wireless Speaker
                </h3>
                <p className="text-sm font-light text-gray-600">$149</p>
              </div>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="group border-b border-gray-200">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80"
                alt="Sunglasses"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="divide-y divide-gray-200">
              <div className="p-6">
                <h3 className="text-balance mb-2 font-light tracking-wide text-black">
                  Sunglasses
                </h3>
                <p className="text-sm font-light text-gray-600">$129</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="border-t border-gray-200 py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <span className="inline-block border border-gray-300 px-4 py-1.5 text-xs uppercase tracking-widest text-gray-600">
                Featured Product
              </span>
              <h2 className="text-balance mb-6 mt-8 text-4xl font-light tracking-wide text-black">
                Elevate Your Everyday
              </h2>
              <p className="text-balance mb-8 text-lg font-light leading-relaxed text-gray-600">
                Our signature collection combines timeless design with modern
                functionality. Each piece is crafted to enhance your daily
                routine.
              </p>
              <ul className="mb-12 space-y-4 text-gray-600">
                <li className="flex items-center font-light">
                  <span className="mr-3 h-px w-6 bg-gray-300" />
                  Sustainable materials
                </li>
                <li className="flex items-center font-light">
                  <span className="mr-3 h-px w-6 bg-gray-300" />
                  Minimalist design
                </li>
                <li className="flex items-center font-light">
                  <span className="mr-3 h-px w-6 bg-gray-300" />
                  Built to last
                </li>
              </ul>
              <div className="flex gap-4">
                <button className="border border-black px-8 py-3 text-sm uppercase tracking-wider transition-colors duration-200 hover:bg-black hover:text-white">
                  Explore Collection
                </button>
                <button className="border border-gray-300 px-8 py-3 text-sm uppercase tracking-wider transition-colors duration-200 hover:border-black">
                  Learn More
                </button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-square overflow-hidden border border-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                  alt="Featured products"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLACEHOLDER: Build Your Section Here */}
      <section className="border-t border-gray-200 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <span className="inline-block border border-gray-300 px-4 py-1.5 text-xs uppercase tracking-widest text-gray-600">
              Testimonials
            </span>
            <h2 className="text-balance mt-8 text-4xl font-light tracking-wide text-black">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border border-gray-200 p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-gray-200">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-light tracking-wide text-black">
                      {testimonial.name}
                    </p>
                    <p className="text-sm font-light text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="mb-6 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-black">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-balance font-light leading-relaxed text-gray-600">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="border-t border-gray-200 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance mb-6 text-4xl font-light tracking-wide text-black">
              Stay in the Loop
            </h2>
            <p className="text-balance mb-12 text-lg font-light leading-relaxed text-gray-600">
              Get exclusive access to new products, special offers, and style
              tips. Join our community of 10,000+ subscribers.
            </p>
            <form className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border border-gray-300 px-4 py-3 text-sm transition-colors duration-200 placeholder:text-gray-400 focus:border-black focus:outline-none"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 border border-black px-8 py-3 text-sm uppercase tracking-wider transition-colors duration-200 hover:bg-black hover:text-white"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
