import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-px mx-auto flex min-h-[70vh] max-w-8xl flex-col items-center justify-center pt-32 text-center">
      <p className="font-display text-6xl font-medium text-navy-dynamic">404</p>
      <h1 className="mt-4 font-display text-2xl font-medium">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-3 max-w-md text-sm text-fg-muted">
        The page you&apos;re looking for may have moved. Try the materials or
        projects pages, or head back home.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/">Back to Home</Button>
        <Button href="/contact" variant="secondary">
          Contact Us
        </Button>
      </div>
    </section>
  );
}
