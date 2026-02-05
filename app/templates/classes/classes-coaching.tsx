import { ClassesLayout } from "../layouts/ClassesLayout";

interface TemplateProps {
  brandName?: string;
  brandLogo?: string | null;
}

export default function ClassesCoachingTemplate({
  brandName = "BrightPath Coaching",
  brandLogo = null,
}: TemplateProps) {
  return (
    <ClassesLayout
      brandName={brandName}
      brandLogo={brandLogo}
      upcomingBatchLabel="Next batch starting"
      upcomingBatchDate="15th March • Evening batch"
      heroDescription="Structured batches for school students and working professionals. Learn in small groups with live doubt-solving and revision tests."
      courses={[
        {
          title: "Maths Foundation (Std. 8–10)",
          level: "School",
          duration: "4 months",
          highlight:
            "Concept clarity, regular tests and personalised progress reports.",
        },
        {
          title: "Spoken English & Confidence",
          level: "Skill",
          duration: "6 weeks",
          highlight: "Practice-based sessions with role plays and activities.",
        },
        {
          title: "Coding for Beginners",
          level: "Weekend",
          duration: "8 weeks",
          highlight: "Build simple projects and understand core logic.",
        },
      ]}
      trainer={{
        name: "Varun Shah",
        role: "Lead Trainer & Founder",
        experience: "8+ years teaching students in Mumbai.",
        bio: "Varun combines classroom experience with practical, real-world examples so that students understand why a concept matters. Every batch is kept small so every learner gets attention.",
      }}
      enrollmentCtaText="Chat to enroll"
      enrollmentWhatsAppLink="https://wa.me/919372787128?text=I'd%20like%20to%20enquire%20about%20batches%20at%20BrightPath%20Coaching"
    />
  );
}

