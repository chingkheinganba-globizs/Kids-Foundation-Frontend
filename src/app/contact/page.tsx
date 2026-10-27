"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/ui/PageBanner";
import { CONTACT_PAGE_DATA } from "@/data/contactPage";
import { IMAGES } from "@/data/images";
import { MapPin, Phone, Smartphone, Mail, Clock } from "lucide-react";

const iconMap = {
  "map-pin": MapPin,
  phone: Phone,
  smartphone: Smartphone,
  mail: Mail,
  clock: Clock,
};

export default function ContactPage() {
  const { banner, info, form, map } = CONTACT_PAGE_DATA;
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only: show success message. Backend submission will be added during Strapi phase.
    setSubmitted(true);
  };

  const contactItems = [
    { ...info.address, values: undefined },
    { ...info.phone, values: undefined },
    { ...info.mobile, value: info.mobile.values.join(" / ") },
    { ...info.email, values: undefined },
    { ...info.hours, values: undefined },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-white overflow-x-hidden selection:bg-[#F47C61] selection:text-white">
      <Header />

      <main className="flex-1 flex flex-col">
        <PageBanner title={banner.title} breadcrumb={banner.breadcrumb} />

        {/* Contact Info & Form */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
              {/* Contact Info */}
              <div className="lg:col-span-5">
                <span className="text-[#D97706] font-semibold text-xs sm:text-[13px] tracking-[0.25em] uppercase mb-2.5 sm:mb-3 inline-block leading-normal">
                  GET IN TOUCH
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#17345F] leading-[1.22] tracking-tight mb-4 sm:mb-6">
                  We&apos;d love to hear from you
                </h2>
                <p className="text-sm sm:text-base text-[#475569] leading-[1.8] sm:leading-[1.85] mb-8">
                  Whether you have questions about admissions, our curriculum, campus tours, or general queries, our friendly administrative team is here to assist you.
                </p>

                <div className="space-y-6">
                  {contactItems.map((item) => {
                    const Icon = iconMap[item.icon as keyof typeof iconMap];
                    return (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-[#E7EEF8] flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-5 h-5 text-[#17345F]" />
                        </div>
                        <div>
                          <p className="text-xs sm:text-[13px] font-bold text-[#17345F] uppercase tracking-wider mb-1">
                            {item.label}
                          </p>
                          <p className="text-sm sm:text-base text-[#475569] leading-[1.7]">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-7">
                <div className="bg-[#FAF7F2] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#EBE3D5] shadow-[0_8px_30px_rgba(23,52,95,0.04)]">
                  <span className="text-[#D97706] font-semibold text-xs sm:text-[13px] tracking-[0.25em] uppercase mb-2 inline-block leading-normal">
                    SEND A MESSAGE
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#17345F] leading-[1.25] mb-2 tracking-tight">
                    {form.heading}
                  </h3>
                  <p className="text-sm sm:text-base text-[#475569] leading-[1.8] sm:leading-[1.85] mb-6 sm:mb-8">
                    {form.description}
                  </p>

                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-[#17345F] mb-1">Thank you!</h4>
                      <p className="text-sm text-[#475569]">
                        Your message has been received. We&apos;ll get back to you soon.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
                        }}
                        className="mt-4 text-sm text-[#F47C61] hover:text-[#E0684E] font-semibold transition-colors cursor-pointer"
                      >
                        Send another message →
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {form.fields.map((field) => (
                          <div key={field.name}>
                            <label
                              htmlFor={field.name}
                              className="block text-xs font-semibold text-[#17345F] mb-1.5"
                            >
                              {field.label}
                              {field.required && <span className="text-[#F47C61] ml-0.5">*</span>}
                            </label>
                            <input
                              type={field.type}
                              id={field.name}
                              name={field.name}
                              placeholder={field.placeholder}
                              required={field.required}
                              value={formState[field.name as keyof typeof formState]}
                              onChange={handleChange}
                              className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-[#17345F] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#F47C61]/30 focus:border-[#F47C61] transition-all"
                            />
                          </div>
                        ))}
                      </div>

                      <div>
                        <label
                          htmlFor={form.messageField.name}
                          className="block text-xs font-semibold text-[#17345F] mb-1.5"
                        >
                          {form.messageField.label}
                          {form.messageField.required && <span className="text-[#F47C61] ml-0.5">*</span>}
                        </label>
                        <textarea
                          id={form.messageField.name}
                          name={form.messageField.name}
                          placeholder={form.messageField.placeholder}
                          required={form.messageField.required}
                          value={formState.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-[#17345F] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#F47C61]/30 focus:border-[#F47C61] transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="inline-flex items-center justify-center bg-[#F47C61] hover:bg-[#E0684E] text-white text-sm font-semibold px-7 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200 active:scale-98 cursor-pointer"
                      >
                        {form.submitLabel}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F2]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-[#D97706] font-semibold text-xs sm:text-[13px] tracking-[0.25em] uppercase mb-2.5 sm:mb-3 inline-block leading-normal">
                FIND US
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#17345F] leading-[1.22] tracking-tight">
                Visit Our Campus
              </h2>
            </div>

            <div className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/7] rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(23,52,95,0.08)] border border-slate-200 bg-[#E7EEF8]">
              <iframe
                src={map.embedUrl}
                title={map.title}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>

                <Footer />
      </main>
    </div>
  );
}
