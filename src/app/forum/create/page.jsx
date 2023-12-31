"use client";

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
import { createForum } from "@/lib/forum-actions";
import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { WithContext as ReactTags } from "react-tag-input";
import * as z from "zod";

export default function CreateFormPage() {
  const router = useRouter();

  const [tags, setTags] = useState([]);
  const { user } = useUser();

  const formSchema = z.object({
    title: z.string().min(10).max(500),
    description: z.string().min(20).max(5000),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = async (values) => {
    const forum = {
      ...values,
      keywords: tags.map((tag) => tag.text),
      userName: user.fullName,
    };
    console.log(forum);
    const res = await createForum(forum);

    if (res) {
      form.reset();
      setTags([]);
      router.push(`/forum/${res.id}`);
    }
  };
  return (
    <div className="flex flex-col items-center px-12 text-black">
      <h3 className="text-2xl font-semibold text-center text-black md:text-3xl lg:text-4xl">
        Drop your question
      </h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-8"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is your question?</FormLabel>
                <FormControl>
                  <Input placeholder="I want to do something" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Please describe your question</FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-blue-100"
                    placeholder="I have done these and what to do that but this is the issue"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <ReactTags
            classNames={{
              tags: "flex flex-col gap-5",
              tag: "bg-blue-400 rounded-full p-2",
              selected: "flex flex-wrap gap-2",
              tagInputField:
                "flex bg-blue-100 w-full h-10 px-3 py-2 text-sm border rounded-md border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            }}
            tags={tags}
            delimiters={[188, 13]}
            handleDelete={(i) =>
              setTags(tags.filter((_, index) => index !== i))
            }
            handleAddition={(tag) => {
              setTags([...tags, tag]);
            }}
            inputFieldPosition="top"
            autocomplete
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
