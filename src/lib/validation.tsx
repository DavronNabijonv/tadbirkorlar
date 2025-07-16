import { useTranslations } from "@/hooks/useTranslations";
import { z } from "zod";

// Contact Us
export const ContactsSchema = () => {
  const t = useTranslations();

  return z.object({
    firstName: z.string().min(3, { message: t.validation.firstName }),
    lastName: z.string().min(3, { message: t.validation.lastName }),
    phone: z.string().min(9, { message: t.validation.phone }),
    email: z.string().email({ message: t.validation.email }),
    message: z
      .string()
      .min(5, { message: t.validation.messageMin })
      .max(300, { message: t.validation.messageMax }),
  });
};

// Contact Page Form
export const ContactPageSchema = () => {
  const t = useTranslations();

  return z.object({
    firstName: z.string().min(3, { message: t.validation.firstName }),
    lastName: z.string().min(3, { message: t.validation.lastName }),
    phone: z.string().min(9, { message: t.validation.phone }),
    email:z.string().min(10,{message:t.validation.email}) ,
    location:z.string().min(3,{message:t.validation.location}),
    message: z
      .string()
      .min(5, { message: t.validation.messageMin })
      .max(300, { message: t.validation.messageMax }),
    privacy: z.boolean().refine((val) => val === true, {
      message: t.validation.privacy,
    }),
  });
};