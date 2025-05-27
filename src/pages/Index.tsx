
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const popularTeas = [
    {
      name: "Saffron Royal",
      description: "Aromatic saffron meets robust black tea",
      image: "/lovable-uploads/ab3cef35-3589-4df1-8279-53721c13d1db.png",
      quote: "Like golden sunsets over ancient palaces"
    },
    {
      name: "Adrak Masala",
      description: "Fiery ginger with traditional spices",
      image: "/lovable-uploads/ab3cef35-3589-4df1-8279-53721c13d1db.png",
      quote: "Warmth that embraces your soul"
    },
    {
      name: "Rose Garden",
      description: "Delicate rose petals in premium green tea",
      image: "/lovable-uploads/ab3cef35-3589-4df1-8279-53721c13d1db.png",
      quote: "Romance in every delicate sip"
    },
    {
      name: "Mint Monsoon",
      description: "Fresh mint leaves with cooling herbs",
      image: "/lovable-uploads/ab3cef35-3589-4df1-8279-53721c13d1db.png",
      quote: "Reminds you of monsoon afternoons..."
    }
  ];

  const testimonials = [
    {
      text: "Sikora brings back memories of my grandmother's kitchen. Every cup is pure nostalgia.",
      author: "Priya Sharma",
      location: "Delhi"
    },
    {
      text: "The Saffron Royal is absolutely divine. It's like luxury in a teacup.",
      author: "Rajesh Kumar",
      location: "Mumbai"
    },
    {
      text: "Finally, a tea brand that understands the soul of Indian chai culture.",
      author: "Meera Joshi",
      location: "Pune"
    }
  ];

  return (
    <div className="min-h-screen bg-sikora-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sikora-cream to-sikora-cream/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-sikora-green mb-6 leading-tight">
                Every Sip,<br />
                <span className="text-sikora-orange">A Story</span>
              </h1>
              <p className="text-xl text-sikora-green/80 mb-8 leading-relaxed">
                Discover the warmth of authentic Indian chai, crafted with love and steeped in tradition. 
                Where every blend carries the essence of our heritage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-sikora-green hover:bg-sikora-green/90 text-sikora-cream">
                  <Link to="/products">Explore Our Teas</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-sikora-green text-sikora-green hover:bg-sikora-green hover:text-sikora-cream">
                  <Link to="/story">Our Story</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-sikora-green to-sikora-green/80 rounded-2xl p-8 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19"
                  alt="Grandmother lovingly pouring tea for her grandson"
                  className="w-full h-80 object-cover rounded-lg"
                />
                {/* Steam animation */}
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
                  <div className="w-2 h-8 bg-sikora-cream/30 rounded-full animate-steam"></div>
                  <div className="w-1 h-6 bg-sikora-cream/20 rounded-full animate-steam ml-3" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-1.5 h-7 bg-sikora-cream/25 rounded-full animate-steam ml-1" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Teas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-sikora-green mb-4">
              Our Popular Blends
            </h2>
            <p className="text-xl text-sikora-green/70 max-w-2xl mx-auto">
              Each blend tells a unique story, crafted with the finest ingredients and generations of wisdom
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularTeas.map((tea, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-sikora-green/10 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={tea.image}
                    alt={tea.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-sikora-green mb-2">
                    {tea.name}
                  </h3>
                  <p className="text-sikora-green/70 mb-3">
                    {tea.description}
                  </p>
                  <p className="text-sikora-orange italic text-sm">
                    "{tea.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-sikora-orange hover:bg-sikora-orange/90 text-white">
              <Link to="/products">View All Teas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section className="py-20 bg-sikora-green text-sikora-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">
                Rooted in Tradition,<br />
                Crafted for Today
              </h2>
              <p className="text-xl leading-relaxed mb-6 text-sikora-cream/90">
                At Sikora, we believe that tea is more than just a beverage. It's a connection to our roots, 
                a moment of mindfulness, and a bridge between generations.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-sikora-cream/80">
                Our blends are carefully curated to capture the essence of Indian chai culture - 
                from the bustling tapris of Mumbai to the serene tea gardens of Darjeeling.
              </p>
              <Button asChild variant="outline" size="lg" className="border-sikora-cream text-sikora-cream hover:bg-sikora-cream hover:text-sikora-green">
                <Link to="/story">Read Our Full Story</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-sikora-cream/10 p-6 rounded-lg">
                  <h3 className="font-serif text-lg font-semibold mb-2">Heritage</h3>
                  <p className="text-sm text-sikora-cream/80">Recipes passed down through generations</p>
                </div>
                <div className="bg-sikora-cream/10 p-6 rounded-lg">
                  <h3 className="font-serif text-lg font-semibold mb-2">Quality</h3>
                  <p className="text-sm text-sikora-cream/80">Only the finest leaves and spices</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-sikora-cream/10 p-6 rounded-lg">
                  <h3 className="font-serif text-lg font-semibold mb-2">Culture</h3>
                  <p className="text-sm text-sikora-cream/80">Celebrating Indian tea traditions</p>
                </div>
                <div className="bg-sikora-cream/10 p-6 rounded-lg">
                  <h3 className="font-serif text-lg font-semibold mb-2">Love</h3>
                  <p className="text-sm text-sikora-cream/80">Crafted with care in every cup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-sikora-cream/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-sikora-green mb-4">
              Customer Love
            </h2>
            <p className="text-xl text-sikora-green/70">
              Stories from our tea family
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-sikora-green/10 bg-white">
                <CardContent className="p-8">
                  <p className="text-sikora-green/80 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-sikora-green/10 pt-4">
                    <p className="font-semibold text-sikora-green">{testimonial.author}</p>
                    <p className="text-sikora-green/60 text-sm">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
