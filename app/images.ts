export interface SiteImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const shot = (src: string, alt: string, width = 2000, height = 1321): SiteImage => ({ src, width, height, alt });
const logo = (src: string, alt: string): SiteImage => ({ src, width: 1000, height: 1000, alt });

export const images = {
  // Depends on the Weather
  dowLogo: logo("/dow-logo.png", "Depends on the Weather logo"),
  dowImg1: shot("/dow-img1.png", "Depends on the Weather app home screen with the current forecast, next to the premium subscription screen"),
  dowImg2: shot("/dow-img2.png", "Depends on the Weather app activity picker and hourly and 10-day forecast screens"),
  dowImg3: shot("/dow-img3.png", "Depends on the Weather app map views with radar and activity condition overlays"),

  // Decision Point Weather
  dpwLogo: logo("/dpw-logo.png", "Decision Point Weather logo"),
  dpwImg1: shot("/dpw-img1.png", "Decision Point Weather mobile screens for industry solutions and schedule planning"),
  dpwImg2: shot("/dpw-img2.png", "Decision Point Weather web dashboard on a laptop with a weather heatmap and temperature chart"),
  dpwImg3: shot("/dpw-img3.png", "Decision Point Weather feature cards: maximize profits, know when to pull the trigger and adjust schedules"),
  dpwImg4: shot("/dpw-img4.png", "Decision Point Weather web dashboard on a laptop with profit gauges and a weather impact matrix"),
  dpwCards: shot("/img3.png", "Decision Point Weather feature cards in a frosted glass layout", 2000, 1116),
  dpwRadial: shot("/img8.png", "Decision Point Weather radial interface highlighting the hospitality and travel industry", 2000, 1460),

  // Torq
  torqLogo: logo("/torq-logo.png", "Torq app logo"),
  torqImg1: shot("/torq-img1.png", "Torq app welcome screen and contractor subscription screen"),
  torqImg2: shot("/torq-img2.png", "Torq app supplier map and member profile with active projects"),
  torqImg3: shot("/torq-img3.png", "Torq app onboarding screens for product updates and quick invoices"),
  torqImg4: shot("/torq-img4.png", "Torq app project details, projects list and task screens"),

  // Master Perfumes
  masterLogo: logo("/master-logo.png", "Master Perfumes logo"),
  masterImg1: shot("/master-img1.png", "Master Perfumes gold wax seal emblem"),
} satisfies Record<string, SiteImage>;
