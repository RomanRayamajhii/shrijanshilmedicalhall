import { CalendarDays, IdCard, Stethoscope } from "lucide-react";
import Image from "next/image";

const doctors = [
  {
    name: "Dr. Yogesh Chemjong",
    qualification: "MBBS (KU), MD (Bir Hospital)",
    specialty: "Physician",
    field: "General Medicine",
    nmc: "15533",
    availability: "Daily, 9:00 AM & 3:00 PM",
    image: "/dr-yogesh-chemjong.jpeg",
  },
  {
    name: "Dr. Sanjiv Kumar Sah",
    qualification: "MBBS, MD Pediatrics",
    specialty: "Pediatrician",
    field: "Child Health",
    nmc: "16372",
    availability: "5:00 PM onwards",
    image: "/dr-sanjiv-kumar-sah.jpeg",
  },
  {
    name: "Dr. Dipti Kunwar",
    qualification: "MBBS (KU), MD (Bir Hospital)",
    specialty: "Gynecologist",
    field: "Obstetrics & Gynecology",
    nmc: "15530",
    availability: "Daily, 9:30 AM",
    image: "/dr-dipti-kunwar.jpeg",
  },
  {
    name: "Dr. Prabin Chaudhary",
    qualification: "MBBS, MD",
    specialty: "Orthopedic Surgeon",
    field: "Bone & Joint Care",
    nmc: "17146",
    availability: "Every day",
    image: "/dr-prabin-chaudhary.jpeg",
  },
  {
    name: "Dr. Shiva Bhusan Pandit",
    qualification: "MBBS, MS",
    specialty: "ENT Surgeon",
    field: "Ear, Nose & Throat",
    nmc: "16947",
    availability: "Every Saturday",
    image: "/dr-shiva-bhusan-pandit.jpeg",
  },
  {
    name: "Dr. Pradip Kumar Yadav",
    qualification: "General Surgeon",
    specialty: "General Surgeon",
    field: "Surgical Consultation",
    nmc: "10989",
    availability: "Call for appointment",
    image: "/dr-pradip-kumar-yadav.jpeg",
  },
  {
    name: "Dr. Subodh Dahal",
    qualification: "MBBS, MD",
    specialty: "Consultant Psychiatrist",
    field: "Mental Health",
    nmc: "10858",
    availability: "Call for appointment",
    image: "/dr-subodh-dahal.jpeg",
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
            Medical Team
          </p>
          <h2 className="text-4xl font-bold text-blue-950">
            Meet Our Doctors
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Consult experienced specialists available at Shrijanshil Medical
            Hall for routine care, child health, surgery, ENT, orthopedics, and
            mental health support.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="overflow-hidden rounded-lg border border-blue-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] bg-blue-50">
                <Image
                  src={doctor.image}
                  alt={`${doctor.name} poster`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>

              <div className="space-y-5 p-6">
                <div>
                  <div className="mb-3 inline-flex rounded-md bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    {doctor.field}
                  </div>
                  <h3 className="text-2xl font-bold leading-tight text-blue-950">
                    {doctor.name}
                  </h3>
                  <p className="mt-2 font-semibold text-sky-700">
                    {doctor.specialty}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {doctor.qualification}
                  </p>
                </div>

                <div className="grid gap-3 text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <IdCard className="h-5 w-5 text-blue-600" />
                    <span>NMC No: {doctor.nmc}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CalendarDays className="h-5 w-5 text-blue-600" />
                    <span>{doctor.availability}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Stethoscope className="h-5 w-5 text-blue-600" />
                    <span>{doctor.field}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
