import Title from "./Title";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { ContactsSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "@/hooks/useTranslations";
import { z } from "zod";
import sendTelegramMessage from "@/lib/telegram/sendTelegramMessage2";
import { toast } from "sonner";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import api from "@/api/api";

export default function Contact({ imgContact }: { imgContact: string }) {
  const t = useTranslations();
  const ContactsFormSchema = ContactsSchema();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const form = useForm<z.infer<typeof ContactsFormSchema>>({
    resolver: zodResolver(ContactsFormSchema),
    defaultValues: {
      firstName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/(?!^\+)\D/g, "");
    if (value.length > 15) return;
    form.setValue("phone", value, { shouldValidate: true });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
    if (value.length > 15) return;
    form.setValue("firstName", value, { shouldValidate: true });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/[^a-zA-Z0-9@._-]/g, "");
    if (value.length > 50) return;
    form.setValue("email", value, { shouldValidate: true });
  };

  const onSubmit = async (values: z.infer<typeof ContactsFormSchema>) => {
    console.log("salom");

    if (isSubmitting) return;
    setIsSubmitting(true);

    const { firstName, email, phone, message } = values;

    const telegramMessage = `
      <b>📩 Yangi Aloqa Formasi</b>
      👤 <b>Ism:</b> ${firstName}
      📧 <b>Email:</b> ${email}
      📞 <b>Telefon:</b> ${phone}
      📝 <b>Xabar:</b> ${message || "Yo'q"}
    `;

    // const formData = {
    //   first_name: firstName,
    //   phone_number: phone,
    //   email,
    //   message,
    // };

    try {
      // Backendga ma'lumot jo'natish
      // const response = await api.post("/api/collections/contact_us/records", formData);

      // Telegramga xabar jo'natish
      await sendTelegramMessage(telegramMessage);

      // Formni tozalash
      form.reset();

      // Muvaffaqiyat xabari
      toast.success(`${t.toast.success.contacts}`);
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      toast.error(`${t.toast.error.contacts}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mb-30 bg-[#F9F9FD] py-10">
      <div className="main-container">
        <div className="mb-15">
          <Title
            title="Biz Bilan Bog'laning"
            desc="Agar sizda hali ham savol qolsa, bemalol biz bilan bog'laning."
          />
        </div>

        <div className="flex items-center justify-center gap-8 max-[1200px]:flex-wrap min-[1200px]:justify-between min-[1200px]:gap-2">
          <motion.div
            ref={ref}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="w-full max-w-[600px]"
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-2 rounded-2xl bg-white py-3 max-[1100px]:max-w-full max-[850px]:max-w-full max-[850px]:px-4 min-sm:p-[30px]"
              >
                <div className="grid grid-cols-1 gap-1 max-[850px]:grid-cols-1">
                  <p className="text-[16px] font-[400] text-[#414D60]">
                    Ism/Familya:
                  </p>
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="contact-input hover:border-[#0062AD]"
                            {...field}
                            onChange={(e) => {
                              handleNameChange(e);
                              field.onChange(e);
                            }}
                            maxLength={20}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <p className="mt-7 text-[16px] font-[400] text-[#414D60]">
                  Telefon:
                </p>
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="+998 (__)___-__-__"
                          className="contact-input hover:border-[#0062AD]"
                          {...field}
                          onChange={(e) => {
                            handlePhoneChange(e);
                            field.onChange(e);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <p className="mt-7 text-[16px] font-[400] text-[#414D60]">
                  E-mail:
                </p>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="contact-input hover:border-[#0062AD]"
                          {...field}
                          onChange={(e) => {
                            handleEmailChange(e);
                            field.onChange(e);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <p className="mt-7 text-[16px] font-[400] text-[#414D60]">
                  Yuborish tugmasini bosish orqali siz Ma'lumotlarni qayta
                  ishlash siyosatiga rozilik bildirasiz.
                </p>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="contact-input !h-[144px] resize-none py-5 hover:border-[#0062AD]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-5 px-[30.5px] py-5 text-[18px] font-[600] max-[400px]:w-full"
                >
                  {isSubmitting ? "Jo'natilmoqda..." : t.buttons.sendMessage}
                </Button>
              </form>
            </Form>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{opacity:0,x:90}}
            animate={inView ? {opacity:1,x:0} : {}}
            transition={{ duration: 1 }}
            className="hidden lg:flex"
          >
            <img
              src={imgContact}
              alt="contact image"
              className="h-[600px] max-w-[600px] rounded-[8px] object-cover object-left-top"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
