"use client";

import { useState, useEffect, useCallback } from "react";
import { useInquiryModal } from "@/app/context/InquiryModalContext";
import {
  INQUIRY_TYPES,
  FORM_QUESTIONS,
  CONTACT_FIELDS,
  InquiryTypeId,
  FormQuestion,
  FormAnswers,
  getInquiryTypeLabel,
  generateMailtoLink,
  generateWhatsAppLink,
} from "@/lib/form-data";
import { cn } from "@/lib/utils";

// Icons for inquiry types
const Icons = {
  music: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  ),
  users: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  building: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" />
    </svg>
  ),
  heart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  message: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
};

type FormStep = "type" | "questions" | "contact" | "summary";

export function InquiryModal() {
  const { isOpen, preselectedType, closeModal } = useInquiryModal();
  const [step, setStep] = useState<FormStep>("type");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [contactIndex, setContactIndex] = useState(0);
  const [answers, setAnswers] = useState<FormAnswers>({ inquiryType: null });
  const [isFlexible, setIsFlexible] = useState(false);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep("type");
        setQuestionIndex(0);
        setContactIndex(0);
        setAnswers({ inquiryType: null });
        setIsFlexible(false);
      }, 300);
    }
  }, [isOpen]);

  // Handle preselected type
  useEffect(() => {
    if (isOpen && preselectedType) {
      setAnswers((prev) => ({ ...prev, inquiryType: preselectedType }));
      setStep("questions");
    }
  }, [isOpen, preselectedType]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeModal]);

  const currentQuestions = answers.inquiryType
    ? FORM_QUESTIONS[answers.inquiryType]
    : [];
  const currentQuestion = currentQuestions[questionIndex];
  const currentContactField = CONTACT_FIELDS[contactIndex];

  const totalSteps =
    1 + currentQuestions.length + CONTACT_FIELDS.length + 1; // type + questions + contact + summary
  const currentStepNumber =
    step === "type"
      ? 1
      : step === "questions"
      ? 2 + questionIndex
      : step === "contact"
      ? 2 + currentQuestions.length + contactIndex
      : totalSteps;

  const handleSelectType = (typeId: InquiryTypeId) => {
    setAnswers({ ...answers, inquiryType: typeId });
    setStep("questions");
    setQuestionIndex(0);
  };

  const handleAnswer = useCallback(
    (questionId: string, value: string | boolean) => {
      setAnswers((prev) => ({ ...prev, [questionId]: value }));
    },
    []
  );

  const handleNext = () => {
    if (step === "questions") {
      if (questionIndex < currentQuestions.length - 1) {
        setQuestionIndex(questionIndex + 1);
        setIsFlexible(false);
      } else {
        setStep("contact");
        setContactIndex(0);
      }
    } else if (step === "contact") {
      if (contactIndex < CONTACT_FIELDS.length - 1) {
        setContactIndex(contactIndex + 1);
      } else {
        setStep("summary");
      }
    }
  };

  const handleBack = () => {
    if (step === "questions") {
      if (questionIndex > 0) {
        setQuestionIndex(questionIndex - 1);
      } else {
        setStep("type");
        setAnswers({ inquiryType: null });
      }
    } else if (step === "contact") {
      if (contactIndex > 0) {
        setContactIndex(contactIndex - 1);
      } else {
        setStep("questions");
        setQuestionIndex(currentQuestions.length - 1);
      }
    } else if (step === "summary") {
      setStep("contact");
      setContactIndex(CONTACT_FIELDS.length - 1);
    }
  };

  const canProceed = () => {
    if (step === "questions" && currentQuestion) {
      const answer = answers[currentQuestion.id];
      if (currentQuestion.type === "date-flexible") {
        return isFlexible || (typeof answer === "string" && answer.length > 0);
      }
      return typeof answer === "string" && answer.length > 0;
    }
    if (step === "contact" && currentContactField) {
      if (!currentContactField.required) return true;
      const answer = answers[currentContactField.id];
      if (currentContactField.type === "email") {
        return (
          typeof answer === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answer)
        );
      }
      return typeof answer === "string" && answer.length > 0;
    }
    return true;
  };

  // Handle Enter key for navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && canProceed()) {
      e.preventDefault();
      handleNext();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={closeModal}
    >
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 md:top-8 md:right-8 p-2 text-white hover:text-primary transition-colors z-10"
        aria-label="Close form"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Modal Content */}
      <div
        className="w-full max-w-xl bg-surface rounded-2xl border border-border overflow-hidden animate-fade-up"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Progress Bar */}
        <div className="h-1 bg-border">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(currentStepNumber / totalSteps) * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Step 1: Type Selection */}
          {step === "type" && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-light text-primary mb-2">
                  How can I help you?
                </h2>
                <p className="text-muted text-sm">
                  Select the type of experience you&apos;re interested in
                </p>
              </div>

              <div className="grid gap-3">
                {INQUIRY_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleSelectType(type.id)}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-background hover:border-primary/50 hover:bg-primary/5 transition-all text-left"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                      {Icons[type.icon]}
                    </div>
                    <div>
                      <h3 className="font-light text-primary">{type.label}</h3>
                      <p className="text-sm text-muted">{type.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Steps 2-N: Questions */}
          {step === "questions" && currentQuestion && (
            <QuestionRenderer
              question={currentQuestion}
              value={answers[currentQuestion.id] as string}
              onChange={(value) => handleAnswer(currentQuestion.id, value)}
              isFlexible={isFlexible}
              onFlexibleChange={setIsFlexible}
            />
          )}

          {/* Contact Fields */}
          {step === "contact" && currentContactField && (
            <QuestionRenderer
              question={currentContactField}
              value={answers[currentContactField.id] as string}
              onChange={(value) => handleAnswer(currentContactField.id, value)}
            />
          )}

          {/* Summary */}
          {step === "summary" && (
            <SummaryScreen answers={answers} onStartOver={() => {
              setStep("type");
              setQuestionIndex(0);
              setContactIndex(0);
              setAnswers({ inquiryType: null });
            }} />
          )}

          {/* Navigation */}
          {step !== "type" && step !== "summary" && (
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <button
                onClick={handleBack}
                className="text-muted hover:text-primary transition-colors flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back
              </button>

              <div className="text-sm text-muted">
                {currentStepNumber} of {totalSteps}
              </div>

              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg transition-all",
                  canProceed()
                    ? "bg-primary text-dark-text hover:opacity-90"
                    : "bg-border text-muted cursor-not-allowed"
                )}
              >
                {step === "contact" && contactIndex === CONTACT_FIELDS.length - 1
                  ? "Review"
                  : "Continue"}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Question Renderer Component
interface QuestionRendererProps {
  question: FormQuestion;
  value: string;
  onChange: (value: string) => void;
  isFlexible?: boolean;
  onFlexibleChange?: (value: boolean) => void;
}

function QuestionRenderer({
  question,
  value,
  onChange,
  isFlexible,
  onFlexibleChange,
}: QuestionRendererProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl md:text-2xl font-light text-primary">
        {question.question}
      </h2>

      {question.type === "select" && question.options && (
        <div className="grid gap-2">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => onChange(option)}
              className={cn(
                "p-4 rounded-xl border text-left transition-all",
                value === option
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border hover:border-primary/50"
              )}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {question.type === "text" && (
        <input
          type="text"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={question.placeholder}
          className="w-full p-4 rounded-xl border border-border bg-background text-primary placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
          autoFocus
        />
      )}

      {question.type === "email" && (
        <input
          type="email"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={question.placeholder}
          className="w-full p-4 rounded-xl border border-border bg-background text-primary placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
          autoFocus
        />
      )}

      {question.type === "textarea" && (
        <textarea
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={question.placeholder}
          rows={4}
          className="w-full p-4 rounded-xl border border-border bg-background text-primary placeholder:text-muted focus:outline-none focus:border-primary transition-colors resize-none"
          autoFocus
        />
      )}

      {question.type === "date-flexible" && (
        <div className="space-y-4">
          <input
            type="date"
            value={isFlexible ? "" : value || ""}
            onChange={(e) => onChange(e.target.value)}
            disabled={isFlexible}
            className={cn(
              "w-full p-4 rounded-xl border border-border bg-background text-primary focus:outline-none focus:border-primary transition-colors [&::-webkit-calendar-picker-indicator]:brightness-0 [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:sepia [&::-webkit-calendar-picker-indicator]:saturate-[.3] [&::-webkit-calendar-picker-indicator]:hue-rotate-[350deg] [&::-webkit-calendar-picker-indicator]:opacity-60 [&::-webkit-calendar-picker-indicator]:cursor-pointer",
              isFlexible && "opacity-50"
            )}
          />
          {question.flexibleOption && onFlexibleChange && (
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isFlexible}
                onChange={(e) => {
                  onFlexibleChange(e.target.checked);
                  if (e.target.checked) {
                    onChange("Flexible / TBD");
                  } else {
                    onChange("");
                  }
                }}
                className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
              />
              <span className="text-muted">I&apos;m flexible with dates</span>
            </label>
          )}
        </div>
      )}
    </div>
  );
}

