
import React from 'react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const SolutionKitCard: React.FC<{
    title: string;
    problem: string;
    solutionText: string;
    images: string[];
    products: string;
    buttonText: string;
}> = ({ title, problem, solutionText, images, products, buttonText }) => (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
            <h2 className="text-2xl font-display font-semibold text-brand-primary">{title}</h2>
            <p className="mt-2 text-brand-dark/80"><strong className="text-brand-dark">The Problem:</strong> {problem}</p>
        </div>
        <div className="bg-yellow-50 px-6 py-4 flex justify-center items-center gap-4 h-32">
            {images.map((src, i) => <img key={i} src={src} alt={`Product image ${i+1}`} className="h-24 object-contain" />)}
        </div>
        <div className="p-6">
            <p className="text-brand-dark/80"><strong className="text-brand-dark">The Yechium Solution Kit:</strong> {solutionText}</p>
            <p className="mt-4 font-semibold text-brand-dark">Recommended Products: <span className="font-normal">{products}</span></p>
            <Link to="/products">
                <Button className="w-full mt-6">{buttonText}</Button>
            </Link>
        </div>
    </div>
);

const HealthSolutionsPage: React.FC = () => {
  return (
    <div className="bg-brand-light">
       <section className="relative bg-brand-dark text-white py-20 md:py-28 text-center">
            <div className="absolute inset-0">
                <img src="https://res.cloudinary.com/dn2mgiges/image/upload/v1750973897/happy_client_iihwn0.png" alt="Person looking relieved and happy" className="w-full h-full object-cover opacity-30"/>
            </div>
             <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <h1 className="text-4xl md:text-6xl font-display font-semibold leading-tight">Stop Guessing. Find The Exact Natural Solution For Your Health Challenge.</h1>
                <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
                    We've taken the guesswork out of natural healing. Based on years of research and incredible results from our community, we've created powerful combination packs that target specific health issues at their root. Find your concern below to see your recommended healing path.
                </p>
            </div>
       </section>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-brand-dark text-center mb-12">Health Challenge Navigator</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <SolutionKitCard
                title="For Stubborn Infections (Staph, STD, PID)"
                problem="You've been on countless rounds of antibiotics, but the infection always returns, leaving you frustrated and in discomfort."
                solutionText="Our Ultimate Infection Flusher Pack is designed to cleanse your system from the inside out."
                images={["https://res.cloudinary.com/dn2mgiges/image/upload/v1750949963/DETOX_PLUS_uaemn0.png", "https://res.cloudinary.com/dn2mgiges/image/upload/v1750950690/MEDCURE_INFECTION_FLUSHER_bijpdp.jpg", "https://res.cloudinary.com/dn2mgiges/image/upload/v1750951413/D-MAN_mmgc7d.png" ]}
                products="Detox Plus + Medcure Infection Flusher + D-Man (for men) or Gynocare (for women)."
                buttonText="Shop Infection Pack"
            />
            <SolutionKitCard
                title="For Fibroids & Ovarian Cysts"
                problem="You're dealing with painful periods, bloating, and the emotional weight of a diagnosis, with surgery feeling like your only option."
                solutionText="Our Fibroid & Hormonal Balance Pack works to restore your body's natural equilibrium and support the reduction of non-cancerous growths."
                images={["https://res.cloudinary.com/dn2mgiges/image/upload/v1750949963/DETOX_PLUS_uaemn0.png", "https://res.cloudinary.com/dn2mgiges/image/upload/v1750951727/GYNOCARE_z5b2w1.png", "https://res.cloudinary.com/dn2mgiges/image/upload/v1750950643/MEDCURE_FIBROID_CARE_t05yri.jpg" ]}
                products="Detox Plus + Gynocare + Medcure Fibroid_Care."
                buttonText="Shop Fibroid Pack"
            />
             <SolutionKitCard
                title="For Diabetes & High Blood Sugar"
                problem="You're constantly worried about your blood sugar levels, your diet is heavily restricted, and you lack the energy you once had."
                solutionText="Our Blood Sugar Control Pack helps balance glucose levels naturally and boosts your metabolism."
                images={["https://res.cloudinary.com/dn2mgiges/image/upload/v1750949963/DETOX_PLUS_uaemn0.png", "https://res.cloudinary.com/dn2mgiges/image/upload/v1750951727/GYNOCARE_z5b2w1.png", "https://res.cloudinary.com/dn2mgiges/image/upload/v1750953209/REJUVENATING_DRINK_mzqccs.png" ]}
                products="Detox Plus + Glucomil + Rejuvenating Drink."
                buttonText="Shop Diabetes Pack"
            />
             <div className="bg-yellow-100 border border-yellow-200 rounded-lg shadow-md p-8 text-center flex flex-col justify-center items-center">
                 <h3 className="text-2xl font-display font-semibold text-brand-dark">More Solutions Coming Soon!</h3>
                 <p className="mt-2 text-brand-dark/80">We are developing solution kits for High Blood Pressure, Ulcers, Infertility, Arthritis, and more. Check back soon or contact us for a personal consultation.</p>
                 <Link to="/contact">
                    <Button variant="secondary" className="mt-6">Contact Us</Button>
                 </Link>
             </div>
        </div>
      </div>
    </div>
  );
};

export default HealthSolutionsPage;