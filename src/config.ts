// All site-wide settings live here. Edit this file, not the pages.

export const SITE_URL = 'https://www.longevity-engineer.com';
export const SITE_NAME = 'Longevity Engineer';

// WhatsApp: country code first, no plus sign, no spaces.
export const WHATSAPP_NUMBER = '917738379301';
export const WHATSAPP_TEXT = "Hi, I'd like to join the beta";
export const CTA_LABEL = 'Join the beta on WhatsApp';

// encodeURIComponent leaves ' alone; wa.me links read better with it encoded.
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT).replace(/'/g, '%27')}`;

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

// Final copy from the frozen canvas board.
export const FAQ: { q: string; a: string }[] = [
  {
    q: 'Is it a doctor or dietitian?',
    a: "No. It's food and habit guidance for adults, not medical advice. It never suggests crash diets and won't advise on medicines.",
  },
  {
    q: 'Does it order without asking?',
    a: "Never. It shows the exact cart, price and address, and only places it when you reply yes.",
  },
  {
    q: 'Do I need a watch or a glucose sensor?',
    a: "No. It works with just WhatsApp. Each device you connect makes the picks sharper.",
  },
  {
    q: 'Vegetarian, Jain, eggetarian?',
    a: "Tell it once. Your food rules and allergies are checked before every pick.",
  },
  {
    q: 'What happens to my data?',
    a: "It's used only to help you, never sold, and there are no ads. Disconnect anything any time; full data deletion is coming very soon.",
  },
  {
    q: 'Why WhatsApp?',
    a: "It's where you already are. Nothing to install, nothing to remember to open.",
  },
];
