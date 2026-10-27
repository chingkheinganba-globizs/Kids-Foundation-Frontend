"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  X,
  Send,
  GraduationCap,
  Sparkles,
  Phone,
  User,
  CheckCircle2,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export function FloatingEnquireTab() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    parentPhone: "",
    grade: "",
    message: "",
  });

  // Handle escape key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── 1. Floating Right-Side Tab ── */}
      <aside
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex items-center"
        aria-label="Admissions quick enquiry"
      >
        <button
          type="button"
          onClick={() => {
            setIsOpen(true);
            setSubmitted(false);
          }}
          className="group relative flex flex-col items-center justify-center bg-gradient-to-b from-[#F47C61] via-[#eb684a] to-[#d95538] text-white py-4 sm:py-5 px-2.5 sm:px-3 rounded-l-2xl shadow-[-6px_4px_24px_rgba(244,124,97,0.45)] hover:shadow-[-8px_6px_28px_rgba(244,124,97,0.6)] border-y border-l border-white/30 transition-all duration-300 hover:-translate-x-1.5 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FBBF24] focus:ring-offset-2"
          aria-label="Open admission enquiry form"
          title="Admission Enquiry - Academic Session 2026-27"
        >
          {/* Subtle pulsating beacon dot */}
          <span className="relative flex h-2.5 w-2.5 mb-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FBBF24] opacity-80" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FBBF24]" />
          </span>

          {/* Graduation Cap Icon */}
          <GraduationCap className="w-4 h-4 text-white mb-2 transition-transform duration-300 group-hover:scale-110" />

          {/* Vertical Text matching design reference */}
          <span className="[writing-mode:vertical-rl] text-[12px] sm:text-[13px] font-extrabold uppercase tracking-widest text-white drop-shadow-sm select-none py-1">
            ENQUIRE NOW
          </span>

          {/* Golden accent bar on the outer left edge */}
          <span className="absolute left-0 top-3 bottom-3 w-[3px] bg-[#FBBF24] rounded-r-full opacity-70 group-hover:opacity-100 transition-opacity" />
        </button>
      </aside>

      {/* ── 2. Interactive Quick Enquiry Drawer / Modal ── */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end sm:p-4 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#0B1B33]/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="relative w-full sm:max-w-md h-full sm:h-auto sm:max-h-[92vh] bg-white sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 flex flex-col animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#17345F] to-[#22487c] text-white p-5 sm:p-6 relative overflow-hidden shrink-0">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-[#FBBF24]/15 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#FBBF24]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#FBBF24] uppercase tracking-wider block">
                      Admissions 2026-27
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-tight">
                      Quick Admission Enquiry
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close enquiry form"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-white/80 mt-2.5 leading-relaxed relative z-10">
                Have questions about registration, class availability, or curriculum? Submit your
                details and our admissions team will contact you.
              </p>
            </div>

            {/* Body */}
            <div className="p-5 sm:p-6 flex-1 overflow-y-auto">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#17345F]">
                    Enquiry Received!
                  </h4>
                  <p className="text-slate-600 text-sm max-w-xs mx-auto leading-relaxed">
                    Thank you, <strong>{formData.studentName || "Parent"}</strong>. Our admissions
                    counselor will get in touch with you shortly on{" "}
                    <strong>{formData.parentPhone}</strong>.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="px-6 py-2.5 rounded-xl bg-[#17345F] text-white text-xs font-semibold hover:bg-[#122847] transition-all"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Student&apos;s Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={formData.studentName}
                        onChange={(e) =>
                          setFormData({ ...formData, studentName: e.target.value })
                        }
                        placeholder="e.g. Priyo Singh"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#17345F]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Parent / Guardian Mobile *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        required
                        value={formData.parentPhone}
                        onChange={(e) =>
                          setFormData({ ...formData, parentPhone: e.target.value })
                        }
                        placeholder="e.g. +91 98765 43210"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#17345F]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Class / Grade Seeking Admission *
                    </label>
                    <select
                      required
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#17345F]"
                    >
                      <option value="">Select Grade / Stage</option>
                      <option value="Pre-Nursery">Pre-Nursery (Age 2.5+)</option>
                      <option value="Nursery">Nursery (Age 3+)</option>
                      <option value="KG">Kindergarten / Prep</option>
                      <option value="Class I">Class I</option>
                      <option value="Class II">Class II</option>
                      <option value="Class III">Class III</option>
                      <option value="Class IV">Class IV</option>
                      <option value="Class V">Class V</option>
                      <option value="Class VI">Class VI</option>
                      <option value="Class VII">Class VII</option>
                      <option value="Class VIII">Class VIII</option>
                      <option value="Class IX">Class IX</option>
                      <option value="Class X">Class X</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Any specific question? (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="School timing, bus routes, fee structure, etc."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#17345F]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#F47C61] hover:bg-[#e0583b] text-white font-bold text-sm shadow-lg shadow-[#F47C61]/30 hover:shadow-xl transition-all active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      Submit Enquiry
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Footer with link to full Admissions page */}
            <div className="bg-slate-50 border-t border-slate-100 p-4 text-center shrink-0">
              <Link
                href="/admission"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#17345F] hover:text-[#F47C61] transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>View Full Admission Process & Prospectus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
