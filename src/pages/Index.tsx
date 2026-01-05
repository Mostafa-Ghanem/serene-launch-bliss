import { useEffect } from "react";
import backgroundImage from "@/assets/background.webp";
import logoWhite from "@/assets/logo-white.webp";

const Index = () => {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main 
      className="relative min-h-screen w-full overflow-hidden font-tajawal"
      dir="rtl"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-overlay/80 via-overlay/70 to-overlay/90" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
        {/* Logo */}
        <div className="animate-fade-in-up mb-8">
          <img 
            src={logoWhite} 
            alt="شرفات الحرم" 
            className="h-32 md:h-44 w-auto drop-shadow-2xl"
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-6 animate-fade-in-up-delay-1">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-3">
            قريباً <span className="shimmer-text">جداً</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground text-center max-w-md mb-10 animate-fade-in-up-delay-2">
          نعمل على إطلاق تجربة استثنائية. سجّل الآن ليصلك كل جديد.
        </p>

        {/* Form Card */}
        <div className="w-full max-w-lg animate-fade-in-up-delay-3">
          <div className="relative backdrop-blur-md bg-card/30 border border-border/30 rounded-2xl p-6 md:p-8 shadow-2xl">
            {/* Gold accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full" />
            
            <h2 className="text-xl font-semibold text-foreground text-center mb-4">
              كن أول من يعلم
            </h2>
            
            {/* Tally Form Embed */}
            <div className="tally-embed-container">
              <iframe
                data-tally-src="https://tally.so/embed/A72650?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="168"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="مزاد شرفات الحرم"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-6 left-0 right-0 text-center">
          <p className="text-sm text-muted-foreground/60">
            © {new Date().getFullYear()} شرفات الحرم. جميع الحقوق محفوظة.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
