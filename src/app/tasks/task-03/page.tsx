import Image from "next/image";
import { ArrowRight, Zap, Shield, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Task03Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <Badge variant="secondary" className="mb-2">
            New Collection
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight">
            Discover Premium Products
          </h1>
          <p className="text-xl text-muted-foreground">
            Carefully curated items for the modern lifestyle. Free shipping on orders over $50.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button size="lg">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Why Shop With Us</h2>
            <p className="mt-2 text-muted-foreground">
              Everything you need for a seamless shopping experience
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle>Fast Delivery</CardTitle>
                <CardDescription>
                  Free 2-day shipping on all orders over $50. Get your items delivered right to your door.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle>Quality Guarantee</CardTitle>
                <CardDescription>
                  Every product backed by our 30-day money-back guarantee. Shop with confidence.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Sparkles className="h-6 w-6" />
                </div>
                <CardTitle>Premium Quality</CardTitle>
                <CardDescription>
                  Handpicked products from trusted brands. Only the best makes it to our store.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <Badge variant="outline" className="mb-4">
                Featured Product
              </Badge>
              <h2 className="mb-4 text-3xl font-bold">
                Elevate Your Everyday
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Our signature collection combines timeless design with modern functionality.
                Each piece is crafted to enhance your daily routine.
              </p>
              <ul className="mb-8 space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Sustainable materials
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Minimalist design
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Built to last
                </li>
              </ul>
              <div className="flex gap-4">
                <Button>Explore Collection</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
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

      {/* Newsletter Section - CANDIDATE BUILDS THIS */}
      <section className="border-t bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          {/*
            TODO: Build the newsletter signup section here
            See /src/app/tasks/task-03/newsletter-requirements.md for specifications
          */}
          <div className="mx-auto max-w-2xl rounded-lg border-2 border-dashed border-muted-foreground/20 p-12 text-center">
            <p className="text-sm text-muted-foreground">
              Newsletter Section Goes Here
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              See newsletter-requirements.md for specifications
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
