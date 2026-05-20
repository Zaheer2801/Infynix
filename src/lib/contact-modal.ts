export const CONTACT_MODAL_EVENT = "open-contact-modal";
export function openContactModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(CONTACT_MODAL_EVENT));
  }
}
