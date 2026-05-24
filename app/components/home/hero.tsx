import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-20">
        <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-blue-200 blur-3xl"></div>
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-sky-200 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900">
              Trusted Clinic & Medical Services
            </div>

            <h2 className="mb-6 text-5xl font-extrabold leading-tight text-gray-900">
              Your Health Is Our <span className="text-blue-900">Top Priority</span>
            </h2>

            <p className="mb-8 text-lg leading-8 text-gray-600">
              Srijanshil Medical Hall provides quality healthcare services,
              doctor consultations, medicine support, and patient-friendly care
              with experienced medical professionals.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="rounded-2xl bg-blue-900 px-7 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-800"
              >
                Book Appointment
              </Link>

              <Link
                href="#doctors"
                className="rounded-2xl border border-blue-200 bg-white px-7 py-4 text-lg font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Meet Doctors
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[40px] bg-blue-500/20 blur-2xl"></div>
            <Image
              src="/image.png"
              alt="Medical Clinic"
              className="relative h-[500px] w-full rounded-[40px] object-cover shadow-2xl"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
  );
}