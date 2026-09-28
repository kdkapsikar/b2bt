export const BOT_EVENT = 'b2bt:bot';

export function openBot(label, query = label) {
  window.dispatchEvent(new CustomEvent(BOT_EVENT, { detail: { label, query } }));
}
