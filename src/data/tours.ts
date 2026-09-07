export type TourType = 'day-tour' | 'extended-tour' | 'school-group' | 'guided-tour' | 'group-cruise' | 'winery-tour';

export interface Tour {
  id: string;
  name: string;
  destination: string;
  duration: string;
  durationDays?: number;
  description: string;
  longDescription: string;
  priceFrom?: string;
  type: TourType;
  typeName: string;
  image: string;
  gallery: string[];
  highlights: string[];
  itinerary: { day: string; title: string; description: string }[];
  included: string[];
  pickupInfo: string;
  additionalInfo: string;
}

export const tours: Tour[] = [
  {
    id: 'day-tours',
    name: 'Day Tours',
    destination: 'Sydney & Central Coast, NSW',
    duration: '1 Day',
    durationDays: 1,
    description: 'Discover Sydney, the Central Coast and surrounding destinations with enjoyable, well-organised day tours designed for groups of all sizes.',
    longDescription: 'Enjoy Sydney, the Central Coast and surrounding destinations with well-organised day tours designed for groups of all sizes. From coastal lookouts and harbour-side stops to hidden regional gems, every day trip is professionally planned so your group can simply relax and enjoy the journey.',
    priceFrom: '$POA',
    type: 'day-tour',
    typeName: 'Day Tour',
    image: 'https://images.pexels.com/photos/1590192/pexels-photo-1590192.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/30294485/pexels-photo-30294485.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/785077/pexels-photo-785077.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/19044891/pexels-photo-19044891.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/28671156/pexels-photo-28671156.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    highlights: ['Sydney Harbour and coastal lookouts','Central Coast beaches and waterways','Regional towns and hidden gems','Comfortable group transport throughout','Flexible itineraries for your group'],
    itinerary: [
      { day: 'Morning', title: 'Departure', description: 'Your group is picked up from your chosen starting point across Sydney or the Central Coast.' },
      { day: 'Midday', title: 'Destination Experience', description: 'Explore your chosen destination with time to sightsee, dine and relax.' },
      { day: 'Afternoon', title: 'Return Journey', description: 'A comfortable return trip with stops along the way as desired.' },
    ],
    included: ['Return group travel','Comfortable coach or minibus','Flexible itinerary planning','Professional driver'],
    pickupInfo: 'Pickup available from selected locations across Sydney and the Central Coast.',
    additionalInfo: 'Itineraries are tailored to suit your group. Enquire to discuss your preferred destinations.',
  },
  {
    id: 'school-group-tours',
    name: 'School Group Tours',
    destination: 'Sydney & Central Coast, NSW',
    duration: 'Flexible',
    description: 'Safe, organised and engaging group travel for schools, including excursions, educational experiences and customised itineraries.',
    longDescription: 'Safe, organised and engaging group travel for schools. We handle excursions, educational experiences and customised itineraries with a focus on reliability and care, so teachers and parents can focus on the experience rather than the logistics.',
    priceFrom: '$POA',
    type: 'school-group',
    typeName: 'School Group Tour',
    image: 'https://images.pexels.com/photos/34251803/pexels-photo-34251803.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/33729068/pexels-photo-33729068.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/29555738/pexels-photo-29555738.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/30733436/pexels-photo-30733436.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/12719307/pexels-photo-12719307.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    highlights: ['School excursions and educational trips','School camps and sporting events','Customised itineraries for your group','Safe, reliable group transport','Experienced and professional drivers'],
    itinerary: [
      { day: 'Planning', title: 'Tailored Itinerary', description: 'We work with your school to plan a safe and engaging itinerary.' },
      { day: 'Travel Day', title: 'Group Transport', description: 'Students and staff travel together in comfort with a professional driver.' },
      { day: 'Return', title: 'Safe Return', description: 'Reliable return transport to your school or designated drop-off point.' },
    ],
    included: ['Group transport for your school','Professional driver','Flexible pickup and drop-off','Itinerary coordination'],
    pickupInfo: 'Pickup and drop-off from your school or designated location across Sydney and the Central Coast.',
    additionalInfo: 'All school group tours are planned in consultation with your school to ensure safety and suitability.',
  },
  {
    id: 'extended-tours',
    name: 'Extended Tours',
    destination: 'Sydney, Central Coast & beyond, NSW',
    duration: 'Multi-Day',
    description: 'Enjoy more of the journey with professionally planned multi-day tours and extended group travel experiences.',
    longDescription: 'Enjoy more of the journey with professionally planned multi-day tours and extended group travel experiences. From coastal escapes to regional discoveries, we take care of the routes, stops and logistics so your group can simply enjoy going further together.',
    priceFrom: '$POA',
    type: 'extended-tour',
    typeName: 'Extended Tour',
    image: 'https://images.pexels.com/photos/7406321/pexels-photo-7406321.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/2417036/pexels-photo-2417036.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/4252722/pexels-photo-4252722.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/13279468/pexels-photo-13279468.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/7428387/pexels-photo-7428387.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    highlights: ['Multi-day regional journeys','Coastal and country destinations','Comfortable group transport throughout','Flexible itineraries for your group','Professionally planned routes'],
    itinerary: [
      { day: 'Day 01', title: 'Departure', description: 'Your group departs from Sydney or the Central Coast and begins the journey together.' },
      { day: 'Day 02+', title: 'Destination Experiences', description: 'Each day brings new destinations, stops and experiences along the route.' },
      { day: 'Final Day', title: 'Return Journey', description: 'A comfortable return trip to your starting point.' },
    ],
    included: ['Group transport throughout','Professional driver','Route and itinerary planning','Flexible scheduling'],
    pickupInfo: 'Pickup available from selected locations across Sydney and the Central Coast.',
    additionalInfo: 'Extended tour itineraries are tailored to your group. Enquire to discuss destinations and duration.',
  },
  {
    id: 'guided-tours',
    name: 'Guided Tours',
    destination: 'Sydney & Central Coast, NSW',
    duration: 'Flexible',
    description: 'Explore destinations with organised guided experiences designed to make group travel easy, informative and enjoyable.',
    longDescription: 'Explore destinations with organised guided experiences designed to make group travel easy, informative and enjoyable. We coordinate the transport, the route and the experience so your group can discover new places together without any of the planning stress.',
    priceFrom: '$POA',
    type: 'guided-tour',
    typeName: 'Guided Tour',
    image: 'https://images.pexels.com/photos/33511530/pexels-photo-33511530.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/35593588/pexels-photo-35593588.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/6478339/pexels-photo-6478339.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/4997849/pexels-photo-4997849.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/7576504/pexels-photo-7576504.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    highlights: ['Organised guided experiences','Sydney and Central Coast destinations','Informative and easy group travel','Comfortable transport throughout','Flexible for groups of all sizes'],
    itinerary: [
      { day: 'Arrival', title: 'Group Pickup', description: 'Your group is collected from your chosen starting point.' },
      { day: 'Experience', title: 'Guided Exploration', description: 'Explore your destination with an organised, guided experience.' },
      { day: 'Return', title: 'Return Journey', description: 'Comfortable return transport to your starting point.' },
    ],
    included: ['Group transport','Professional driver','Guided experience coordination','Flexible itinerary'],
    pickupInfo: 'Pickup available from selected locations across Sydney and the Central Coast.',
    additionalInfo: 'Guided tour experiences can be tailored to your group\'s interests. Enquire to discuss options.',
  },
  {
    id: 'group-cruises',
    name: 'Group Cruises',
    destination: 'Sydney & Central Coast, NSW',
    duration: 'Flexible',
    description: 'Bring your group together with memorable cruise experiences, with assistance coordinating the journey from start to finish.',
    longDescription: 'Bring your group together with memorable cruise experiences. We help coordinate the journey from start to finish, including group transport to and from the cruise departure point, so your group can board relaxed and ready to enjoy the experience.',
    priceFrom: '$POA',
    type: 'group-cruise',
    typeName: 'Group Cruise',
    image: '/group-cruise.jpg',
    gallery: [
      'https://images.pexels.com/photos/785077/pexels-photo-785077.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/28671156/pexels-photo-28671156.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/19044891/pexels-photo-19044891.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1590192/pexels-photo-1590192.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    highlights: ['Group cruise coordination','Transport to and from departure points','Sydney and Central Coast pickups','End-to-end journey assistance','Ideal for social and celebration groups'],
    itinerary: [
      { day: 'Pre-Cruise', title: 'Group Transport', description: 'Your group travels together to the cruise departure point.' },
      { day: 'Cruise', title: 'Cruise Experience', description: 'Enjoy the cruise with your group.' },
      { day: 'Post-Cruise', title: 'Return Transport', description: 'Coordinated return transport from the cruise arrival point.' },
    ],
    included: ['Group transport to and from cruise','Professional driver','Journey coordination','Flexible pickup locations'],
    pickupInfo: 'Pickup available from selected locations across Sydney and the Central Coast for cruise departures and arrivals.',
    additionalInfo: 'We coordinate the land transport side of your group cruise. Enquire to discuss your cruise and group size.',
  },
  {
    id: 'winery-tours',
    name: 'Winery Tours',
    destination: 'Sydney & Central Coast, NSW',
    duration: '1 Day',
    durationDays: 1,
    description: 'Relax and enjoy a carefully planned group winery experience, ideal for social groups, celebrations and memorable days away.',
    longDescription: 'Relax and enjoy a carefully planned group winery experience. Ideal for social groups, celebrations and memorable days away, our winery tours take your group through some of the region\'s best cellar doors with comfortable transport and a relaxed, sociable pace.',
    priceFrom: '$POA',
    type: 'winery-tour',
    typeName: 'Winery Tour',
    image: '/winery-tour.png',
    gallery: [
      'https://images.pexels.com/photos/3874059/pexels-photo-3874059.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/9593923/pexels-photo-9593923.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/17709393/pexels-photo-17709393.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/11566340/pexels-photo-11566340.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    highlights: ['Regional cellar doors and vineyards','Group tastings and relaxed dining','Comfortable transport throughout','Ideal for social groups and celebrations','Flexible itineraries for your group'],
    itinerary: [
      { day: 'Morning', title: 'Group Pickup', description: 'Your group is collected from your chosen starting point.' },
      { day: 'Midday', title: 'Winery Experience', description: 'Visit selected wineries for tastings and a relaxed lunch.' },
      { day: 'Afternoon', title: 'Return Journey', description: 'A comfortable return trip with your group.' },
    ],
    included: ['Return group travel','Professional driver','Winery visit coordination','Flexible itinerary'],
    pickupInfo: 'Pickup available from selected locations across Sydney and the Central Coast.',
    additionalInfo: 'Winery tour itineraries are tailored to your group. Please advise any dietary requirements at the time of enquiry.',
  },
];

export const enquiryTypes = ['Day Tour','School Group Tour','Extended Tour','Guided Tour','Group Cruise','Winery Tour','Other / Custom Tour'] as const;
export type EnquiryType = (typeof enquiryTypes)[number];

export const groupTypes = ['Friends / Social Group','School','Corporate / Organisation','Family','Community Group','Other'] as const;
export type GroupType = (typeof groupTypes)[number];
