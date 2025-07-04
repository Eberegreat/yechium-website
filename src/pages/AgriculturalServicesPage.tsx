import React from 'react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const AgriculturalServicesPage: React.FC = () => {
  return (
    <div className="bg-brand-light">
      <section className="relative bg-brand-dark text-white py-20 md:py-28 text-center">
            <div className="absolute inset-0">
                <img src="https://res.cloudinary.com/dn2mgiges/image/upload/v1750974374/food_stuff_t5chzm.png" alt="Abundant fresh farm produce" className="w-full h-full object-cover opacity-30"/>
            </div>
             <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <h1 className="text-4xl md:text-6xl font-display font-semibold leading-tight">From Our Farm, To Your Table.</h1>
                <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
                    Good health starts with good food. Beyond our healing remedies, we are dedicated to fighting hunger and nourishing our communities with high-quality, farm-fresh agricultural products and expert guidance.
                </p>
            </div>
       </section>

       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            {/* Food Supplies Section */}
            <section className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-dark">Wholesome, Natural Foods, Delivered.</h2>
                    <p className="mt-4 text-brand-dark/80">
                        We believe that everyone deserves access to clean, healthy, and affordable food. We cultivate and source the finest local produce, free from harmful chemicals and preservatives.
                    </p>
                    <h3 className="font-semibold text-brand-dark mt-6 mb-2">What We Offer:</h3>
                    <ul className="list-disc list-inside text-brand-dark/80 space-y-1">
                        <li>Grains & Cereals: Rice, Beans, Maize, Garri, etc.</li>
                        <li>Proteins: Fresh & Smoked Fish, Crayfish, Snails, Meat.</li>
                        <li>Pantry Staples: Red Palm Oil, Vegetable Oil, Spices.</li>
                        <li>And much more!</li>
                    </ul>
                    <p className="mt-4 text-brand-dark/80 font-medium">Perfect for families, restaurants, bulk buyers, and food stores.</p>
                     <Link to="/contact">
                        <Button className="mt-8">Place a Food Order or Make an Enquiry</Button>
                    </Link>
                </div>
                 <div className="w-full">
                     <img src="https://res.cloudinary.com/dn2mgiges/image/upload/v1750974847/farm_produce_1_j6slrm.png" alt="Gallery of farm produce" className="rounded-lg shadow-xl" />
                 </div>
            </section>

            {/* Consulting Section */}
            <section className="mt-16 md:mt-24 grid md:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-lg shadow-md border border-gray-200">
                 <div className="order-2 md:order-1">
                    <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-dark">Expert Guidance to Help You Grow.</h2>
                    <p className="mt-4 text-brand-dark/80">
                       Are you a farmer, investor, or organization looking to succeed in agriculture? With years of hands-on experience and academic knowledge, we provide expert consulting services to help you thrive.
                    </p>
                    <h3 className="font-semibold text-brand-dark mt-6 mb-2">Our Consulting Services Cover:</h3>
                    <ul className="list-disc list-inside text-brand-dark/80 space-y-1">
                        <li>Livestock Management: Best practices for poultry, fishery, piggery, and more.</li>
                        <li>Food Cultivation: Guidance on improving crop yield and sustainable farming.</li>
                        <li>Healing Through Nature: Training on using local herbs for wellness.</li>
                        <li>Academic & Research Support: Project assistance for students and professionals.</li>
                    </ul>
                     <Link to="/contact">
                        <Button variant="secondary" className="mt-8">Book a Free 15-Minute Consultation</Button>
                    </Link>
                </div>
                 <div className="order-1 md:order-2 w-full">
                     <img src="https://res.cloudinary.com/dn2mgiges/image/upload/v1750974768/onyinye_and_farmers_vjedgt.png" alt="Onyinyechi consulting with a farmer in the field" className="rounded-lg shadow-xl" />
                 </div>
            </section>
       </div>
    </div>
  );
};

export default AgriculturalServicesPage;
