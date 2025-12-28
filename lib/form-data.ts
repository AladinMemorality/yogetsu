// TypeScript interfaces for the inquiry form

export type InquiryTypeId =
  | "performance"
  | "workshop"
  | "corporate"
  | "private"
  | "other";

export interface InquiryType {
  id: InquiryTypeId;
  label: string;
  description: string;
  icon: "music" | "users" | "building" | "heart" | "message";
}

export type QuestionType =
  | "select"
  | "text"
  | "textarea"
  | "email"
  | "date-flexible";

export interface FormQuestion {
  id: string;
  type: QuestionType;
  question: string;
  placeholder?: string;
  options?: string[];
  flexibleOption?: boolean;
  required?: boolean;
}

export interface FormAnswers {
  inquiryType: InquiryTypeId | null;
  [key: string]: string | boolean | null;
}

// Inquiry Types - Step 1 options
export const INQUIRY_TYPES: InquiryType[] = [
  {
    id: "performance",
    label: "Live Performance",
    description: "Festival, concert, or special event performance",
    icon: "music",
  },
  {
    id: "workshop",
    label: "Workshop",
    description: "Voice Meditation or Active Meditation session",
    icon: "users",
  },
  {
    id: "corporate",
    label: "Corporate/Wellness Event",
    description: "Team building, conference, or retreat",
    icon: "building",
  },
  {
    id: "private",
    label: "Private Session",
    description: "One-on-one or small group experience",
    icon: "heart",
  },
  {
    id: "other",
    label: "Other Inquiry",
    description: "Collaboration, media, or general questions",
    icon: "message",
  },
];

// Questions by inquiry type
export const FORM_QUESTIONS: Record<InquiryTypeId, FormQuestion[]> = {
  performance: [
    {
      id: "event_type",
      type: "select",
      question: "What type of event is this?",
      options: [
        "Music Festival",
        "Cultural Event",
        "Private Event",
        "Corporate Event",
        "Other",
      ],
    },
    {
      id: "audience_size",
      type: "select",
      question: "Expected audience size?",
      options: ["Under 50", "50-200", "200-500", "500-1000", "1000+"],
    },
    {
      id: "event_date",
      type: "date-flexible",
      question: "When is your event?",
      placeholder: "Select a date",
      flexibleOption: true,
    },
    {
      id: "location",
      type: "text",
      question: "Where will the event take place?",
      placeholder: "City, Country or Venue name",
    },
  ],

  workshop: [
    {
      id: "workshop_type",
      type: "select",
      question: "Which workshop interests you?",
      options: ["Voice Meditation", "Active Meditation", "Both / Not sure yet"],
    },
    {
      id: "group_size",
      type: "select",
      question: "How many participants?",
      options: ["1-10", "10-30", "30-50", "50+"],
    },
    {
      id: "format",
      type: "select",
      question: "Preferred format?",
      options: ["In-person", "Virtual/Online", "Hybrid", "Flexible"],
    },
    {
      id: "workshop_date",
      type: "date-flexible",
      question: "When would you like to schedule?",
      placeholder: "Select a date",
      flexibleOption: true,
    },
  ],

  corporate: [
    {
      id: "company_name",
      type: "text",
      question: "What's your company or organization?",
      placeholder: "Company name",
    },
    {
      id: "event_context",
      type: "select",
      question: "What's the context?",
      options: [
        "Team Building",
        "Conference/Summit",
        "Retreat",
        "Wellness Program",
        "Other",
      ],
    },
    {
      id: "team_size",
      type: "select",
      question: "How many people will participate?",
      options: ["Under 20", "20-50", "50-100", "100-200", "200+"],
    },
    {
      id: "corporate_date",
      type: "date-flexible",
      question: "Target date?",
      placeholder: "Select a date",
      flexibleOption: true,
    },
    {
      id: "corporate_location",
      type: "text",
      question: "Location?",
      placeholder: "City or 'Virtual'",
    },
  ],

  private: [
    {
      id: "private_type",
      type: "select",
      question: "What are you looking for?",
      options: [
        "Personal meditation guidance",
        "Small group session",
        "Special occasion (wedding, ceremony)",
        "Ongoing practice",
        "Other",
      ],
    },
    {
      id: "participants",
      type: "select",
      question: "How many people?",
      options: ["Just me", "2-5", "6-10", "More than 10"],
    },
    {
      id: "private_format",
      type: "select",
      question: "In-person or virtual?",
      options: ["In-person", "Virtual/Online", "Either works"],
    },
  ],

  other: [
    {
      id: "other_type",
      type: "select",
      question: "What brings you here?",
      options: [
        "Media/Press inquiry",
        "Collaboration opportunity",
        "Music licensing",
        "Speaking engagement",
        "General question",
      ],
    },
    {
      id: "other_details",
      type: "textarea",
      question: "Tell me more about your inquiry",
      placeholder:
        "Share any details that would help me understand your request...",
    },
  ],
};

// Contact fields - final step
export const CONTACT_FIELDS: FormQuestion[] = [
  {
    id: "name",
    type: "text",
    question: "What's your name?",
    placeholder: "Your full name",
    required: true,
  },
  {
    id: "email",
    type: "email",
    question: "What's your email?",
    placeholder: "your@email.com",
    required: true,
  },
  {
    id: "message",
    type: "textarea",
    question: "Anything else you'd like to share?",
    placeholder: "Optional: Add any additional details, questions, or context...",
    required: false,
  },
];

// Helper to get label for inquiry type
export function getInquiryTypeLabel(id: InquiryTypeId): string {
  return INQUIRY_TYPES.find((t) => t.id === id)?.label || id;
}

// Helper to format answers for submission
export function formatAnswersForSubmission(answers: FormAnswers): string {
  const inquiryType = answers.inquiryType;
  if (!inquiryType) return "";

  const typeLabel = getInquiryTypeLabel(inquiryType);
  const questions = FORM_QUESTIONS[inquiryType];

  let formatted = `Inquiry Type: ${typeLabel}\n\n`;

  // Add answers for inquiry-specific questions
  questions.forEach((q) => {
    const answer = answers[q.id];
    if (answer) {
      formatted += `${q.question}\n${answer}\n\n`;
    }
  });

  // Add contact info
  if (answers.name) formatted += `Name: ${answers.name}\n`;
  if (answers.email) formatted += `Email: ${answers.email}\n`;
  if (answers.message) formatted += `\nAdditional Message:\n${answers.message}\n`;

  return formatted;
}

// Generate mailto link
export function generateMailtoLink(answers: FormAnswers): string {
  const typeLabel = answers.inquiryType
    ? getInquiryTypeLabel(answers.inquiryType)
    : "General";
  const subject = encodeURIComponent(`Inquiry: ${typeLabel}`);
  const body = encodeURIComponent(formatAnswersForSubmission(answers));
  return `mailto:contact@yogetsuakasaka.com?subject=${subject}&body=${body}`;
}

// Generate WhatsApp link
export function generateWhatsAppLink(answers: FormAnswers): string {
  const text = encodeURIComponent(formatAnswersForSubmission(answers));
  return `https://wa.me/966598843697?text=${text}`;
}
