
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Story = () => {
  return (
    <div className="min-h-screen bg-sikora-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sikora-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-sikora-green mb-6">
            Our Story
          </h1>
          <p className="text-2xl text-sikora-green/80 leading-relaxed">
            Born from memories, crafted with love, served with tradition
          </p>
        </div>
      </section>

      {/* Main Story Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* The Beginning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-4xl font-bold text-sikora-green mb-6">
                Where It All Began
              </h2>
              <p className="text-lg text-sikora-green/80 leading-relaxed mb-6">
                Sikora was born from the cherished memories of chai shared with family. In the bustling 
                lanes of old Mumbai, our founder's grandmother would brew the most aromatic tea, filling 
                the house with stories and warmth.
              </p>
              <p className="text-lg text-sikora-green/80 leading-relaxed mb-6">
                Every morning, the ritual was the same - carefully selected tea leaves, hand-ground spices, 
                and love measured not in spoons but in the gentle care with which each cup was prepared. 
                These moments weren't just about tea; they were about connection, heritage, and the passing 
                down of traditions.
              </p>
              <blockquote className="border-l-4 border-sikora-orange pl-6 italic text-sikora-green">
                "Tea is the thread that weaves generations together, one story at a time."
                <footer className="text-sikora-green/60 mt-2">- Dadi's words of wisdom</footer>
              </blockquote>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                  alt="Traditional Indian kitchen"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-sikora-green/20 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Heritage Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card className="border-sikora-green/20 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sikora-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-sikora-cream">🫖</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-sikora-green mb-4">Handwritten Recipes</h3>
                <p className="text-sikora-green/70">
                  Every blend follows recipes carefully preserved in handwritten notes, 
                  passed down through three generations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sikora-green/20 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sikora-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white">📸</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-sikora-green mb-4">Family Memories</h3>
                <p className="text-sikora-green/70">
                  Old photographs remind us of the joy shared over steaming cups, 
                  inspiring every blend we create today.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sikora-green/20 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sikora-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-sikora-cream">☕</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-sikora-green mb-4">Vintage Teacups</h3>
                <p className="text-sikora-green/70">
                  The same teacups that held countless conversations now inspire 
                  our commitment to authentic tea experiences.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Cultural Heritage */}
          <div className="bg-sikora-green text-sikora-cream rounded-2xl p-12 mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-4xl font-bold mb-8">
                Celebrating Indian Tea Culture
              </h2>
              <p className="text-xl leading-relaxed mb-8 text-sikora-cream/90">
                From the misty hills of Darjeeling to the bustling tapris of Mumbai, India's tea culture 
                is as diverse as it is rich. Sikora honors this heritage by sourcing the finest leaves 
                and spices from across the subcontinent.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">The Tapri Tradition</h3>
                  <p className="text-sikora-cream/80 leading-relaxed">
                    The humble roadside tea stall, or 'tapri', is where stories are shared and 
                    friendships are forged. Our blends capture this spirit of community and warmth.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">Monsoon Memories</h3>
                  <p className="text-sikora-cream/80 leading-relaxed">
                    There's something magical about sipping hot tea while watching the rain. 
                    Our seasonal blends are inspired by these intimate moments with nature.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Mission */}
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold text-sikora-green mb-8">
              Our Mission Today
            </h2>
            <p className="text-xl text-sikora-green/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Today, Sikora continues this legacy by creating premium tea blends that honor our roots 
              while embracing modern sensibilities. We source directly from tea gardens, work with local 
              spice growers, and ensure that every cup you enjoy carries the authentic taste of India.
            </p>
            <p className="text-lg text-sikora-green/70 max-w-3xl mx-auto leading-relaxed">
              Because at Sikora, we believe that every sip should transport you to a moment of warmth, 
              a memory of home, and a story worth sharing.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Story;
