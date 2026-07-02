import { ArrowLeft } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-page flex flex-col items-center justify-center px-6">
      <h1
        className="text-8xl md:text-9xl font-medium text-foreground mb-4"
        style={{ letterSpacing: "-0.04em" }}
      >
        404
      </h1>
      <p className="text-muted text-lg mb-8">Page not found</p>
      <a
        href="/"
        className="inline-flex items-center gap-2 bg-foreground text-white rounded-full px-7 py-3 text-sm font-medium hover:bg-gray-800 transition-colors pill-glow"
      >
        <ArrowLeft size={16} />
        Back to Home
      </a>
    </div>
  );
};