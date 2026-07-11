import { Instagram } from "lucide-react";
import { site } from "@/data/site";
import { REQUESTS_WHATSAPP_NUMBER } from "@/lib/whatsapp";

/**
 * Small fixed-position WhatsApp + Instagram icons shown on every page so a
 * visitor can jump straight into a chat or the Instagram profile with one tap.
 */
export function FloatingSocial() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${REQUESTS_WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-105"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M16.004 2.667c-7.363 0-13.333 5.97-13.333 13.333 0 2.351.615 4.646 1.783 6.666L2.667 29.333l6.84-1.754a13.28 13.28 0 0 0 6.497 1.754h.006c7.362 0 13.332-5.97 13.332-13.333 0-3.56-1.387-6.909-3.905-9.427a13.24 13.24 0 0 0-9.433-3.906Zm0 24.4h-.005a11.08 11.08 0 0 1-5.65-1.548l-.406-.241-4.06 1.041 1.084-3.957-.264-.406a11.06 11.06 0 0 1-1.696-5.916c0-6.115 4.978-11.09 11.098-11.09a11.02 11.02 0 0 1 7.847 3.253 11.02 11.02 0 0 1 3.248 7.847c0 6.116-4.98 11.017-11.196 11.017Zm6.088-8.257c-.334-.167-1.97-.972-2.275-1.083-.305-.111-.527-.167-.75.167-.222.333-.86 1.083-1.055 1.305-.194.223-.389.25-.722.083-.334-.166-1.408-.518-2.682-1.652-.992-.884-1.662-1.977-1.856-2.31-.194-.333-.02-.514.146-.68.15-.15.334-.389.5-.583.167-.195.223-.333.334-.556.111-.222.056-.417-.028-.583-.083-.167-.75-1.806-1.028-2.472-.27-.65-.545-.562-.75-.573l-.639-.011c-.222 0-.583.083-.888.417-.305.333-1.166 1.14-1.166 2.778 0 1.639 1.194 3.222 1.361 3.444.166.222 2.35 3.588 5.694 5.032.795.343 1.416.548 1.9.702.798.254 1.524.218 2.098.132.64-.095 1.97-.806 2.248-1.583.278-.778.278-1.444.195-1.583-.083-.14-.306-.223-.64-.39Z" />
        </svg>
      </a>
      <a
        href={site.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow on Instagram"
        className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full text-white shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-105"
        style={{
          background:
            "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
        }}
      >
        <Instagram className="h-6 w-6" strokeWidth={1.75} />
      </a>
    </div>
  );
}
