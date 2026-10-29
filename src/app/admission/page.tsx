import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/ui/PageBanner";
import { ADMISSION_PAGE_DATA } from "@/data/admissionPage";
import { Download } from "lucide-react";
import { getAdmissionPageData, getStrapiMediaUrl } from "@/lib/strapi";

export const metadata: Metadata = {
  title: "Admission | Kids' Foundation",
  description:
    "Admission information, enquiry, procedures and fee structure for Kids' Foundation, Imphal — Pre-Nursery to Class XII.",
};

export default async function AdmissionPage() {
  const strapiData = await getAdmissionPageData();

  const banner = {
    title: strapiData?.bannerTitle || ADMISSION_PAGE_DATA.banner.title,
    breadcrumb: strapiData?.breadcrumb || ADMISSION_PAGE_DATA.banner.breadcrumb,
  };

  const enquiry = {
    label: strapiData?.enquiry?.label || "ADMISSIONS",
    heading: strapiData?.enquiry?.heading || ADMISSION_PAGE_DATA.enquiry.heading,
    description: strapiData?.enquiry?.description || ADMISSION_PAGE_DATA.enquiry.description,
    email: strapiData?.enquiry?.email || ADMISSION_PAGE_DATA.enquiry.email,
    phone: strapiData?.enquiry?.phone || ADMISSION_PAGE_DATA.enquiry.phone,
    downloadLabel: strapiData?.enquiry?.downloadLabel || ADMISSION_PAGE_DATA.enquiry.downloadLabel,
    downloadHref:
      getStrapiMediaUrl(strapiData?.enquiry?.admissionFormFile) ||
      strapiData?.enquiry?.downloadHref ||
      ADMISSION_PAGE_DATA.enquiry.downloadHref,
  };

  const procedures = {
    label: strapiData?.procedures?.label || "GUIDELINES",
    heading: strapiData?.procedures?.heading || ADMISSION_PAGE_DATA.procedures.heading,
    registration: {
      title:
        strapiData?.procedures?.registrationTitle ||
        ADMISSION_PAGE_DATA.procedures.registration.title,
      description:
        strapiData?.procedures?.registrationDescription ||
        ADMISSION_PAGE_DATA.procedures.registration.description,
    },
    tests: {
      title:
        strapiData?.procedures?.testsTitle ||
        ADMISSION_PAGE_DATA.procedures.tests.title,
      description:
        strapiData?.procedures?.testsDescription ||
        ADMISSION_PAGE_DATA.procedures.tests.description,
    },
  };

  const feeStructure = {
    label: strapiData?.feeStructure?.label || "FEE DETAILS",
    heading: strapiData?.feeStructure?.heading || ADMISSION_PAGE_DATA.feeStructure.heading,
    tuitionFees: {
      title:
        strapiData?.feeStructure?.tuitionFeesTitle ||
        ADMISSION_PAGE_DATA.feeStructure.tuitionFees.title,
      rows:
        strapiData?.feeStructure?.tuitionFees &&
        strapiData.feeStructure.tuitionFees.length > 0
          ? strapiData.feeStructure.tuitionFees.map((row, idx) => ({
              level: row.level,
              description:
                row.description ||
                ADMISSION_PAGE_DATA.feeStructure.tuitionFees.rows[idx]?.description ||
                "",
              amount: row.amount,
            }))
          : ADMISSION_PAGE_DATA.feeStructure.tuitionFees.rows,
    },
    admissionFees: {
      title:
        strapiData?.feeStructure?.admissionFeesTitle ||
        ADMISSION_PAGE_DATA.feeStructure.admissionFees.title,
      rows:
        strapiData?.feeStructure?.admissionFees &&
        strapiData.feeStructure.admissionFees.length > 0
          ? strapiData.feeStructure.admissionFees.map((row) => ({
              level: row.level,
              amount: row.amount,
            }))
          : ADMISSION_PAGE_DATA.feeStructure.admissionFees.rows,
    },
  };

  return (
    <div className="relative flex-1 flex flex-col bg-white overflow-x-hidden selection:bg-[#F47C61] selection:text-white">
      <main className="flex-1 flex flex-col">
        <PageBanner title={banner.title} breadcrumb={banner.breadcrumb} />

        {/* Enquiry & Procedures - equal height cards */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* Admission Enquiry */}
              <div className="bg-[#F8FAFC] rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-9 border border-slate-100 flex flex-col justify-between shadow-xs">
                <div>
                  <span className="text-[#D97706] font-semibold text-xs sm:text-[13px] tracking-[0.25em] uppercase mb-2.5 sm:mb-3 inline-block leading-normal">
                    {enquiry.label}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#17345F] mb-4 tracking-tight leading-[1.25]">
                    {enquiry.heading}
                  </h2>
                  <div className="w-12 h-1 bg-[#D97706] rounded-full mb-6" />
                  <p className="text-sm sm:text-base text-[#475569] leading-[1.8] sm:leading-[1.85] mb-6">
                    {enquiry.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="text-sm font-bold text-[#17345F] shrink-0 sm:w-32">Email:</span>
                      <a
                        href={`mailto:${enquiry.email}`}
                        className="text-sm text-[#F47C61] hover:text-[#E0684E] font-medium transition-colors break-all"
                      >
                        {enquiry.email}
                      </a>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="text-sm font-bold text-[#17345F] shrink-0 sm:w-32">Contact number:</span>
                      <span className="text-sm text-[#475569]">{enquiry.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={enquiry.downloadHref}
                    className="inline-flex items-center gap-2 bg-[#F47C61] hover:bg-[#E0684E] text-white text-sm font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200 active:scale-98"
                  >
                    <Download className="w-4 h-4" />
                    {enquiry.downloadLabel}
                  </Link>
                </div>
              </div>

              {/* Admission Procedures */}
              <div className="bg-[#F8FAFC] rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-9 border border-slate-100 flex flex-col justify-between shadow-xs">
                <div>
                  <span className="text-[#D97706] font-semibold text-xs sm:text-[13px] tracking-[0.25em] uppercase mb-2.5 sm:mb-3 inline-block leading-normal">
                    {procedures.label}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#17345F] mb-4 tracking-tight leading-[1.25]">
                    {procedures.heading}
                  </h2>
                  <div className="w-12 h-1 bg-[#D97706] rounded-full mb-6" />

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#17345F] mb-2 leading-snug">
                        {procedures.registration.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#475569] leading-[1.8] sm:leading-[1.85]">
                        {procedures.registration.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#17345F] mb-2 leading-snug">
                        {procedures.tests.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#475569] leading-[1.8] sm:leading-[1.85]">
                        {procedures.tests.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fee Structure */}
        <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F2]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
            <div className="text-center mb-10 sm:mb-12">
              <span className="text-[#D97706] font-semibold text-xs sm:text-[13px] tracking-[0.25em] uppercase mb-2.5 sm:mb-3 inline-block leading-normal">
                {feeStructure.label}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#17345F] leading-[1.25] tracking-tight">
                {feeStructure.heading}
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-10">
              {/* Tuition Fees */}
              <div className="shadow-xs rounded-2xl overflow-hidden border border-slate-200">
                <div className="bg-[#D97706] px-6 py-4">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-wide uppercase">
                    {feeStructure.tuitionFees.title}
                  </h3>
                </div>
                <div className="bg-white">
                  {feeStructure.tuitionFees.rows.map((row, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between px-6 py-4 sm:py-5 ${
                        i < feeStructure.tuitionFees.rows.length - 1
                          ? "border-b border-slate-100"
                          : ""
                      }`}
                    >
                      <div>
                        <p className="text-sm sm:text-base font-semibold text-[#17345F]">{row.level}</p>
                        <p className="text-xs sm:text-sm text-[#64748B] mt-1 leading-relaxed">{row.description}</p>
                      </div>
                      <span className="text-sm sm:text-base font-bold text-[#17345F] shrink-0 ml-6">
                        {row.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Admission Fees */}
              <div className="shadow-xs rounded-2xl overflow-hidden border border-slate-200">
                <div className="bg-[#17345F] px-6 py-4">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-wide uppercase">
                    {feeStructure.admissionFees.title}
                  </h3>
                </div>
                <div className="bg-white">
                  {feeStructure.admissionFees.rows.map((row, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between px-6 py-4 sm:py-5 ${
                        i < feeStructure.admissionFees.rows.length - 1
                          ? "border-b border-slate-100"
                          : ""
                      }`}
                    >
                      <p className="text-sm sm:text-base font-semibold text-[#17345F]">{row.level}</p>
                      <span className="text-sm sm:text-base font-bold text-[#17345F] shrink-0 ml-6">
                        {row.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
