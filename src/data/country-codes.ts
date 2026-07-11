export type CountryCode = {
  iso2: string;
  name: string;
  dial: string;
  flag: string;
};

/** Converts a 2-letter ISO country code into its flag emoji via regional indicator symbols. */
function flagEmoji(iso2: string): string {
  return iso2
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}

// UAE listed first since it's the default for a business based in Ajman.
const raw: [string, string, string][] = [
  ["AE", "United Arab Emirates", "+971"],
  ["SA", "Saudi Arabia", "+966"],
  ["QA", "Qatar", "+974"],
  ["KW", "Kuwait", "+965"],
  ["BH", "Bahrain", "+973"],
  ["OM", "Oman", "+968"],
  ["EG", "Egypt", "+20"],
  ["JO", "Jordan", "+962"],
  ["LB", "Lebanon", "+961"],
  ["IQ", "Iraq", "+964"],
  ["SY", "Syria", "+963"],
  ["YE", "Yemen", "+967"],
  ["PS", "Palestine", "+970"],
  ["TR", "Turkey", "+90"],
  ["IN", "India", "+91"],
  ["PK", "Pakistan", "+92"],
  ["BD", "Bangladesh", "+880"],
  ["PH", "Philippines", "+63"],
  ["NP", "Nepal", "+977"],
  ["LK", "Sri Lanka", "+94"],
  ["ID", "Indonesia", "+62"],
  ["MY", "Malaysia", "+60"],
  ["CN", "China", "+86"],
  ["GB", "United Kingdom", "+44"],
  ["US", "United States", "+1"],
  ["CA", "Canada", "+1"],
  ["FR", "France", "+33"],
  ["DE", "Germany", "+49"],
  ["IT", "Italy", "+39"],
  ["ES", "Spain", "+34"],
  ["PT", "Portugal", "+351"],
  ["NL", "Netherlands", "+31"],
  ["BE", "Belgium", "+32"],
  ["CH", "Switzerland", "+41"],
  ["SE", "Sweden", "+46"],
  ["NO", "Norway", "+47"],
  ["RU", "Russia", "+7"],
  ["ZA", "South Africa", "+27"],
  ["NG", "Nigeria", "+234"],
  ["KE", "Kenya", "+254"],
  ["AU", "Australia", "+61"],
  ["NZ", "New Zealand", "+64"],
  ["JP", "Japan", "+81"],
  ["KR", "South Korea", "+82"],
  ["SG", "Singapore", "+65"],
  ["BR", "Brazil", "+55"],
  ["MX", "Mexico", "+52"],
  ["AR", "Argentina", "+54"],
];

export const countryCodes: CountryCode[] = raw.map(([iso2, name, dial]) => ({
  iso2,
  name,
  dial,
  flag: flagEmoji(iso2),
}));
