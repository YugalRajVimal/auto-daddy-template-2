export default function Offer() {
  return (
    <section className="bg-dark noise-bg px-5 lg:px-16 py-16 lg:py-20">
      <div className="max-w-5xl mx-auto">
        <span className="inline-flex items-center gap-2 font-heading uppercase text-sm tracking-widest text-yellow mb-3">
          Overview
        </span>
        <h2 className="text-white font-heading uppercase font-bold text-3xl sm:text-4xl leading-tight mb-5">
          Automotive Service Data
        </h2>
        <p className="text-gray-400 max-w-2xl mb-10 leading-relaxed">
          Choosing a full-service option offers several advantages for vehicle owners: Every visit at Auto 27 is recorded in our system. We share this data with our regular clients that helps to revive the clear lense of service record with no costs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {/* Customer Satisfaction */}
          <div className="bg-dark-2 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center">
            <span className="text-yellow font-heading font-bold text-5xl sm:text-6xl leading-none mb-2 flex items-baseline">
              99
              <span className="text-xl font-bold ml-1 align-top">%</span>
            </span>
            <span className="text-white font-heading uppercase text-sm tracking-wide opacity-80">Customer Satisfaction</span>
          </div>
          {/* Projects Completed */}
          <div className="bg-dark-2 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center">
            <span className="text-yellow font-heading font-bold text-5xl sm:text-6xl leading-none mb-2 flex items-baseline">
              20
              <span className="text-xl font-bold ml-1 align-top">k</span>
            </span>
            <span className="text-white font-heading uppercase text-sm tracking-wide opacity-80">Projects Completed</span>
          </div>
          {/* Partner Companies */}
          <div className="bg-dark-2 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center">
            <span className="text-yellow font-heading font-bold text-5xl sm:text-6xl leading-none mb-2 flex items-baseline">
              150
              <span className="text-xl font-bold ml-1 align-top">+</span>
            </span>
            <span className="text-white font-heading uppercase text-sm tracking-wide opacity-80">Partner Companies</span>
          </div>
          {/* Best Awards Winning */}
          <div className="bg-dark-2 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center">
            <span className="text-yellow font-heading font-bold text-5xl sm:text-6xl leading-none mb-2 flex items-baseline">
              87
            </span>
            <span className="text-white font-heading uppercase text-sm tracking-wide opacity-80">Best Awards Winning</span>
          </div>
        </div>
      </div>
    </section>
  );
}
