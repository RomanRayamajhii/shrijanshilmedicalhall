const services = [
  'General Checkup',
  'Emergency Care',
  'Pharmacy Service',
  'Child Care',
];

export default function Services() {
  return (
    <section id="services" className="bg-blue-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-blue-900">
          Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-lg"
            >
              <h3 className="mb-4 text-xl font-bold">{service}</h3>

              <p className="text-gray-600 leading-7">
                Professional healthcare services with quality care.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}