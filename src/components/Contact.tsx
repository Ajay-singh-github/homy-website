import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <form className="flex flex-col gap-3 p-4">
        <Input type="text" placeholder="Your Name"/>
        <Input type="email" placeholder="Email" />
        <Input type="number" placeholder="Phone Number" />
        <Textarea placeholder="Type your message here." />
        <Button className="bg-red-500 w-fit">Submit</Button>
    </form>
  );
};

export default Contact;
