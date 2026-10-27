import { Publication } from "@/data/publicationsData";

export function downloadPublicationFile(pub: Publication) {
  const fileUrl = pub.pdfUrl || `/documents/publications/${pub.downloadFileName}`;
  const a = document.createElement("a");
  a.href = fileUrl;
  a.download = pub.downloadFileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

