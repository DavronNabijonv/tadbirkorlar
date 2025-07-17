"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslations } from "@/hooks/useTranslations";
import { ContactPageSchema } from "@/lib/validation";
import { sendTelegramMessage } from "@/lib/telegram/sendTelegramMessage";
import { toast } from "sonner";
import api from "@/api/api";
import Title from "@/components/shared/Title";

function FormPart() {
  const ContactsSchema = ContactPageSchema();
  const t = useTranslations();

  const form = useForm<z.infer<typeof ContactsSchema>>({
    resolver: zodResolver(ContactsSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      location: "",
      message: "",
      privacy: false,
    },
  });

  const firstNameValue = form.watch("firstName");
  const lastNameValue = form.watch("lastName");
  const phoneValue = form.watch("phone");
  const emailValue = form.watch("email");
  const locationValue = form.watch("location");

  const handleNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    val: "firstName" | "lastName",
  ) => {
    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
    if (value.length > 15) return;
    form.setValue(val, value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/(?!^\+)\D/g, "");
    if (value.length > 15) return;
    form.setValue("phone", value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
  
    // Faqat ruxsat berilgan belgilarni qoldiramiz: harf, raqam, @, ., -, _
    value = value.replace(/[^a-zA-Z0-9@._-]/g, "");
  
    // Uzunlik chegarasi (ixtiyoriy)
    if (value.length > 50) return;
  
    // formga set qilamiz
    form.setValue("email", value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^A-Za-z0-9\s]/g, ""); // faqat harf va bo‘shliq
    if (value.length > 30) return; // lokatsiya odatda uzunroq bo‘ladi
    form.setValue("location", value);
  };
  
  

  async function onSubmit(values: z.infer<typeof ContactsSchema>) {
    const { firstName, lastName, message, phone, privacy, email, location } =
      values;

    const telegramMessage = `
<b>📩 Yangi Kontakt So‘rovi</b>\n
👤 <b>Ism:</b> ${firstName} ${lastName}
📞 <b>Telefon:</b> ${phone}
    <b>Email:</b> ${email}
    <b>Location:</b> ${location}
📝 <b>Xabar:</b> ${message || "Yo‘q"}
✅ <b>Maxfiylik Roziligi:</b> ${privacy ? "Ha" : "Yo‘q"}
    `;

    const formData = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phone,
      email: email,
      location: location,
      message,
    };

    try {
      // await api.post("/api/collections/contact_us/records", formData);
      await sendTelegramMessage(telegramMessage);
      form.reset();
      toast.success(`${t.toast.success.contacts}`);
    } catch (error) {
      console.log(error);
      toast.error(`${t.toast.error.contacts}`);
    }
  }

  return (
    <div className="bg-[#F9F9FD]">
      <div className="main-container py-10 ">
        <div className="border-1 border-[#E4E4E4] bg-white my-20 py-10 ">

          <Title
            title="Bizning hamkorlarimiz"
            desc="“Business Diplomatia” platformasi dunyo bo‘ylab faoliyat yuritayotgan ishonchli tashkilotlar, universitetlar, kompaniyalar va inkubatsion markazlar bilan hamkorlikda ishlaydi."
          />

          {/* form part */}
          <div className="main-container mt-15 max-md:pb-20">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-[30px]"
              >
                <div className="grid grid-cols-2 items-start gap-5 max-md:grid-cols-1">
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1E242C] text-[20px] font-[600]">
                          {t.contactsPage.form.title.lastName}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={
                              t.contactsPage.form.placeholders.lastName
                            }
                            {...field}
                            className="bg-[#F2F2F2] text-[18px] text-[#666666] font-[500] border-1 border-[#E4E4E4] h-[50px] py-2 "
                            value={lastNameValue}
                            onChange={(e) => handleNameChange(e, "lastName")}
                            maxLength={20}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1E242C] text-[20px] font-[600]">
                          {t.contactsPage.form.title.firstName}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={
                              t.contactsPage.form.placeholders.firstName
                            }
                            {...field}
                            className="bg-[#F2F2F2] text-[18px] text-[#666666] font-[500] border-1 border-[#E4E4E4] h-[50px] py-2 "
                            value={firstNameValue}
                            onChange={(e) => handleNameChange(e, "firstName")}
                            maxLength={20}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1E242C] text-[20px] font-[600]">
                          {t.contactsPage.form.title.emial}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t.contactsPage.form.placeholders.email}
                            {...field}
                            className="bg-[#F2F2F2] text-[18px] text-[#666666] font-[500] border-1 border-[#E4E4E4] h-[50px] py-2 "
                            value={emailValue}
                            onChange={handleEmailChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1E242C] text-[20px] font-[600]">
                          {t.contactsPage.form.title.phone}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={
                              t.contactsPage.form.placeholders.phone
                            }
                            {...field}
                            className="bg-[#F2F2F2] text-[18px] text-[#666666] font-[500] border-1 border-[#E4E4E4] h-[50px] py-2 "
                            value={phoneValue}
                            onChange={handlePhoneChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1E242C] text-[20px] font-[600]">
                          {t.contactsPage.form.title.location}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={
                              t.contactsPage.form.placeholders.location
                            }
                            {...field}
                            className="bg-[#F2F2F2] text-[18px] text-[#666666] font-[500] border-1 border-[#E4E4E4] h-[50px] py-2 "
                            value={locationValue}
                            onChange={handleLocationChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#1E242C] text-[20px] font-[600]">
                        {t.contactsPage.form.title.message}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t.contactsPage.form.placeholders.message}
                          {...field}
                          className="contacts-input !h-[122px] font-urbanist resize-none bg-[#F2F2F2] text-[18px] text-[#666666] font-[500] border-1 border-[#E4E4E4]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-start justify-between gap-8 max-md:flex-col max-md:items-start">
                  <FormField
                    control={form.control}
                    name="privacy"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center gap-[6px]">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="h-6 w-6 border-[#efefef] bg-[#f7f7f7] shadow-none ring-0"
                            />
                          </FormControl>
                          <FormLabel className="cursor-pointer text-[16px] font-medium text-[#999]">
                            {t.contactsPage.privacy}
                          </FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="h-[40px] px-15 text-[16px] max-[450px]:w-full"
                  >
                    {t.buttons.sendMessage}
                  </Button>
                </div>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default FormPart;
