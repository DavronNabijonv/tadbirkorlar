import Title from "./Title";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { ContactsSchema } from "@/lib/validation";

export default function Contact({ imgContact }: { imgContact: string }) {

    const form = useForm<z.infer<typeof ContactsFormSchema>>({
        resolver: zodResolver(ContactsFormSchema),
        defaultValues: {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        },
      });

  return (
    <div className="mb-10 bg-[#F9F9FD] py-10">
      <div className="main-container">
        <div className="mb-15">
          <Title
            title="Biz Bilan Bog’laning"
            desc="Agar sizda hali ham savol qolsa, bemalol biz bilan bog‘laning."
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="w-1.5/2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full max-w-[577px] space-y-6 rounded-2xl bg-white p-[50px] max-[1100px]:max-w-full max-[850px]:max-w-full max-[850px]:px-8"
              >
                <div className="grid grid-cols-2 gap-[21px] max-[850px]:grid-cols-1">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder={'t.contactsSection.firstName'}
                            {...field}
                            className="contact-input"
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
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder={t.contactsSection.lastName}
                            {...field}
                            className="contact-input"
                            value={lastNameValue}
                            onChange={(e) => handleNameChange(e, "lastName")}
                            maxLength={20}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={t.contactsSection.email}
                          {...field}
                          type="email"
                          className="contact-input"
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
                      <FormControl>
                        <Input
                          placeholder={t.contactsSection.phone}
                          {...field}
                          type="text"
                          className="contact-input"
                          value={phoneValue}
                          onChange={handlePhoneChange}
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
                      <FormControl>
                        <Textarea
                          placeholder={t.contactsSection.message}
                          {...field}
                          className="contact-input !h-[144px] resize-none py-5"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="h-[60px] px-[30.5px] max-[400px]:w-full"
                >
                  {t.buttons.sendMessage}
                </Button>
              </form>
            </Form>
          </div>

          <div>
            <img
              src={imgContact}
              alt="contact image"
              className="w-0.5/2 h-[742px] rounded-[8px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
