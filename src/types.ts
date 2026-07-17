/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CoverSettings {
  brandName: string;
  tagline: string;
  businessPlanTitle: string;
  businessPlanSubtitle: string;
  preparedForLabel: string;
  loanTitle: string;
  loanAmount: string;
  confidentialLabel: string;
  growthYears: string;
}

export interface SlideContent {
  heading: string;
  paragraphs: string[];
  bulletPoints?: string[];
}

export interface Metric {
  label: string;
  value: string;
  description?: string;
}

export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  sections: SlideContent[];
  metrics?: Metric[];
  footer?: string;
  visualType: 'grid' | 'cover' | 'finance' | 'tech' | 'growth' | 'story';
}

export interface CopilotMessage {
  id: string;
  sender: 'investor' | 'copilot';
  text: string;
  timestamp: string;
}

export interface PresentationData {
  cover: CoverSettings;
  slides: Slide[];
}
