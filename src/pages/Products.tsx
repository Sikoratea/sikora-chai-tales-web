
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Teas" },
    { id: "loose-leaf", label: "Loose Leaf" },
    { id: "tea-bags", label: "Tea Bags" },
    { id: "spiced", label: "Spiced" },
    { id: "herbal", label: "Herbal" }
  ];

  const products = [
    {
      id: 1,
      name: "Saffron Royal",
      category: "loose-leaf",
      type: "spiced",
      price: "₹899",
      originalPrice: "₹1099",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      description: "Premium black tea infused with authentic Kashmiri saffron and aromatic spices",
      quote: "Like golden sunsets over ancient palaces",
      flavors: ["Rich", "Aromatic", "Royal"],
      story: "Inspired by the royal kitchens of Mughal emperors, this blend captures the luxury of saffron in every sip."
    },
    {
      id: 2,
      name: "Adrak Masala",
      category: "tea-bags",
      type: "spiced",
      price: "₹449",
      originalPrice: "₹549",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      description: "Fiery ginger with traditional Indian spices in convenient tea bags",
      quote: "Warmth that embraces your soul",
      flavors: ["Spicy", "Warming", "Invigorating"],
      story: "Born from winter mornings when only the strongest ginger chai could wake the senses."
    },
    {
      id: 3,
      name: "Rose Garden",
      category: "loose-leaf",
      type: "herbal",
      price: "₹649",
      originalPrice: "₹749",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      description: "Delicate rose petals meet premium green tea for a floral symphony",
      quote: "Romance in every delicate sip",
      flavors: ["Floral", "Delicate", "Refreshing"],
      story: "Crafted for evening conversations, this blend brings the tranquility of a rose garden to your cup."
    },
    {
      id: 4,
      name: "Mint Monsoon",
      category: "loose-leaf",
      type: "herbal",
      price: "₹549",
      originalPrice: "₹649",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      description: "Fresh mint leaves with cooling herbs, perfect for any season",
      quote: "Reminds you of monsoon afternoons...",
      flavors: ["Cool", "Fresh", "Soothing"],
      story: "Captures the essence of first monsoon showers when the earth smells fresh and possibilities are endless."
    },
    {
      id: 5,
      name: "Cardamom Dreams",
      category: "tea-bags",
      type: "spiced",
      price: "₹399",
      originalPrice: "₹499",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      description: "Fragrant cardamom pods in perfectly balanced black tea bags",
      quote: "Awaken to the magic of morning",
      flavors: ["Fragrant", "Balanced", "Traditional"],
      story: "Every pod tells the story of Kerala's spice gardens, where cardamom grows in nature's embrace."
    },
    {
      id: 6,
      name: "Himalayan White",
      category: "loose-leaf",
      type: "herbal",
      price: "₹1299",
      originalPrice: "₹1499",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      description: "Rare white tea from high-altitude gardens of the Himalayas",
      quote: "Pure as mountain snow",
      flavors: ["Subtle", "Pure", "Elegant"],
      story: "Handpicked at dawn from misty mountain slopes, this tea embodies the serenity of the Himalayas."
    }
  ];

  const filteredProducts = selectedFilter === "all" 
    ? products 
    : products.filter(product => 
        product.category === selectedFilter || product.type === selectedFilter
      );

  return (
    <div className="min-h-screen bg-sikora-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sikora-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-sikora-green mb-6">
            Our Tea Collection
          </h1>
          <p className="text-2xl text-sikora-green/80 leading-relaxed">
            Discover blends that tell stories, crafted with love and tradition
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-sikora-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                className={selectedFilter === filter.id 
                  ? "bg-sikora-green text-sikora-cream hover:bg-sikora-green/90" 
                  : "border-sikora-green text-sikora-green hover:bg-sikora-green hover:text-sikora-cream"
                }
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-sikora-green/10 overflow-hidden bg-white">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-sikora-orange text-white">
                      {product.category === "loose-leaf" ? "Loose Leaf" : "Tea Bags"}
                    </Badge>
                  </div>
                  {product.originalPrice && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="destructive" className="bg-red-500">
                        Save ₹{parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))}
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="font-serif text-2xl font-semibold text-sikora-green mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sikora-green/70 mb-3 leading-relaxed">
                      {product.description}
                    </p>
                    <p className="text-sikora-orange italic text-sm mb-4">
                      "{product.quote}"
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-sikora-green mb-2">Flavor Profile:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.flavors.map((flavor, index) => (
                        <Badge key={index} variant="secondary" className="bg-sikora-cream text-sikora-green">
                          {flavor}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-sikora-green/60 italic leading-relaxed">
                      {product.story}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-sikora-green">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-sikora-green/50 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <Button className="bg-sikora-green hover:bg-sikora-green/90 text-sikora-cream">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-sikora-green text-sikora-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Can't Find Your Perfect Blend?
          </h2>
          <p className="text-xl text-sikora-cream/90 mb-8 leading-relaxed">
            We're always crafting new stories. Let us know what flavors speak to your soul, 
            and we'll create something special just for you.
          </p>
          <Button asChild size="lg" variant="outline" className="border-sikora-cream text-sikora-cream hover:bg-sikora-cream hover:text-sikora-green">
            <a href="/contact">Get in Touch</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
