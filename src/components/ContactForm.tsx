import { useState } from "react";
import { Button } from "./Button";

export const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const whatsappMessage = `Hi CARS PLUG, my name is ${name}, my email is ${email}, and I have a message: ${message}`;
    const whatsappUrl = `https://wa.me/27655479547?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, "_blank");
    setStatus("success");
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
        <input type="text" name="name" id="name" required className="mt-1 block w-full bg-brand-charcoal border border-white/10 rounded-md p-3 text-white" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
        <input type="email" name="email" id="email" required className="mt-1 block w-full bg-brand-charcoal border border-white/10 rounded-md p-3 text-white" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
        <textarea name="message" id="message" rows={4} required className="mt-1 block w-full bg-brand-charcoal border border-white/10 rounded-md p-3 text-white" />
      </div>
      <Button type="submit" disabled={status === "submitting"} className="w-full">
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
      {status === "success" && <p className="text-green-500 text-center">Message sent successfully!</p>}
      {status === "error" && <p className="text-red-500 text-center">Failed to send message. Please try again.</p>}
    </form>
  );
};
