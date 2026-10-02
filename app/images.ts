export interface SiteImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const shot = (src: string, alt: string, width = 1600, height = 1057): SiteImage => ({ src, width, height, alt });
const logo = (src: string, alt: string): SiteImage => ({ src, width: 1000, height: 1000, alt });

export const images = {
  // Depends On The Weather
  dowLogo: logo("/dow-logo.webp", "Depends On The Weather logo"),
  dowImg1: shot("/dow-img1.webp", "Depends On The Weather app home screen with the current forecast, next to the premium subscription screen"),
  dowImg2: shot("/dow-img2.webp", "Depends On The Weather app activity picker and hourly and 10-day forecast screens"),
  dowImg3: shot("/dow-img3.webp", "Depends On The Weather app map views with radar and activity condition overlays"),

  // Decision Point Weather
  dpwLogo: logo("/dpw-logo.webp", "Decision Point Weather logo"),
  dpwImg1: shot("/dpw-img1.webp", "Decision Point Weather mobile screens for industry solutions and schedule planning"),
  dpwImg2: shot("/dpw-img2.webp", "Decision Point Weather web dashboard on a laptop with a weather heatmap and temperature chart"),
  dpwImg3: shot("/dpw-img3.webp", "Decision Point Weather feature cards: maximize profits, know when to pull the trigger and adjust schedules"),
  dpwImg4: shot("/dpw-img4.webp", "Decision Point Weather web dashboard on a laptop with profit gauges and a weather impact matrix"),
  dpwCards: shot("/img3.webp", "Decision Point Weather feature cards in a frosted glass layout", 1200, 670),
  dpwRadial: shot("/img8.webp", "Decision Point Weather radial interface highlighting the hospitality and travel industry", 1200, 876),

  // Torq
  torqLogo: logo("/torq-logo.webp", "Torq app logo"),
  torqImg1: shot("/torq-img1.webp", "Torq app welcome screen and contractor subscription screen"),
  torqImg2: shot("/torq-img2.webp", "Torq app supplier map and member profile with active projects"),
  torqImg3: shot("/torq-img3.webp", "Torq app onboarding screens for product updates and quick invoices"),
  torqImg4: shot("/torq-img4.webp", "Torq app project details, projects list and task screens"),

  // Master Perfumes
  masterLogo: logo("/master-logo.webp", "Master Perfumes logo"),
  masterImg1: shot("/master-img1.webp", "Master Perfumes gold wax seal emblem"),
} satisfies Record<string, SiteImage>;
