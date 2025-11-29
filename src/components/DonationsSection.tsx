import { Heart, QrCode } from "lucide-react";

export function DonationsSection() {
  return (
    <section id="support" className="section-padding bg-gradient-subtle">
      <div className="container-width">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Support Our Mission
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Help Spread Spiritual Wisdom
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your generous contributions help us continue sharing ancient wisdom, 
            creating content, and reaching more souls on their spiritual journey.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Scan to Donate
            </h3>
            
            <p className="text-muted-foreground text-sm mb-6">
              Use your phone's camera or payment app to scan the QR code below
            </p>

            {/* QR Code Placeholder - Replace with your actual QR code image */}
            <div className="bg-white p-4 rounded-xl inline-block mb-6 shadow-sm">
              <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30">
                <div className="text-center">
                  <QrCode className="w-12 h-12 text-primary/50 mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">
                    Replace with<br />your QR code
                  </p>
                </div>
              </div>
              {/* 
                To add your QR code image:
                1. Add your QR code image to the public folder or src/assets
                2. Replace the placeholder div above with:
                <img 
                  src="/your-qr-code.png" 
                  alt="Payment QR Code" 
                  className="w-48 h-48"
                />
              */}
            </div>

            <p className="text-sm text-muted-foreground">
              Every contribution, big or small, makes a difference. 
              <br />
              <span className="text-primary font-medium">Thank you for your support!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
