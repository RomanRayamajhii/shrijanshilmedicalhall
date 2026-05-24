import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-blue-900 to-sky-500 px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-4xl font-bold">
            Contact For Appointment
          </h2>

          <p className="mb-8 text-lg leading-8 text-blue-100">
            Patients can contact us for appointments and consultation.
          </p>

          <div className="space-y-4 text-lg">

            {/* Phone */}
            <Link
              href="tel:+9779702622921"
              className="block hover:text-blue-200 transition flex items-center gap-2"
            ><Phone size={20}/>+977 9702622921
            </Link>
            <Link
              href="whatsapp://send?phone=+9779702622921"
              className="block hover:text-blue-200 transition flex items-center gap-2"
            ><MessageCircle size={20} className="text-green-400"/>+977 9702622921
            </Link>

            {/* Location */}
            <Link
              href="https://maps.google.com/?q=Kankai-08,Laxmipur,Jhapa,Nepal"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-blue-200 transition flex items-center gap-2"
            > <MapPin  size={20}/>Kankai-08, Laxmipur, Jhapa, Nepal
            </Link>

            {/* Email */}
            <Link
              href="mailto:Shrijanshil4medical@gmail.com"
              className="block hover:text-blue-200 transition flex items-center gap-2"
            > <Mail size={20}/>Shrijanshil4medical@gmail.com
            </Link>

          </div>
        </div>

        <div className="rounded-[30px] bg-white p-8 text-gray-800">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Patient Name"
              className="w-full rounded-2xl border p-4"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-2xl border p-4"
            />

            <textarea
              rows={5}
              placeholder="Describe Your Problem"
              className="w-full rounded-2xl border p-4"
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-2xl bg-blue-600 px-6 py-4 text-lg font-semibold text-white"
            >
              Send Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}