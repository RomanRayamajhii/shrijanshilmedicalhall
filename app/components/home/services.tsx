import {
  Ambulance,
  Baby,
  HeartPulse,
  Microscope,
  Pill,
  ScanLine,
  Stethoscope,
  TestTube,
} from "lucide-react";

const services = [
  {
    name: "General Checkup",
    description: "Everyday health checkups with experienced medical professionals.",
    icon: HeartPulse,
  },
  {
    name: "Doctor Consultation",
    description: "Consultation with physicians and specialist doctors.",
    icon: Stethoscope,
  },
  {
    name: "Emergency Care",
    description: "Prompt first-contact care and emergency support.",
    icon: Ambulance,
  },
  {
    name: "X-Ray Service",
    description: "Digital X-Ray support for routine diagnostic needs.",
    icon: ScanLine,
  },
  {
    name: "Blood Testing",
    description: "Reliable blood sample collection and lab testing support.",
    icon: TestTube,
  },
  {
    name: "Urine Test",
    description:
      "Urine examination for infection, sugar, protein, and routine checks.",
    icon: Microscope,
  },
  {
    name: "Pharmacy Service",
    description: "Medicine support and pharmacy service for patients.",
    icon: Pill,
  },
  {
    name: "Child Care",
    description: "Pediatric care and child health consultation.",
    icon: Baby,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-blue-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
            Clinic Facilities
          </p>
          <h2 className="text-4xl font-bold text-blue-950">Our Services</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Diagnostic testing, pharmacy support, and doctor consultation
            services available at Shrijanshil Medical Hall.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.name}
                className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-blue-950">
                  {service.name}
                </h3>
                <p className="leading-7 text-gray-600">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
