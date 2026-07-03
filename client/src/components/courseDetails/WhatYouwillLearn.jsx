import { FaCheckCircle } from "react-icons/fa";

const topics = [
  "Build full-stack MERN applications",
  "Create secure REST APIs with Express.js",
  "Design responsive React applications",
  "Use MongoDB for real-world databases",
  "Implement JWT Authentication",
  "Deploy Full Stack Applications",
];

const WhatYouWillLearn = () => {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">
      <h2 className="text-3xl font-bold text-white">
        What You'll Learn
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {topics.map((topic, index) => (
          <div key={index} className="flex items-start gap-3">
            <FaCheckCircle className="mt-1 text-sky-400" />
            <span className="text-slate-300">{topic}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatYouWillLearn;