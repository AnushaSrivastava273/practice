import React from "react";
import {
  FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt,
  FaGlobe, FaEnvelope, FaPhone, FaCalendarAlt, FaUsers,
  FaCheckCircle, FaEye
} from "react-icons/fa";
import logo from "./assets/logo.jpg";

function CompanyProfile() {
  const teamMembers = Array(5).fill("Emily");

  return (
<div className="min-h-screen bg-purple-50 flex flex-col lg:flex-row gap-6">

      {/* Left Sidebar */}
      <aside className="w-full lg:w-1/4 bg-white p-6 flex flex-col justify-between">

        <div className="flex flex-col items-center text-center gap-2">
          <img src={logo} alt="Company Logo" className="w-24 h-24 rounded-full object-cover" />
          <h2 className="font-bold text-lg">NS APPS INNOVATION LLP</h2>
          <p className="text-sm text-gray-500">A-block 5th floor Mauryalok complex Patna</p>

          {/* Social Links */}
          <div className="flex gap-4 mt-2 text-purple-700">
            <a href="https://www.facebook.com/nsgamesstudio/" target="_blank" rel="noopener noreferrer"><FaFacebookF className="text-xl hover:text-purple-500" /></a>
            <a href="https://www.instagram.com/peepalbaba/" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-xl hover:text-purple-500" /></a>
            <a href="https://in.linkedin.com/company/ns-apps" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="text-xl hover:text-purple-500" /></a>
            <a href="https://maps.google.com/?q=Mauryalok+Complex+Patna" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt className="text-xl hover:text-purple-500" /></a>
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden sm:block mt-6 space-y-2 text-sm text-left w-full">
            <p className="flex items-center gap-2"><FaGlobe /> https://nsappsstudio.com</p>
            <p className="flex items-center gap-2"><FaEnvelope /> enquiry@nsapps.in</p>
            <p className="flex items-center gap-2"><FaPhone /> +91 9128712345</p>
            <p className="flex items-center gap-2"><FaCalendarAlt /> 26 March, 2015</p>
            <p className="flex items-center gap-2"><FaUsers /> 10+ member</p>
            <p className="flex items-center gap-2"><FaCheckCircle /> Active</p>
          </div>

          {/* Mobile Contact Info */}
          <div className="block sm:hidden mt-6 w-full">
            <div className="bg-white border rounded-xl p-4 flex justify-between items-center text-center text-sm shadow-sm">
              <div className="flex-1 min-w-0"><FaCalendarAlt className="mx-auto mb-1 text-lg text-purple-600" /><p className="font-medium text-xs">26 Mar, 2015</p></div>
              <div className="w-px bg-gray-200 mx-2 h-8" />
              <div className="flex-1 min-w-0"><FaUsers className="mx-auto mb-1 text-lg text-purple-600" /><p className="font-medium text-xs">10+ members</p></div>
              <div className="w-px bg-gray-200 mx-2 h-8" />
              <div className="flex-1 min-w-0"><FaPhone className="mx-auto mb-1 text-lg text-purple-600" /><p className="font-medium text-xs">Contact</p></div>
            </div>
          </div>

          {/* About */}
          <div className="mt-6 text-left w-full">
            <h3 className="font-semibold text-lg mb-2">About company</h3>
            <p className="text-sm text-gray-600">
              NS APPS INNOVATION LLP is an initiative by the Bihar government focused on helping startups grow and succeed.
            </p>
          </div>
        </div>
      </aside>

      {/* Center + Right Section */}
      <main className="flex-1 p-6 flex flex-col lg:flex-row gap-6">

        {/* Center Content */}
        <div className="flex-1 space-y-6">

          {/* Team  */}
          <section>
            <h2 className="font-semibold text-lg mb-3 text-center">Company Team</h2>
            <div className="grid grid-cols-5 gap-4 justify-items-center">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt={member}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span className="text-sm mt-1">{member}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Showcase  */}
          <section className="bg-white rounded-2xl shadow-md p-4">
            <h2 className="font-semibold text-lg mb-3">Showcase</h2>
            <div className="flex items-center gap-3 mb-4">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-8 h-8 rounded-full" />
              <div>
                <h4 className="font-semibold">Summer Collection</h4>
                <p className="text-sm text-gray-500">A showcase of our latest summer apparel.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {Array(5).fill().map((_, i) => (
                <img
                  key={i}
                  src="https://cdn4.vectorstock.com/i/1000x1000/57/73/hands-holding-laptop-shop-online-digital-vector-12805773.jpg"
                  alt={`Showcase ${i + 1}`}
                  className="rounded-lg"
                />
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-3 flex items-center gap-1">
              <FaEye /> Views
            </p>
          </section>
        </div>

        {/*Services*/}
        <aside className="bg-white w-full lg:w-1/4 rounded-2xl shadow-md p-4">
  <h2 className="font-semibold text-lg mb-3">Services</h2>

  <div className="bg-gray-100 rounded-xl p-4">
    <img
      src="https://img.freepik.com/free-photo/top-view-man-using-his-laptop_23-2148794530.jpg?semt=ais_hybrid&w=740"
      alt="Web Development"
      className="rounded-lg mb-2"
    />
    <h4 className="font-semibold">Web Development</h4>
    <p className="text-sm text-gray-600">
      We build user-friendly, custom websites tailored to your business. Our goal is to ensure you have a smooth, powerful online presence.
    </p>
  </div>
</aside>

      </main>
    </div>
  );
}

export default CompanyProfile;
