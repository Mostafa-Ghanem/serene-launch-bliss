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
  return <main className="relative min-h-screen w-full overflow-hidden" dir="rtl">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105" style={{
      backgroundImage: `url(${backgroundImage})`
    }} />
      
      {/* Dark Overlay with gradient - matching reference dark teal/green tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-overlay/85 via-overlay/75 to-overlay/95" />
      
      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between px-4 py-8 md:py-12">
        
        {/* Main Content Container */}
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-lg">
          
          {/* Logo */}
          <div className="animate-fade-in-up mb-6 md:mb-10">
            <img src={logoWhite} alt="شرفات الحرم" className="h-28 md:h-40 w-auto drop-shadow-2xl" />
          </div>

          {/* Heading - Large Gold Text */}
          <div className="text-center mb-6 md:mb-8 animate-fade-in-up-delay-1">
            <h1 className="text-5xl md:text-7xl font-bold text-gold mb-2 tracking-wide">
              قريباً جداً
            </h1>
          </div>

          {/* Tagline */}
          <div className="text-center mb-8 md:mb-12 animate-fade-in-up-delay-2 max-w-md px-4">
            <h2 className="text-xl md:text-2xl font-medium text-gold mb-3">مخطط شرفات الحرم</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              نافذتك على جوارٍ رابحٍ يُعتز به
            </p>
          </div>

          {/* Form Card - Matching Reference Style */}
          <div className="w-full animate-fade-in-up-delay-3">
            <div className="relative backdrop-blur-sm bg-card/20 border border-gold/30 rounded-xl p-5 md:p-6 shadow-xl">
              {/* Gold accent line at top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full" />
              
              <h3 className="text-lg md:text-xl font-semibold text-foreground text-center mb-5">
                كن أول من يعلم
              </h3>
              
              {/* Tally Form Embed */}
              <div className="tally-embed-container">
                <iframe data-tally-src="https://tally.so/embed/A72650?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="168" frameBorder="0" marginHeight={0} marginWidth={0} title="مزاد شرفات الحرم" className="w-full" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>;
};
export default Index;