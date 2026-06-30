"use client";

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

const appointmentPhone = "9779702622921";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const patientName = String(formData.get("patientName") || "").trim();
    const phoneNumber = String(formData.get("phoneNumber") || "").trim();
    const problem = String(formData.get("problem") || "").trim();

    if (!patientName || !phoneNumber || !problem) {
      setStatus("Please fill in all appointment details.");
      return;
    }

    const message = [
      "New appointment request",
      "",
      `Patient Name: ${patientName}`,
      "",
      `Phone Number: ${phoneNumber}`,
      "",
      `Problem: ${problem}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${appointmentPhone}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setStatus("Opening WhatsApp with your appointment request.");
    event.currentTarget.reset();
  }

  return (
    <section
      id="contact"
      className="bg-linear-to-r from-blue-900 to-sky-500 px-6 py-20 text-white"
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
              className="flex hover:text-blue-200 transition items-center gap-2"
            ><Phone size={20}/>+977 9702622921
            </Link>
            <Link
              href={`https://wa.me/${appointmentPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex hover:text-blue-200 transition items-center gap-2"
            ><MessageCircle size={20} className="text-green-400"/>+977 9702622921
            </Link>

            {/* Location */}
            <Link
              href="https://www.google.com/maps/place/Shrijanshil+medical+hall/@26.6385219,87.9457781,701m/data=!3m1!1e3!4m16!1m9!3m8!1s0x39e5bb0022906e97:0xe3fb889684e395fb!2sShrijanshil+medical+hall!8m2!3d26.6385219!4d87.9457781!9m1!1b1!16s%2Fg%2F11mcx966_1!3m5!1s0x39e5bb0022906e97:0xe3fb889684e395fb!8m2!3d26.6385219!4d87.9457781!16s%2Fg%2F11mcx966_1!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex hover:text-blue-200 transition items-center gap-2"
            > <MapPin  size={20}/>Kankai-08, Laxmipur, Jhapa, Nepal
            </Link>

            {/* Email */}
            <Link
              href="mailto:Shrijanshil4medical@gmail.com"
              className="hover:text-blue-200 transition flex items-center gap-2"
            > <Mail size={20}/>Shrijanshil4medical@gmail.com
            </Link>

          </div>
        </div>

        <div className="rounded-[30px] bg-white p-8 text-gray-800">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              name="patientName"
              type="text"
              placeholder="Patient Name"
              required
              className="w-full rounded-2xl border p-4"
            />

            <input
              name="phoneNumber"
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full rounded-2xl border p-4"
            />

            <textarea
              name="problem"
              rows={5}
              placeholder="Describe Your Problem"
              required
              className="w-full rounded-2xl border p-4"
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-2xl bg-blue-600 px-6 py-4 text-lg font-semibold text-white"
            >
              Send Appointment
            </button>

            {status ? (
              <p className="text-center text-sm font-medium text-blue-700">
                {status}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
