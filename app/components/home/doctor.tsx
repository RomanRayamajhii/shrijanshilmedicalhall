import Image from "next/image";

const doctors = [
  {
    name: 'Dr. Srijan Sharma',
    post: 'General Physician',
    nmc: 'NMC No: 24567',
    field: 'General Medicine',
    image: '/doctors/doctor1.jpg',
  },
  {
    name: 'Dr. Aayusha Karki',
    post: 'Pediatrician',
    nmc: 'NMC No: 31245',
    field: 'Child Specialist',
    image: '/doctors/doctor2.jpg',
  },
  {
    name: 'Dr. Ritesh Adhikari',
    post: 'Orthopedic Specialist',
    nmc: 'NMC No: 28741',
    field: 'Bone & Joint Care',
    image: '/doctors/doctor3.jpg',
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-blue-900">
          Our Doctors
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[30px] bg-white shadow-xl"
            >
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={500}
                height={500}
                className="h-80 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="mb-2 text-2xl font-bold text-blue-900">
                  {doctor.name}
                </h3>

                <p className="mb-2 font-semibold">{doctor.post}</p>
                <p className="mb-2 text-gray-500">{doctor.nmc}</p>

                <div className="rounded-xl bg-blue-100 px-4 py-2 text-blue-600">
                  {doctor.field}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}