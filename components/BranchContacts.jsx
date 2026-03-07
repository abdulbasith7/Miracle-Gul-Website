import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function BranchContacts() {
  const branches = [
    {
      name: "Miracle Business Hub",
      country: "India",
      phone: "+91 9744759329",
      email: "info@miraclebusinesshub.com",
    },
    {
      name: "Miracle Gulf Business Hub",
      country: "Oman",
      phone: "+968 93843669",
      email: "info@miraclebusinesshub.com",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {branches.map((branch, index) => (
        <div
          key={index}
          className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-green-600 transition"
        >
          <h3 className="text-xl font-semibold text-white mb-2">
            {branch.name}
          </h3>

          <p className="flex items-center gap-2 text-gray-400 mb-3">
            <MapPin size={18} /> {branch.country}
          </p>

          <p className="flex items-center gap-2 text-gray-300 mb-2">
            <Phone size={18} /> {branch.phone}
          </p>

          <p className="flex items-center gap-2 text-gray-300">
            <Mail size={18} /> {branch.email}
          </p>
        </div>
      ))}
    </div>
  );
}
