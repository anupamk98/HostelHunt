import React from 'react'
import Footer from "../components/Footer"
export default function About() {
  return (
    <>
      <div className="py-20 px-4 max-w-6xl mx-auto mt-20">
        <h1 className="text-3xl font-bold mb-4 text-slate-800">
          About HostelHunt
        </h1>
        <p className="mb-4 text-slate-700">
          HostelHunt is your ultimate companion in navigating the sometimes
          overwhelming process of selecting the perfect college hostel.
        </p>
        <p className="mb-4 text-slate-700">
          With our streamlined platform, you can easily explore various options,
          compare amenities, and make informed decisions tailored to your needs.
          Whether you’re a freshman looking for a welcoming community or a
          senior seeking a quieter space to focus, HostelHunt is designed to
          simplify your search and help you secure the ideal living environment.
        </p>
        <p className="mb-4 text-slate-700">
          Find, choose, and start living your best campus life with HostelHunt!
        </p>
      </div>
    </>
  );
}
