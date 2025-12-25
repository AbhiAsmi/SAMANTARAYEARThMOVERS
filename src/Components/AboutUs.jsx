import React from "react";
export default function AboutUs() {
  return (
    <section className="bg-[#fbf7f2] text-[#0b0b0b] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            WHERE EXPERTISE MEETS EXCELLENCE
          </h1>
          <p className="mt-2 text-lg md:text-xl font-medium">— YOUR TRUST, OUR COMMITMENT.</p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6">
            <h2 className="text-2xl font-bold mb-6">WHY CHOOSE US?</h2>

            <div className="space-y-6 text-sm md:text-base">
              <article>
                <h3 className="font-semibold">Global Expertise</h3>
                <p className="mt-2 text-gray-700">
                  With decades of experience in international shipping, we understand the
                  complexities of global logistics. From customs regulations to regional
                  challenges, we’ve mastered the art of delivering your goods safely and
                  efficiently, no matter the destination.
                </p>
              </article>
              <article>
                <h3 className="font-semibold">Advanced Technology</h3>
                <p className="mt-2 text-gray-700">
                  Our state-of-the-art tracking and logistics systems ensure complete
                  transparency and control. Real-time updates, automated notifications, and
                  seamless integration with your business tools make shipping simpler and
                  smarter.
                </p>
              </article>

              <article>
                <h3 className="font-semibold">Customer-Centric Approach</h3>
                <p className="mt-2 text-gray-700">
                  Your satisfaction is our top priority. We tailor our services to meet your
                  unique needs, offering personalized solutions and dedicated support every
                  step of the way.
                </p>
              </article>

              <article>
                <h3 className="font-semibold">Transparent Pricing</h3>
                <p className="mt-2 text-gray-700">
                  No hidden fees, no surprises. We believe in clear, upfront pricing so you
                  can plan your budget with confidence. Our competitive rates ensure you get
                  the best value without compromising on quality.
                </p>
              </article>
            </div>
          </div>
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-2xl lg:max-w-md rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJ1Y2t8ZW58MHx8MHx8fDA%3D"
                alt="Logistics and shipping trucks in a warehouse"
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
