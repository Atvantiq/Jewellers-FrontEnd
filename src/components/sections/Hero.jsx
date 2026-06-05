import { ShieldCheck, Award, Sparkles, MapPin } from 'lucide-react';
import '../../styles/Hero.css';

const ROW1_ITEMS = [
  { src: '/images/bridal_gold_jewelry.png', ratio: '4/3' },
  { src: '/images/himachali_bride_gen_1.png', ratio: '1/1' },
  { src: '/images/lookbook_shot_1.png', ratio: '1/1' },
  { src: '/images/himachali_bride_gen_2.png', ratio: '4/3' },
  { src: '/images/himachali_bride_gen_4.png', ratio: '1/1' },
  { src: '/images/himachali_bride_gen_5.png', ratio: '4/3' },
  { src: '/images/lookbook_shot_4.png', ratio: '3/2' }
];

const ROW2_ITEMS = [
  { src: '/images/bridal_diamond_jewelry.png', ratio: '1/1' },
  { src: '/images/himachali_bride_gen_3.png', ratio: '1/1' },
  { src: '/images/lookbook_shot_2.png', ratio: '4/3' },
  { src: '/images/himachali_bride_gen_6.png', ratio: '1/1' },
  { src: '/images/about_heritage_story.png', ratio: '4/3' },
  { src: '/images/himachali_bride_gen_7.png', ratio: '4/3' }
];

function CollageItem({ item }) {
  return (
    <div
      className="collage-item image-item"
      style={{
        aspectRatio: item.ratio,
        backgroundImage: `url('${item.src}')`
      }}
    />
  );
}

export default function Hero({ onExploreClick, onOpenVipModal }) {
  return (
    <section className="hero-section">
      {/* Cinematic Horizontal Scrolling Collage */}
      <div className="hero-collage-container">
        {/* Row 1 (scrolls left) */}
        <div className="collage-row row-1">
          <div className="collage-track scroll-left">
            {ROW1_ITEMS.concat(ROW1_ITEMS).map((item, idx) => (
              <CollageItem key={`r1-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2 (scrolls right) */}
        <div className="collage-row row-2">
          <div className="collage-track scroll-right">
            {ROW2_ITEMS.concat(ROW2_ITEMS).map((item, idx) => (
              <CollageItem key={`r2-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="container hero-container-content">
        <div className="hero-badge-wrapper animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="hero-mini-badge">
            <Sparkles size={12} className="text-gold" />
            Shimla's Oldest Showroom on The Mall
          </span>
        </div>

        <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.2s' }}>
          The Pinnacle of <span className="italic-title-gold">Purity</span>,<br />
          The Legacy of <span className="italic-title">Trust</span>
        </h1>

        <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Serving exquisite designs, BIS 916 Government hallmarked gold, and premium certified diamonds since 1980. Explore our famous Himachali traditional heritage collections and experience on-the-spot Karatmeter testing.
        </p>

        <div className="hero-ctas animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button className="button-premium hero-btn-explore" onClick={onExploreClick}>
            Explore Collections
          </button>
          <button className="button-premium-outline hero-btn-book" onClick={onOpenVipModal}>
            Book Private Consultation
          </button>
        </div>

        {/* Highlight Badges */}
        <div className="hero-highlights animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="highlight-item">
            <ShieldCheck size={20} className="highlight-icon" />
            <div className="highlight-text">
              <h5>100% Karatmeter Tested</h5>
              <p>Instant scientific purity report</p>
            </div>
          </div>
          <div className="highlight-item">
            <Award size={20} className="highlight-icon" />
            <div className="highlight-text">
              <h5>BIS Hallmark Certified</h5>
              <p>Government certified gold authenticity</p>
            </div>
          </div>
          <div className="highlight-item">
            <MapPin size={20} className="highlight-icon" />
            <div className="highlight-text">
              <h5>Showroom Est. 1980</h5>
              <p>Shimla's trusted heritage destination</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gravity Pendulum Scroll Cue */}
      <div className="hero-scroll-cue" />
    </section>
  );
}
