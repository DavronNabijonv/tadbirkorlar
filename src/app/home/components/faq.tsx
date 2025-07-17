import Title from "@/components/shared/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaPlus } from "react-icons/fa";
// FadeInSection.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const faqQuestions: { question: string; answer: string }[] = [
  {
    question: "Trening va vebinarlarda qanday mavzular yoritiladi?",
    answer:
      "Dasturda ishtirok etish uchun rasmiy ariza topshiriladi va nomzodlar ma’lum mezonlar asosida saralanadi. Bu mezonlar qatoriga motivatsion xat, tajriba darajasi, ijtimoiy faollik va ingliz tilidagi muloqot ko‘nikmalari kiradi.",
  },
  {
    question: "Xalqaro almashuv dasturlarida qanday ishtirok etaman?",
    answer:
      "Dasturda ishtirok etish uchun rasmiy ariza topshiriladi va nomzodlar ma’lum mezonlar asosida saralanadi. Bu mezonlar qatoriga motivatsion xat, tajriba darajasi, ijtimoiy faollik va ingliz tilidagi muloqot ko‘nikmalari kiradi.",
  },
  {
    question: "“Business Diplomatia” platformasining asosiy maqsadi nima?",
    answer:
      "Dasturda ishtirok etish uchun rasmiy ariza topshiriladi va nomzodlar ma’lum mezonlar asosida saralanadi. Bu mezonlar qatoriga motivatsion xat, tajriba darajasi, ijtimoiy faollik va ingliz tilidagi muloqot ko‘nikmalari kiradi.",
  },
  {
    question: "Xalqaro almashuv dasturida qatnashish tartibi qanday?",
    answer:
      "Dasturda ishtirok etish uchun rasmiy ariza topshiriladi va nomzodlar ma’lum mezonlar asosida saralanadi. Bu mezonlar qatoriga motivatsion xat, tajriba darajasi, ijtimoiy faollik va ingliz tilidagi muloqot ko‘nikmalari kiradi.",
  },
  {
    question: "Bu platforma orqali qanday aloqalar o‘rnatish mumkin?",
    answer:
      "Dasturda ishtirok etish uchun rasmiy ariza topshiriladi va nomzodlar ma’lum mezonlar asosida saralanadi. Bu mezonlar qatoriga motivatsion xat, tajriba darajasi, ijtimoiy faollik va ingliz tilidagi muloqot ko‘nikmalari kiradi.",
  },
];

export default function Faq() {
  const { ref, inView } = useInView({
    triggerOnce: true, // faqat bir marta trigger bo‘ladi
    threshold: 0.4, // 20% ko‘rinsa yetarli
  });

  return (
    <div className="main-container">
      <div className="my-10">
        <Title
          title="Faq"
          desc="Biz sizning har bir qadamingizda yo‘ldosh bo‘lishga tayyormiz."
        />
      </div>
      <div className="mb-15">
        <Accordion
          type="single"
          collapsible
          className="grid w-full grid-cols-2 items-start gap-5 max-lg:grid-cols-1"
        >
          {faqQuestions.map((item, idx: number) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: idx * 0.2,
                ease: "easeOut",
              }}
              key={idx}
            >
              <AccordionItem
                value={`item-${idx}`}
                className="group rounded-[16px] border border-[#E6E9EA] p-4 transition-all duration-300 hover:border-[#002B6B33] hover:bg-[#bcd5fc] data-[state=open]:border-[#002B6B33] data-[state=open]:bg-[#bcd5fc]"
                style={{ boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.06)" }}
              >
                <AccordionTrigger className="flex w-full cursor-pointer items-start justify-between gap-5 p-0">
                  <span className="tex-[20px] flex h-[45px] w-[56px] items-center justify-center rounded-[100%] bg-[#EDEEF0] font-[500] text-[#002B6B] hover:bg-white data-[state=open]:bg-white">
                    0{idx + 1}
                  </span>
                  <p className="w-full text-[18px] font-[400] text-[#1E242C] sm:text-[20px] md:text-[22px]">
                    {item.question}
                  </p>
                  <span className="flex items-center justify-center text-[#0062AD] transition-colors duration-300">
                    <FaPlus className="h-3 w-3 transition-all duration-200 group-data-[state=open]:rotate-45 max-sm:h-4 max-sm:w-4" />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pl-15">
                  <p className="text-[14px] text-[#414D60] sm:text-[16px] md:text-[18px]">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
