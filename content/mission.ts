export interface MissionContent {
  eyebrow: string;
  heading: string;
  intro: string;
  points: string[];
}

export interface VisionContent {
  eyebrow: string;
  heading: string;
  body: string;
}

export const mission: MissionContent = {
  eyebrow: "Mission",
  heading: "Turning Complexity into Clarity",
  intro: "Our mission is to help organizations:",
  points: [
    "Discover untapped opportunities hidden within their operations.",
    "Simplify complex business processes.",
    "Enable faster, better decision-making through real-time operational visibility.",
    "Unlock business intelligence at scale.",
    "Build connected digital ecosystems and harness AI for meaningful outcomes.",
    "Accelerate growth through sustainable innovation.",
  ],
};

export const vision: VisionContent = {
  eyebrow: "Vision",
  heading:
    "To Create Intelligent Organizations Built on Trust, Guided by Vision, and Empowered by Impact.",
  body: "We envision a world where every organization operates with complete clarity, makes informed decisions in real time, and scales seamlessly. Through trusted data and transformative innovation, we help businesses build a lasting, sustainable competitive advantage in a dynamic digital world.",
};
