import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex-grow">
				<HeroSection />
				<AboutSection />
				<ServicesSection />
				<ProductsSection />
				<ContactForm />
			</main>
			<Footer />
		</div>
	);
}
