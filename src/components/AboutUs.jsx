import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 p-8 lg:p-16" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* First div: 1/5 space */}
        <div className="lg:col-span-1 flex flex-col justify-between">
          <div className="text-2xl font-semibold mb-4">Who We Are</div>
          <div className="text-6xl font-extrabold leading-tight space-y-2">
            <div>WHAT</div>
            <div>WE</div>
            <div>DO</div>
          </div>
        </div>

        {/* Second div: 2/5 space */}
        <div className="lg:col-span-2 space-y-6">
          <p className="text-lg leading-relaxed">
            To enjoy good health, to bring true happiness to one's family, to bring peace to all, one must first discipline and control one's own mind. If a man can control his mind he can find the way to Enlightenment, and all wisdom and virtue will naturally come to him.
          </p>
          <p className="text-lg leading-relaxed">
            Saving our planet, lifting people out of poverty, advancing economic growth... these are one and the same fight. We must connect the dots between climate change, water scarcity, energy shortages, global health, food security and women's empowerment. Solutions to one problem must be solutions for all.
          </p>
        </div>

        {/* Third div: 2/5 space */}
        <div className="lg:col-span-2 space-y-6">
          <p className="text-lg leading-relaxed">
            Our greatest happiness does not depend on the condition of life in which chance has placed us, but is always the result of a good conscience, good health, occupation, and freedom in all just pursuits.
          </p>
          <p className="text-lg leading-relaxed">
            Being in control of your life and having realistic expectations about your day-to-day challenges are the keys to stress management, which is perhaps the most important ingredient to living a happy, healthy and rewarding life.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
