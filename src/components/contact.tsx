import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { toast } = useToast();

  const onSubmit = (values: z.infer<typeof formSchema>, e: any) => {
    e.preventDefault();
    console.log(values);
    emailjs
      .send("service_41ycxxo", "template_cdjsrzy", values, "GuBOrE_yj0u6_bXKX")
      .then(
        (result) => {
          console.log(result.text);
          toast({
            description: "Message sent, we will get back to you shortly.",
          });
        },
        (error) => {
          console.log(error.text);
          toast({
            description: "An error occurred, please try again.",
            variant: "destructive",
          });
        }
      );
  };

  return (
    <div className="my-16 flex flex-col sm:flex-row" id="contact">
      <StaticImage
        src="../images/contact.jpg"
        alt="Contact Image"
        class="sm:w-1/2"
        placeholder="none"
      />
      <div className="mt-10 sm:my-auto sm:w-1/2 me-16 ps-16">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
          Get In Touch
        </h1>
        <p className="text-xl text-muted-foreground mt-2">
          Have an enquiry? Fill out the form to contact our team
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 mt-2"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">Send Message</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
