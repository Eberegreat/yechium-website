import React from 'react';

const ValuePill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="rounded-full bg-brand-secondary text-brand-dark font-semibold px-4 py-2 text-sm">
        {children}
    </div>
);


const AboutPage: React.FC = () => {
  return (
    <div className="bg-brand-light">
       {/* Hero Section */}
       <section className="relative bg-brand-dark text-white py-24 md:py-32 text-center">
            <div className="absolute inset-0">
                <img src="https://res.cloudinary.com/dn2mgiges/image/upload/v1751379192/CEO_PICTURE_s4tiaj.jpg" alt="Onyinyechi Mary Ugwunnadi" className="w-full h-full object-cover opacity-30 object-top"/>
            </div>
             <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <h1 className="text-4xl md:text-6xl font-display font-semibold leading-tight">We're Not Just a Brand. We're a Movement.</h1>
                <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
                    At Yechium, we believe that health and food are not luxuries—they are fundamental human rights. Our journey started with one woman's deep connection to nature and a burning desire to see people thrive.
                </p>
            </div>
       </section>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Founder's Story Section */}
        <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-dark">Meet Onyinyechi "Premium Mama" Ugwunnadi</h2>
                <div className="mt-4 text-brand-dark/80 space-y-4">
                    <p>
                        From an early age, I felt a profound connection to the natural world. The sight of trees swaying, bees buzzing, and animals thriving wasn't just scenery to me—it was a conversation. I dreamed of a world where we could communicate with plants and animals, understanding their purpose as fellow living beings.
                    </p>
                    <p>
                        This deep-seated belief in the power and wisdom of nature is the seed from which Yechium Wellness & Foods grew. I looked around my community and saw a world of suffering that didn't need to exist. I saw people going to bed hungry. I saw others battling chronic illnesses, trapped in a cycle of expensive treatments that only managed their pain instead of healing it.
                    </p>
                    <p>
                        I saw a clear path to make a difference. My passion for nature had to become a mission. Yechium was born from a conviction: to heal, you must first nourish. To thrive, you must have access to the pure, life-giving resources the earth provides.
                    </p>
                    <p className="font-semibold text-brand-dark">
                        This is more than a business to me. It's my calling. It's a movement to restore dignity, promote well-being, and bring healing and nourishment right to your doorstep.
                    </p>
                </div>
            </div>
            <div className="order-1 md:order-2">
                 <img src="https://res.cloudinary.com/dn2mgiges/image/upload/v1750970256/image_2_lgut5b.png" alt="Onyinyechi in her element" className="rounded-lg shadow-xl w-full" />
            </div>
        </section>
        
        {/* Mission, Vision, Values Section */}
        <section className="mt-16 md:mt-24 bg-white p-8 md:p-12 rounded-lg shadow-md border border-gray-200">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-display font-semibold text-brand-primary mb-3">Our Mission</h3>
                     <p className="text-brand-dark/80 mb-4">Our mission is threefold and crystal clear:</p>
                    <ul className="space-y-3 text-brand-dark/80">
                        <li className="flex items-start"><strong className="text-brand-primary font-bold mr-2 w-5 text-center">1.</strong> <span><strong>To Feed:</strong> By cultivating and distributing healthy, farm-fresh food to fight hunger and nourish our communities.</span></li>
                        <li className="flex items-start"><strong className="text-brand-primary font-bold mr-2 w-5 text-center">2.</strong> <span><strong>To Heal:</strong> By offering potent, natural, and organic products that help restore the body and maintain life-long health.</span></li>
                        <li className="flex items-start"><strong className="text-brand-primary font-bold mr-2 w-5 text-center">3.</strong> <span><strong>To Empower:</strong> By creating wealth opportunities through our network, improving the daily living conditions of our partners and customers.</span></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-display font-semibold text-brand-primary mb-3">Our Vision</h3>
                    <p className="text-brand-dark/80">To be the most trusted name across Africa for integrated wellness and agricultural supply, known for our unwavering reliability, transparency, and life-changing impact.</p>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-200 pt-8">
                 <h3 className="text-2xl font-display font-semibold text-brand-primary mb-4 text-center">Our Core Values</h3>
                 <div className="flex flex-wrap gap-3 justify-center">
                    <ValuePill>Honesty</ValuePill>
                    <ValuePill>Empowerment</ValuePill>
                    <ValuePill>Faith</ValuePill>
                    <ValuePill>Trust</ValuePill>
                    <ValuePill>Practical Results</ValuePill>
                    <ValuePill>Quality Assurance</ValuePill>
                 </div>
            </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;