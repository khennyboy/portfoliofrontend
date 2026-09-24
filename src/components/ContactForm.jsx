import { Button, VStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import FloatingInput from "./FloatingInput";
import { contactSchema } from "../utils/schema";
import toast from "../utils/toast";
import useSendMessage from "../hooks/sendMessage";
import FloatingTextarea from "./FloatingTextArea";

export default function ContactForm({ onSuccessClose }) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { sendMessage, isPending } = useSendMessage({
    onSuccess: () => {
      toast(true, "Message sent successfully!");
      reset();
      if (onSuccessClose) onSuccessClose();
    },
    onError: (err) => {
      const errorMsg = err?.response?.data?.error || "Failed to send message";
      toast(false, errorMsg);
    },
  });

  const onSubmit = (values) => {
    sendMessage(values);
  };

  return (
    <VStack
      as="form"
      gap={1}
      align={"stretch"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <FloatingInput
            label="Name"
            name="name"
            value={field.value || ""}
            onChange={field.onChange}
            onBlur={field.onBlur}
            error={errors.name?.message}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <FloatingInput
            label="Email"
            type="email"
            name="email"
            value={field.value || ""}
            onChange={field.onChange}
            onBlur={field.onBlur}
            error={errors.email?.message}
          />
        )}
      />

      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <FloatingTextarea
            label="Message"
            name="message"
            value={field.value || ""}
            onChange={field.onChange}
            onBlur={field.onBlur}
            error={errors.message?.message}
          />
        )}
      />

      <Button
        type="submit"
        loading={isPending}
        loadingText="Sending..."
        disabled={!isDirty || !isValid || isPending}
        h={"52px"}
        rounded={"xl"}
        colorPalette={"purple"}
        color={"white"}
        fontWeight={"semibold"}
        fontSize={"md"}
        mt={2}
      >
        Send
      </Button>
    </VStack>
  );
}
