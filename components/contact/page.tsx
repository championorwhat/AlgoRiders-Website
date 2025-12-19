import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact | AlgoRiders",
  description: "Get in touch with AlgoRiders for hackathons, freelancing, or collaboration."
};

export default function ContactPage() {
  return (
    <main className="py-24 px-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        Contact AlgoRiders
      </h1>

      <p className="text-center text-muted mb-16 max-w-xl mx-auto">
        Have a project, hackathon idea, or collaboration in mind?
        Drop us a message and we’ll respond quickly.
      </p>

      <ContactForm />
    </main>
  );
}
