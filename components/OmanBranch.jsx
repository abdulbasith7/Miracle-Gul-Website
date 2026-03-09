import React from "react";
import { Globe, MapPin } from "lucide-react";

export default function OmanBranch() {
  return (
    <section className="py-5 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <div className="flex justify-center mb-4">
          <Globe className="text-green-700" size={36} />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Global Presence
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Miracle Business Hub operates across multiple regions to serve
          international markets efficiently. With a strong presence in India
          and Oman, we connect businesses with high-quality products and
          reliable supply networks.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* India Branch */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition border">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="text-green-700" />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Miracle Business Hub
            </h3>

            <p className="text-gray-500 mb-3">India</p>

            <p className="text-gray-600 text-sm">
              Our India office manages sourcing, supplier partnerships, and
              domestic operations to ensure consistent product availability.
            </p>
          </div>

          {/* Oman Branch */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition border">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="text-green-700" />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Miracle Gulf Business Hub
            </h3>

            <p className="text-gray-500 mb-3">Oman</p>

            <p className="text-gray-600 text-sm">
              Our Oman branch strengthens our international trade network,
              enabling efficient distribution and business partnerships across
              the Gulf region.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}