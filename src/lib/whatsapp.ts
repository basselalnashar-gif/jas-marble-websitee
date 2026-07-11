/** The business WhatsApp number that quote and trade requests are forwarded to. */
export const REQUESTS_WHATSAPP_NUMBER = "971526925128";

/**
 * Opens a WhatsApp chat (web or app) addressed to the business number with
 * the given message pre-filled, so the visitor can send their request with
 * one tap. This is the standard "click-to-chat" approach for sites without
 * a paid WhatsApp Business API integration.
 */
export function sendToWhatsApp(message: string) {
  const url = `https://wa.me/${REQUESTS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