// Summary Screen Component
interface SummaryScreenProps {
  answers: FormAnswers;
  onStartOver: () => void;
}

function SummaryScreen({ answers, onStartOver }: SummaryScreenProps) {
  const inquiryType = answers.inquiryType;
  if (!inquiryType) return null;

  const questions = FORM_QUESTIONS[inquiryType];
  const mailtoLink = generateMailtoLink(answers);
  const whatsappLink = generateWhatsAppLink(answers);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22,4 12,14.01 9,11.01" />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-light text-primary mb-2">
          Ready to send!
        </h2>
        <p className="text-muted text-sm">
          Review your inquiry and choose how to send it
        </p>
      </div>

      {/* Summary Card */}
      <div className="bg-background rounded-xl border border-border p-4 space-y-3 max-h-48 overflow-y-auto">
        <div className="flex justify-between">
          <span className="text-muted text-sm">Inquiry Type</span>
          <span className="text-primary text-sm">{getInquiryTypeLabel(inquiryType)}</span>
        </div>
        {questions.map((q) => {
          const answer = answers[q.id];
          if (!answer) return null;
          return (
            <div key={q.id} className="flex justify-between">
              <span className="text-muted text-sm truncate max-w-[40%]">{q.question}</span>
              <span className="text-primary text-sm truncate max-w-[55%]">{String(answer)}</span>
            </div>
          );
        })}
        <div className="border-t border-border pt-3 mt-3">
          <div className="flex justify-between">
            <span className="text-muted text-sm">Name</span>
            <span className="text-primary text-sm">{answers.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted text-sm">Email</span>
            <span className="text-primary text-sm">{answers.email}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid gap-3">
        <a
          href={mailtoLink}
          className="flex items-center justify-center gap-3 p-4 rounded-xl bg-primary text-dark-text font-medium hover:opacity-90 transition-opacity"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          Send via Email
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 p-4 rounded-xl border border-[#606C5A] text-[#606C5A] font-medium hover:bg-[#606C5A]/10 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Send via WhatsApp
        </a>
      </div>

      <button
        onClick={onStartOver}
        className="w-full text-center text-muted hover:text-primary transition-colors text-sm"
      >
        Start over
      </button>
    </div>
  );
}
