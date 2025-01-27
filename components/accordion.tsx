"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { PlusCircle } from "lucide-react"

const faqs = [
  {
    question: "How often should I have a check-up?",
    answer:
      "Generally, it's recommended to have a check-up once a year. However, this can vary based on your age, health condition, and risk factors. Consult with your doctor to determine the best schedule for you.",
  },
  {
    question: "What vaccinations do I need as an adult?",
    answer:
      "Adult vaccination needs vary based on age, health conditions, and lifestyle. Common vaccinations include annual flu shots, tetanus boosters every 10 years, and vaccines for shingles and pneumonia for older adults. Consult your doctor for personalized recommendations.",
  },
  {
    question: "How can I manage my chronic condition better?",
    answer:
      "Managing a chronic condition involves a combination of medication adherence, lifestyle changes, regular check-ups, and self-monitoring. Work with your doctor to create a personalized management plan and don't hesitate to ask questions or report any changes in your condition.",
  },
  {
    question: "What are the signs of a heart attack?",
    answer:
      "Common signs include chest pain or discomfort, shortness of breath, pain or discomfort in the arms, back, neck, jaw or stomach, nausea, lightheadedness, and cold sweats. However, symptoms can vary, especially in women. If you suspect a heart attack, seek emergency medical attention immediately.",
  },
  {
    question: "How can I improve my sleep quality?",
    answer:
      "To improve sleep quality, maintain a consistent sleep schedule, create a relaxing bedtime routine, ensure your bedroom is dark and cool, limit screen time before bed, avoid caffeine and large meals close to bedtime, and exercise regularly (but not too close to bedtime).",
  },
]

export default function FAQAccordion() {
  return (
    <Card className="w-full max-w-3xl mx-auto p-6 rounded-lg shadow-lg border border-blue-600 bg-white dark:bg-gray-800 transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              <div className="flex items-center">
                <PlusCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>{faq.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 dark:text-gray-300">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  )
}

