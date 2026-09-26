// All site-wide settings live here. Edit this file, not the pages.

export const SITE_URL = 'https://www.longevity-engineer.com';
export const SITE_NAME = 'Longevity Engineer';

// WhatsApp: country code first, no plus sign, no spaces.
export const WHATSAPP_NUMBER = '917738379301';
export const WHATSAPP_TEXT = "Hi, I'd like to join the beta";
export const CTA_LABEL = 'Join the beta on WhatsApp';

// encodeURIComponent leaves ' alone; wa.me links read better with it encoded.
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT).replace(/'/g, '%27')}`;

// TODO: confirm the real inbox before launch.
export const CONTACT_EMAIL = 'hello@longevity-engineer.com';

export const FOUNDER = {
  name: 'Prashant Singh',
  role: 'founder',
  credentials: 'IIT Delhi, IIM Calcutta',
  city: 'Mumbai',
  // Replace public/founder.jpg with a real square photo (at least 192×192).
  photo: '/founder.jpg',
  heroLine: 'I built it because I was tired of guessing. I use it for every meal.',
  quote:
    'I spent years scaling delivery at Zomato and knew what I should eat, yet still guessed at every meal. So I built the engineer I wanted: one that knows my day and just makes the call. I use it for every meal.',
};

// TODO: replace these drafts with the answers from the frozen canvas board.
export const FAQ: { q: string; a: string }[] = [
  {
    q: 'Is it a doctor or dietitian?',
    a: "No. It's a food and habit assistant, not medical advice, and it doesn't diagnose or treat anything. If you have a condition, follow your doctor; you can tell it their guidance and it will work within it.",
  },
  {
    q: 'Does it order without asking?',
    a: 'Never. It suggests one dish with the numbers and waits. Nothing is ordered on Swiggy until you reply yes.',
  },
  {
    q: 'Do I need a watch or a glucose sensor?',
    a: "No. It works from what you tell it by text, photo or voice note. Connecting an Apple Watch, FreeStyle Libre or Google Calendar makes its picks sharper, whenever you're ready.",
  },
  {
    q: 'Vegetarian, Jain, eggetarian?',
    a: 'Yes. Tell it your food rules once, including no onion or garlic, and every pick follows them.',
  },
  {
    q: 'What happens to my data?',
    a: "It's used only to make your picks. We don't sell it. Ask on WhatsApp and we'll delete it.",
  },
  {
    q: 'Why WhatsApp?',
    a: "It's already on your phone. No app to install, nothing new to learn, and it handles text, photos and voice notes.",
  },
];
