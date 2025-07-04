
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);


const FeaturedRemedyCard: React.FC<{ name: string; benefit: string; imageUrl: string; buttonText: string; linkTo: string }> = ({ name, benefit, imageUrl, buttonText, linkTo }) => (
  <Card className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center">
    <div className="aspect-square w-full overflow-hidden bg-white">
      <img src={imageUrl} alt={name} className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105 p-4" />
    </div>
    <CardContent className="p-6">
      <h3 className="font-display font-bold text-xl text-brand-dark">{name}</h3>
      <p className="text-brand-dark/80 mt-2 mb-4 h-20">{benefit}</p>
      <Link to={linkTo}>
        <Button variant="secondary" className="w-full">{buttonText}</Button>
      </Link>
    </CardContent>
  </Card>
);

const TestimonialCard: React.FC<{ quote: string; name: string; location: string; imageUrl: string; }> = ({ quote, name, location, imageUrl }) => (
    <Card className="flex flex-col items-center text-center p-6 bg-yellow-50">
        <img src={imageUrl} alt={name} className="w-20 h-20 rounded-full object-cover shadow-lg mb-4" />
        <p className="text-brand-dark/80 italic flex-grow">"{quote}"</p>
        <div className="mt-4">
            <p className="font-semibold text-brand-dark">{name}</p>
            <p className="text-sm text-brand-accent">{location}</p>
        </div>
    </Card>
);

