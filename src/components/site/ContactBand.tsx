import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactBand() {
  return (
    <section className="border-t border-line bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-24 text-center md:px-10">
        <p className="eyebrow">Let's talk</p>
        <h2 className="display-lg mx-auto mt-5 max-w-4xl text-primary">Have a brand, story, or idea worth bringing to life?</h2>
        <div className="mt-10 flex justify-center">
          <Button asChild size="lg">
            <Link to="/contact">Get in touch <ArrowRight /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
