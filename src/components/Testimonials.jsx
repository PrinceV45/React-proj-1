import React from "react";

const testimonials = [
  {
    text: `“I’ve tried everything – WW, Jenny Craig, meal replacements, intermittent fasting,
keto, and more… Now, at 59 years old, I've been following the IWL program for 6 months
and have lost 7 kgs. I enjoy cooking and eating more now than I have in years.”`,
    name: "Karen Young",
  },
  {
    text: `“I am a 62 yr old health professional with behavioural problems around eating and
managing fatigue… This evidence based program is way above other programs I've tried or promoted.”`,
    name: "Jen Hunt",
  },
  {
    text: `“I didn’t realize how much I was affected by an all or nothing mentality until I heard
Dr. Nick talk about it. Now that I’m aware of how that mentality feeds directly into downward
emotional spirals I can do something about it.”`,
    name: "Debra Davis",
  },
  {
    text: `“As a GP and preventative health expert, I fully support the Interval Weight Loss program…
This is a genuine life changing program that I fully recommend to my patients, friends and family.”`,
    name: "Rebecca McGowan",
  },
  {
    text: `“Heading towards 130kg it was time to find a program based on science and common sense.
Today I am 20kg down and my life has changed in so many ways. I am the happiest and healthiest
I have ever been in my life.”`,
    name: "Sharon Contin",
  },
  {
    text: `“I feel I’ve turned back the clock on my body… without going hungry or feeling like I can’t enjoy
the foods I like. It has reversed the upward creep of the scales.”`,
    name: "Anne Walsh",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#163A5F] mb-14">
        Trusted by those who’ve tried everything
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-5">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 shadow-sm bg-white"
          >
            <p className="text-gray-700 leading-relaxed mb-4">{item.text}</p>
            <p className="font-semibold text-[#163A5F]">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
