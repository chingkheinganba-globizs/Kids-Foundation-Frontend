"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  MapPin,
  User,
  Award,
  CheckCircle2,
  Sparkles,
  Send,
  ArrowRight,
} from "lucide-react";
import { Club } from "@/data/clubsData";

interface ClubDetailModalProps {
  club: Club | null;
  onClose: () => void;
}

export function ClubDetailModal({ club, onClose }: ClubDetailModalProps) {
  const [activeTab, setActiveTab] = useState<"details" | "join">("details");
  const [submitted, setSubmitted] = useState(false);
  const [prevClub, setPrevClub] = useState(club);
  const [formData, setFormData] = useState({
    studentName: "",
    grade: "",
    parentPhone: "",
    reason: "",
  });

  if (club !== prevClub) {
    setPrevClub(club);
    setActiveTab("details");
    setSubmitted(false);
  }

  useEffect(() => {
    if (!club) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [club, onClose]);

  if (!club) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0B1B33]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Hero Header with Club Image & Gradient */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-[#17345F]">
          <Image
            src={club.image}
            alt={club.name}
            fill
            className="object-cover opacity-35"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17345F] via-[#17345F]/70 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-all z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Content */}
          <div className="absolute bottom-4 left-5 right-5 sm:left-8 sm:right-8 text-white z-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FBBF24] text-[#17345F] mb-2">
              {club.category}
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
              {club.name}
            </h2>
            <p className="text-white/80 text-xs sm:text-sm mt-1 line-clamp-1">
              {club.tagline}
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 px-5 sm:px-8 bg-slate-50/70">
          <button
            onClick={() => setActiveTab("details")}
            className={`py-3.5 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all ${
              activeTab === "details"
                ? "border-[#17345F] text-[#17345F]"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            Club Details & Activities
          </button>
          <button
            onClick={() => setActiveTab("join")}
            className={`py-3.5 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === "join"
                ? "border-[#F47C61] text-[#F47C61]"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F47C61]" />
            Join / Express Interest
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-5 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
          {activeTab === "details" ? (
            <>
              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Eligibility
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#17345F] mt-0.5 block">
                    {club.gradeLevel}
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Members
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#17345F] mt-0.5 block">
                    {club.membersCount} Active
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 col-span-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Schedule
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#17345F] mt-0.5 block">
                    {club.meetingSchedule}
                  </span>
                </div>
              </div>

              {/* Mentor & Venue Strip */}
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#17345F] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#17345F] block">{club.mentor}</span>
                    <span className="text-slate-500 text-xs">{club.mentorRole}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-blue-200/80 text-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#F47C61] shrink-0" />
                  <span>{club.location}</span>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  About the Club
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {club.description}
                </p>
              </div>

              {/* Activities */}
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Core Activities & Workshops
                </h3>
                <div className="space-y-2">
                  {club.keyActivities.map((act, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#F47C61] shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Outcomes */}
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Key Skills & Outcomes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {club.learningOutcomes.map((out, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-2.5 rounded-xl bg-amber-50/50 border border-amber-100 text-xs text-amber-900 font-medium"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#FBBF24] shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Highlight */}
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-xs text-emerald-800">
                <Award className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <strong className="block font-bold">Recent Club Achievement</strong>
                  <span>{club.recentHighlight}</span>
                </div>
              </div>
            </>
          ) : submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#17345F]">Interest Registered!</h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you for your interest in joining <strong>{club.name}</strong>. The faculty
                coordinator (<strong>{club.mentor}</strong>) has been notified. We will contact
                you regarding orientation schedule and session timing.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setActiveTab("details");
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#17345F] text-white text-xs font-semibold hover:bg-[#122847] transition-all"
              >
                Back to Club Details
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-[#17345F]">
                  Join {club.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Fill in this short interest form. Open to {club.gradeLevel}.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="e.g. Sanathoi Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#17345F]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Current Class / Grade *
                  </label>
                  <select
                    required
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#17345F]"
                  >
                    <option value="">Select Class</option>
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
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Parent / Guardian Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.parentPhone}
                  onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#17345F]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Why would you like to join this club? (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  placeholder="Tell us about your interests, prior experience, or what you hope to learn..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#17345F]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab("details")}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#F47C61] hover:bg-[#e0684f] text-white text-xs font-semibold shadow-md active:scale-95 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  Submit Registration
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-slate-100 px-5 sm:px-8 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            Close
          </button>

          {activeTab === "details" && (
            <button
              onClick={() => setActiveTab("join")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#17345F] hover:bg-[#122847] text-white text-xs font-semibold shadow-md active:scale-95 transition-all"
            >
              Enroll in Club
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
