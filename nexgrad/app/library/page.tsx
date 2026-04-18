"use client";

import { useState } from "react";

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "E-Books", "Journals", "Research Papers", "Case Studies"];

  const books = [
    {
      title: "Strategic Management in the Digital Age",
      author: "Dr. Michael Porter",
      category: "Business Strategy",
      rating: 4.8,
      downloads: 1234,
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    },
    {
      title: "Leadership and Organizational Behavior",
      author: "Prof. John Maxwell",
      category: "Leadership",
      rating: 4.9,
      downloads: 2156,
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    },
    {
      title: "Financial Management Essentials",
      author: "Dr. Warren Buffett Jr.",
      category: "Finance",
      rating: 4.7,
      downloads: 1876,
      img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    },
    {
      title: "Marketing in a Digital World",
      author: "Prof. Philip Kotler",
      category: "Marketing",
      rating: 4.9,
      downloads: 2543,
      img: "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
    },
  ];

  return (
    <section className="bg-[#f6f8fb] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-block border border-red-500 text-red-600 px-4 py-1 rounded-full text-sm mb-4">
            📚 100,000+ Digital Resources
          </div>

          <h1 className="text-4xl font-semibold">
            Digital <span className="text-red-600">E-Library</span>
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Access a comprehensive collection of e-books, research journals,
            case studies, and academic resources
          </p>

          {/* SEARCH */}
          <div className="mt-6 flex max-w-2xl mx-auto">
            <input
              placeholder="Search books, journals, research papers..."
              className="flex-1 border rounded-l-lg px-4 py-3 outline-none"
            />
            <button className="bg-red-600 text-white px-6 rounded-r-lg">
              Search
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          {[
            ["25,000+", "E-Books"],
            ["15,000+", "Journals"],
            ["50,000+", "Research Papers"],
            ["10,000+", "Case Studies"],
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 text-center border">
              <h3 className="text-2xl font-semibold text-red-600">
                {item[0]}
              </h3>
              <p className="text-gray-600">{item[1]}</p>
            </div>
          ))}
        </div>

        {/* FILTER TABS */}
        <div className="flex flex-wrap gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg border ${
                activeTab === tab
                  ? "bg-red-600 text-white"
                  : "bg-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FEATURED BOOKS */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Featured E-Books</h2>
          <button className="text-red-600">View All →</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {books.map((book, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden border">
              
              <div className="relative">
                <img
                  src={book.img}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white px-2 py-1 text-sm rounded">
                  ⭐ {book.rating}
                </div>
              </div>

              <div className="p-4">
                <p className="text-red-600 text-sm">{book.category}</p>
                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-500">{book.author}</p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-500">
                    ⬇ {book.downloads}
                  </span>
                  <button className="text-red-600 font-medium">
                    Read Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* JOURNALS + PAPERS */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* JOURNALS */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Academic Journals
            </h3>

            {[
              "Harvard Business Review",
              "Journal of Finance",
              "MIT Sloan Management Review",
              "Journal of Marketing",
              "Academy of Management Journal",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-lg border mb-3 flex justify-between"
              >
                <div>
                  <h4 className="font-medium">{item}</h4>
                  <p className="text-sm text-gray-500">
                    Management • 2000+ articles
                  </p>
                </div>

                <button className="border border-red-500 text-red-600 px-4 rounded">
                  Access
                </button>
              </div>
            ))}
          </div>

          {/* RESEARCH */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Latest Research Papers
            </h3>

            {[
              "Digital Transformation in GCC Enterprises",
              "Sustainable Business Models",
              "AI in Financial Services",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-lg border mb-3 flex justify-between"
              >
                <div>
                  <h4 className="font-medium">{item}</h4>
                  <p className="text-sm text-gray-500">
                    2025 • 200+ citations
                  </p>
                </div>

                <button className="text-red-600">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-10 text-center mt-16">
          <h2 className="text-2xl font-semibold mb-2">
            Unlock Full Library Access
          </h2>
          <p className="mb-6">
            Get unlimited access to premium journals and research databases
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-white text-red-600 px-6 py-3 rounded-lg">
              Login to Access
            </button>
            <button className="border border-white px-6 py-3 rounded-lg">
              Become a Student
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}