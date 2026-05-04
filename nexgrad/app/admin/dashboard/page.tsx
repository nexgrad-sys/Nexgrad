"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DashboardPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 space-y-6">

      {/* STATS */}
      <div className="grid grid-cols-4 gap-6">
        <StatCard title="Programs" value={data.totalPrograms} />
        <StatCard title="Blogs" value={data.blogs} />
        <StatCard title="Admissions" value={data.admissions} />
        <StatCard title="Users" value={data.users} />
      </div>

      {/* CHART */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="font-semibold mb-4">Admissions Overview</h3>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* RECENT DATA */}
      <div className="grid grid-cols-3 gap-6">

        <RecentCard title="Recent Banners">
          {data.recentBanners.map((b: any) => (
            <div key={b.id} className="flex items-center gap-2 mb-2">
              <img src={b.image} className="w-10 h-10 object-cover" />
              <span className="text-sm">{b.title}</span>
            </div>
          ))}
        </RecentCard>

        <RecentCard title="Recent FAQs">
          {data.recentFaqs.map((f: any) => (
            <p key={f.id} className="text-sm mb-2">
              {f.question}
            </p>
          ))}
        </RecentCard>

        <RecentCard title="Testimonials">
          {data.recentTestimonials.map((t: any) => (
            <p key={t.id} className="text-sm mb-2">
              {t.name}
            </p>
          ))}
        </RecentCard>

      </div>

    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function StatCard({ title, value }: any) {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-xl font-semibold">{value}</h3>
    </div>
  );
}

function RecentCard({ title, children }: any) {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h3 className="font-semibold mb-3">{title}</h3>
      {children}
    </div>
  );
}