const HomePage: React.FC = () => {
    
  const problemPoints = [
    "Are you battling a stubborn infection that keeps coming back, no matter how many antibiotics you use?",
    "Do you suffer from painful digestive issues like ulcers, bloating, or acid reflux that dictate what you can and cannot eat?",
    "Are you struggling with fertility issues, fibroids, or hormonal imbalances that are causing you emotional and physical pain?",
    "Is your energy so low that you can barely get through the day without feeling exhausted, relying on sugar and caffeine to keep you going?",
    "Have you been diagnosed with a chronic condition like diabetes, high blood pressure, or arthritis and been told you'll be on medication for life?"
  ];

  return (
    <div className="bg-brand-light">
      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
            <img src="https://res.cloudinary.com/dn2mgiges/image/upload/v1750968853/Onyinyechi_smiling_warmly_qunspm.png" alt="Founder Onyinyechi smiling warmly" className="w-full h-full object-cover opacity-40"/>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight text-shadow">
              Tired of Modern Medicine Failing You? Discover The Ancient, Nature-Based Secret to Finally Healing Your Body for Good.
            </h1>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl text-shadow-sm">
             For years, you've been told that your health challenges are "complicated" or "something you have to live with." But what if the solution isn't in a lab, but in the earth itself? At Yechium Wellness, we bring you potent, 100% organic remedies that address the root cause of your ailments, so you don't just manage symptoms—you heal.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" variant="secondary">Shop Our Natural Remedies</Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">Learn Our Founder's Story</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-dark">Does Any of This Sound Familiar?</h2>
            </div>
            <div className="mt-12 max-w-2xl mx-auto space-y-4">
                {problemPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <CheckCircleIcon className="h-6 w-6 text-brand-primary flex-shrink-0 mt-1" />
                        <p className="text-brand-dark/80 text-lg">{point}</p>
                    </div>
                ))}
            </div>
            <p className="text-center mt-8 font-semibold text-lg text-brand-dark max-w-3xl mx-auto">
                If you nodded YES to any of the above, then I want you to know one thing: It's not your fault, and you are in the right place.
            </p>
        </div>
      </section>

      {/* The Solution Section */}
       <section className="py-16 md:py-24 bg-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg bg-black">
             <video
                className="w-full h-full object-contain"
                src="https://res.cloudinary.com/dn2mgiges/video/upload/v1751623674/Your_Health_Comes_First_nature_health_viral_foryou_food_y2ch6g.mp4"
                title="Yechium Wellness & Foods"
                controls
                autoPlay
                loop
                muted
                playsInline
            >
                Your browser does not support the video tag.
            </video>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-dark">It’s Time to Stop Fighting Your Body and Start Nourishing It.</h2>
            <p className="font-semibold mt-4 text-brand-dark/90">My name is Onyinyechi, but many know me as Premium Mama.</p>
            <p className="mt-4 text-brand-dark/80 space-y-4">
                <span>From a very young age, I understood a simple truth: the earth provides everything we need to thrive. Food for our hunger, and powerful plants for our healing. But our modern world has lost this connection.</span>
                <span>Yechium Wellness & Foods was born from a simple conviction: Humans need two things to survive — good food and good health. We don’t offer magic pills. We offer something far more powerful: trusted, organic, nature-inspired remedies that help your body do what it was designed to do—heal itself.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Top-Selling Remedies Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-dark">Start Your Healing Journey With Our Most Trusted Solutions</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeaturedRemedyCard name="DETOX PLUS" benefit="Your complete body reset. Flushes out toxins, boosts your immune system, and revitalizes your liver and kidneys." imageUrl="https://res.cloudinary.com/dn2mgiges/image/upload/v1750949963/DETOX_PLUS_uaemn0.png" buttonText="Discover Detox Plus" linkTo="/products" />
            <FeaturedRemedyCard name="GYNOCARE (For Women)" benefit="Finally find balance. Naturally supports the female reproductive system, helps manage fibroids and cysts, and boosts fertility." imageUrl="https://res.cloudinary.com/dn2mgiges/image/upload/v1750951727/GYNOCARE_z5b2w1.png" buttonText="Restore Your Hormones" linkTo="/products" />
            <FeaturedRemedyCard name="D-MAN (For Men)" benefit="Reclaim your vitality. A powerful blend for prostate health, enhanced libido, and a natural solution for erectile dysfunction." imageUrl="https://res.cloudinary.com/dn2mgiges/image/upload/v1750951413/D-MAN_mmgc7d.png" buttonText="Boost Your Manpower" linkTo="/products" />
            <FeaturedRemedyCard name="GASTRO-PRO" benefit="Soothe your stomach. Your natural shield against ulcers, acid reflux, and indigestion. Feel relief and enjoy your food again." imageUrl="https://res.cloudinary.com/dn2mgiges/image/upload/v1750951001/GASTRO-PRO_fpplxv.png" buttonText="Heal Your Gut" linkTo="/products" />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-dark">Don't Just Take Our Word For It. See What Our Community Is Saying...</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard quote="The doctors told me my fibroids would require surgery. After 3 months on Gynocare and Detox Plus, my symptoms are gone and my last scan showed a massive reduction. I feel like I have my life back!" name="Mrs. Ada" location="Lagos" imageUrl="https://res.cloudinary.com/dn2mgiges/image/upload/v1750969473/Mr._Ada_lgrxls.png" />
            <TestimonialCard quote="For years, I battled with Staphylococcus infections. It was embarrassing and frustrating. I started the Infection Flusher pack from Yechium and the difference is night and day. No more flare-ups. Thank you, Premium Mama!" name="David" location="Abuja" imageUrl="https://res.cloudinary.com/dn2mgiges/image/upload/v1750969623/Mr._David_cho68t.png" />
            <TestimonialCard quote="I'm a diabetic and was struggling to control my blood sugar. Since I started using Glucomil and the Rejuvenating Drink, my levels are stable, and I have more energy than I've had in a decade." name="Alhaji Bello" location="Kano" imageUrl="https://res.cloudinary.com/dn2mgiges/image/upload/v1750969733/image_2_pb1i2s.png" />
          </div>
        </div>
      </section>

       {/* Final Call to Action Section */}
      <section className="py-16 md:py-24 text-center bg-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-dark">Are You Ready to Choose a Different Path?</h2>
          <p className="mt-4 text-lg text-brand-dark/80">
            You can continue down the same road of frustration, temporary fixes, and endless medication... OR... You can make a different choice today. A choice to trust in nature. A choice to nourish your body from the inside out. A choice to finally achieve the vibrant health you deserve.
          </p>
          <p className="mt-6 text-xl font-semibold text-brand-dark">The power to heal is in your hands.</p>
          <div className="mt-8">
            <Link to="/products">
              <Button size="lg">Browse All Products & Start Healing Today</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
