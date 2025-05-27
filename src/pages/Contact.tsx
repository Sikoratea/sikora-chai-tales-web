
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "customer-care"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "customer-care"
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-sikora-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sikora-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-sikora-green mb-6">
            Get in Touch
          </h1>
          <p className="text-2xl text-sikora-green/80 leading-relaxed">
            We'd love to hear from you. Share your story, ask questions, or explore partnership opportunities.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-sikora-green/10 bg-white">
                <CardHeader>
                  <CardTitle className="font-serif text-3xl text-sikora-green">
                    Send us a Message
                  </CardTitle>
                  <p className="text-sikora-green/70">
                    Whether you have questions about our teas or want to explore business opportunities, we're here to help.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Inquiry Type */}
                    <div>
                      <Label htmlFor="inquiryType" className="text-sikora-green font-medium">
                        Type of Inquiry
                      </Label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full mt-2 p-3 border border-sikora-green/20 rounded-md focus:outline-none focus:ring-2 focus:ring-sikora-green focus:border-transparent"
                      >
                        <option value="customer-care">Customer Care</option>
                        <option value="tapri-partnership">Tapri Partnership/Franchise</option>
                        <option value="wholesale">Wholesale Inquiry</option>
                        <option value="media">Media & Press</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sikora-green font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-2 border-sikora-green/20 focus:ring-sikora-green focus:border-sikora-green"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sikora-green font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-2 border-sikora-green/20 focus:ring-sikora-green focus:border-sikora-green"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    {/* Phone and Subject */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-sikora-green font-medium">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-2 border-sikora-green/20 focus:ring-sikora-green focus:border-sikora-green"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-sikora-green font-medium">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="mt-2 border-sikora-green/20 focus:ring-sikora-green focus:border-sikora-green"
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message" className="text-sikora-green font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="mt-2 border-sikora-green/20 focus:ring-sikora-green focus:border-sikora-green"
                        placeholder="Tell us your story, ask your questions, or share your ideas..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-sikora-green hover:bg-sikora-green/90 text-sikora-cream"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Details */}
              <Card className="border-sikora-green/10 bg-white">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-sikora-green">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sikora-green mb-1">Email</h4>
                    <p className="text-sikora-green/70">hello@sikora.tea</p>
                    <p className="text-sikora-green/70">business@sikora.tea</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sikora-green mb-1">Phone</h4>
                    <p className="text-sikora-green/70">+91 98765 43210</p>
                    <p className="text-sikora-green/70">+91 98765 43211 (Business)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sikora-green mb-1">Address</h4>
                    <p className="text-sikora-green/70">
                      123 Chai Street<br />
                      Bandra West<br />
                      Mumbai, Maharashtra 400050<br />
                      India
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="border-sikora-green/10 bg-white">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-sikora-green">
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sikora-green/70">Monday - Friday</span>
                    <span className="text-sikora-green">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sikora-green/70">Saturday</span>
                    <span className="text-sikora-green">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sikora-green/70">Sunday</span>
                    <span className="text-sikora-green">Closed</span>
                  </div>
                  <p className="text-sm text-sikora-green/60 mt-4">
                    We respond to emails within 24 hours during business days.
                  </p>
                </CardContent>
              </Card>

              {/* Tapri Partnership */}
              <Card className="border-sikora-orange/20 bg-sikora-orange/5">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-sikora-green">
                    Tapri Partnership
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sikora-green/70 mb-4">
                    Interested in bringing Sikora to your neighborhood? We're always looking for passionate partners to join our tapri network.
                  </p>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="border-sikora-orange text-sikora-orange hover:bg-sikora-orange hover:text-white"
                  >
                    <a href="mailto:business@sikora.tea?subject=Tapri Partnership Inquiry">
                      Learn More
                    </a>
                  </Button>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 bg-sikora-green text-sikora-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Connect With Us
          </h2>
          <p className="text-xl text-sikora-cream/90 mb-8">
            Follow our journey and be part of the Sikora family
          </p>
          <div className="flex justify-center space-x-8">
            <a 
              href="#" 
              className="text-sikora-cream/80 hover:text-sikora-orange transition-colors text-lg"
            >
              Facebook
            </a>
            <a 
              href="#" 
              className="text-sikora-cream/80 hover:text-sikora-orange transition-colors text-lg"
            >
              Instagram
            </a>
            <a 
              href="#" 
              className="text-sikora-cream/80 hover:text-sikora-orange transition-colors text-lg"
            >
              YouTube
            </a>
            <a 
              href="#" 
              className="text-sikora-cream/80 hover:text-sikora-orange transition-colors text-lg"
            >
              Twitter
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
