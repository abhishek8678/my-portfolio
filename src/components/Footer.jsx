export const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-transparent relative z-10 border-t border-white/5">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center max-w-6xl gap-4">
        <div className="text-center sm:text-left">
           <span className="font-space font-medium text-lg text-min-foreground">Abhishek<span className="text-min-accent">.</span></span>
        </div>
        <p className="text-sm font-light text-min-muted-foreground font-mono">
          &copy; {new Date().getFullYear()} Abhishek. All rights reserved.
        </p>
      </div>
    </footer>
  );
};