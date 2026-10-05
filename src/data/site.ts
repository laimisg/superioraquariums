// Single source of truth for company details. Replace every [PLACEHOLDER] with real information.
// Nothing here is invented: bracketed values are deliberately visible until supplied.
export const site = {
  name: 'Superior Aquariums', // [COMPANY NAME] — derived from the domain; change if the legal/trade name differs
  domain: 'https://superioraquariums.com',
  tagline: 'Custom Aquariums, Terrariums & Aquatic Environments',
  phone: '[PHONE]',
  email: '[EMAIL]',
  address: '[ADDRESS]',
  serviceArea: '[SERVICE AREA]',
  resellerApplicationUrl: '/contact/?type=reseller-apply', // or replace with [RESELLER APPLICATION URL]
  // Form endpoint (Formspree, Netlify Forms, your API...). Leave empty to show a "not yet connected" notice.
  formEndpoint: '',
  analyticsId: '', // e.g. a GA4 / Plausible id; leave empty to load nothing
  social: [] as { label: string; url: string }[],
};

// Replace with real figures. Use numeric `count` ONLY when the real number is known (it will animate).
export const stats: { value: string; count?: number; suffix?: string; label: string }[] = [
  { value: '[XX]+', label: 'Years of Experience' },
  { value: '[XXX]+', label: 'Custom Projects' },
  { value: '[XX]', label: 'Reseller Partners' },
  { value: '[XX]', label: 'Industries Served' },
];

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Our Work', href: '/our-work/' },
  { label: 'Aquariums', href: '/aquariums/' },
  { label: 'Terrariums', href: '/terrariums/' },
  { label: 'Water Features', href: '/water-features/' },
  { label: 'Custom Solutions', href: '/custom-solutions/' },
  { label: 'For Resellers', href: '/for-resellers/' },
  { label: 'About', href: '/about/' },
  { label: 'Resources', href: '/resources/' },
  { label: 'Contact', href: '/contact/' },
];

export const processSteps = [
  ['Consultation', 'Understand the project requirements, the space, and the people involved.'],
  ['Design', 'Develop the concept and the technical requirements around the environment.'],
  ['Engineering', 'Resolve structural, plumbing, electrical, filtration, and service requirements.'],
  ['Fabrication', 'Manufacture the system using high-quality materials and controlled processes.'],
  ['Quality Control', 'Inspect the system before delivery.'],
  ['Delivery / Installation', 'Coordinate with the reseller, contractor, or installation team.'],
  ['Support', 'Provide ongoing technical support as appropriate.'],
] as const;

export const materials = [
  ['Glass & Acrylic', 'Material options are selected per project according to size, viewing requirements, structure and budget. [MATERIAL OPTIONS & SPECIFICATIONS]'],
  ['Structural Systems', 'Frames, stands, supports, cabinetry and mounting systems engineered for the load and the building. [STRUCTURAL DETAILS]'],
  ['Plumbing', 'Custom plumbing, drains, returns, overflow systems and circulation matched to the system design. [PLUMBING DETAILS]'],
  ['Filtration', 'Mechanical, biological, chemical and specialty filtration specified for the application. [FILTRATION DETAILS]'],
  ['Lighting', 'Integrated lighting solutions appropriate to the animals, plants and architecture. [LIGHTING DETAILS]'],
  ['Environmental Control', 'Temperature, humidity, ventilation and environmental monitoring. [ENVIRONMENTAL CONTROL DETAILS]'],
  ['Finishing', 'Premium cabinetry, panels, finishes, trim and architectural integration. [FINISH OPTIONS]'],
] as const;

export const technical = [
  'Structural design', 'Water volume', 'Load requirements', 'Plumbing', 'Filtration', 'Pump selection',
  'Overflow design', 'Drainage', 'Electrical requirements', 'Lighting', 'Temperature control',
  'Humidity control', 'Equipment access', 'Maintenance access', 'Serviceability',
];

export const faqs: [string, string][] = [
  ['Do you sell directly to consumers?', 'We work primarily through a network of authorized resellers, dealers, designers, contractors and specialty retailers. If you are a homeowner or end client, send us your project details and we will connect you with the right path. [DIRECT-SALES POLICY]'],
  ['How do I become a reseller?', 'Complete the reseller application. Our team reviews each request and follows up to discuss fit and next steps. [RESELLER REQUIREMENTS]'],
  ['Do you manufacture custom sizes?', 'Custom manufacturing is the core of what we do. Share your dimensions and requirements and we will review feasibility. [SIZE RANGE / LIMITS]'],
  ['Can you work from architectural drawings?', 'Yes — you can upload drawings with your inquiry, and our team will review them as part of the engineering discussion.'],
  ['Can you manufacture oversized aquariums?', 'Large and complex systems are part of the conversation. Feasibility depends on the project, materials and logistics. [OVERSIZE CAPABILITIES]'],
  ['Do you build terrariums?', 'Yes. We build purpose-built terrariums for reptiles, amphibians, plants, tropical environments and specialty displays.'],
  ['Do you build paludariums?', 'Yes. We design integrated land-and-water environments around the needs of the ecosystem and the surrounding architecture.'],
  ['Do you provide filtration?', 'We design and supply custom filtration, circulation and life-support systems specific to each installation. [FILTRATION SCOPE]'],
  ['Do you build stands and cabinetry?', 'Yes. Cabinets and stands are engineered specifically for each aquarium, from structural frames to finished cabinetry.'],
  ['Can you work with my architect?', 'Yes. We collaborate with architects, designers and engineers on drawings, loads, service access and finishes.'],
  ['Can you work with my contractor?', 'Yes. We coordinate with contractors and installation teams throughout the project.'],
  ['Do you provide installation?', 'Delivery and installation are coordinated with the reseller, contractor or installation team. [INSTALLATION POLICY]'],
  ['What geographic areas do you serve?', '[SERVICE AREA]'],
  ['How long does a custom project take?', 'Timelines depend on scope, materials and engineering. We will provide a schedule after reviewing your project. [TYPICAL LEAD TIMES]'],
  ['How do I start a project?', 'Use the Start a Project form and share what you know — dimensions, location, drawings and photos are all helpful. We will take it from there.'],
  ['Can you provide references?', 'References are available on request. [REFERENCE #1] [REFERENCE #2] [REFERENCE #3]'],
];
