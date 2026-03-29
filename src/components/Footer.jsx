export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-[#E0E5EC] relative z-10 border-t border-accent/10 transition-colors duration-300">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center max-w-6xl gap-6">
        <div className="text-center sm:text-left">
           <span className="font-display font-black text-2xl text-foreground">Abhishek Kumar</span>
        </div>
        <p className="text-sm font-display font-bold text-muted uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Abhishek. Crafted with tactile precision.
        </p>
      </div>
    </footer>
  );
};