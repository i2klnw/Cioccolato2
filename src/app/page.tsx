'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Mascot URL
const MASCOT_URL = 'https://res.cloudinary.com/dwfbqgtfr/image/upload/f_auto,q_auto/v1774042313/WhatsApp_Image_2026-03-20_at_17.46.57-removebg-preview_fjhauf.png';

// Products data
const products = [
  {
    id: 7,
    name: 'Cac(AU-AU) 🐾',
    badge: 'EXCLUSIVO',
    badgeColor: '#8B5E3C',
    price: 29.90,
    weight: '60g',
    description: 'Nosso chocolate com formato de patinha! Feito com cacau 55% e recheio de amendoim. Porque quem ama chocolate, ama de jeito animal. Au au! 🐶',
    image: '/images/tablete-intenso.png',
    stock: 30,
  },
];

// Chocolate drops component
function ChocolateDrops() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-4 md:w-4 md:h-5"
          style={{
            backgroundColor: '#5C3317',
            borderRadius: '50% 50% 50% 0',
            left: `${10 + i * 15}%`,
            animation: `dropChocolate ${8 + i * 2}s linear infinite`,
            animationDelay: `${i * 1.5}s`,
            transform: 'rotate(-45deg)',
          }}
        />
      ))}
    </div>
  );
}

// SVG Texture Background
function TextureBackground() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
        <feColorMatrix type="saturate" values="0"/>
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)"/>
    </svg>
  );
}



// Section wrapper with reveal animation
function Section({ 
  children, 
  className = '', 
  id 
}: { 
  children: React.ReactNode; 
  className?: string; 
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`${className} transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </section>
  );
}

// Hero Section
function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!initializedRef.current) {
      initializedRef.current = true;
      // Use requestAnimationFrame to defer state update to next frame
      const frameId = requestAnimationFrame(() => {
        setMounted(true);
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#2C1A0E' }}>
      <TextureBackground />
      <ChocolateDrops />
      
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text Content */}
          <div className={`flex-1 text-center md:text-left z-10 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold italic mb-6"
              style={{ fontFamily: 'var(--font-playfair)', color: '#F5EDD6' }}
            >
              Cioccolato que conta uma história.
            </h1>
            <p 
              className="text-xl md:text-2xl mb-8"
              style={{ fontFamily: 'var(--font-lato)', color: '#D4C4A0', fontWeight: 300 }}
            >
              Artesanal. Italiano. Irresistível.
            </p>
            <a
              href="#colecao"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ 
                backgroundColor: '#C8860A', 
                color: '#1A0F08',
                fontFamily: 'var(--font-lato)',
                fontWeight: 400
              }}
            >
              Ver Coleção
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Mascot */}
          <div 
            className={`w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] relative transition-all duration-1000 ease-out ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
          >
            <Image
              src={MASCOT_URL}
              alt="Cioccolato Mascote"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// History Section
function HistorySection() {
  return (
    <Section 
      className="py-20 md:py-32" 
      style={{ backgroundColor: '#1A0F08' }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-0">
          {/* Text Content - 60% */}
          <div className="w-full md:w-[60%] md:pr-12">
            <span 
              className="inline-block text-sm tracking-widest mb-4"
              style={{ fontFamily: 'var(--font-lato)', color: '#C8860A', fontWeight: 400 }}
            >
              ARTESANAL
            </span>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold italic mb-6"
              style={{ fontFamily: 'var(--font-playfair)', color: '#F5EDD6' }}
            >
              Do cacau à sua mão.
            </h2>
            <div className="space-y-4" style={{ color: '#D4C4A0', fontWeight: 300 }}>
              <p style={{ fontFamily: 'var(--font-lato)' }}>
                A Cioccolato nasceu com uma paixão simples e verdadeira: fazer chocolate artesanal de verdade. Sem pressa, sem fórmula industrial — só cacau selecionado, ingredientes premium e muito amor.
              </p>
              <p style={{ fontFamily: 'var(--font-lato)' }}>
                Cada tablete e cada ovo é produzido em pequenos lotes, temperado à mão e embalado com cuidado. Trabalhamos com cacau de origem brasileira, valorizando o que há de melhor no nosso país.
              </p>
              <p style={{ fontFamily: 'var(--font-lato)' }}>
                Nossa missão é simples: transformar cada mordida em uma memória. Um presente, um momento, uma experiência que fica.
              </p>
            </div>
          </div>

          {/* Golden Line Separator */}
          <div 
            className="hidden md:block w-px self-stretch mx-8"
            style={{ backgroundColor: '#D4A017' }}
          />

          {/* Stats or Decorative Element - 40% */}
          <div className="w-full md:w-[40%] md:pl-8 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#2C1A0E' }}
              >
                <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-dancing)', color: '#C8860A' }}>
                  100%
                </span>
              </div>
              <div>
                <p className="font-bold" style={{ fontFamily: 'var(--font-playfair)', color: '#F5EDD6' }}>Feito à mão</p>
                <p style={{ color: '#D4C4A0', fontFamily: 'var(--font-lato)', fontWeight: 300 }}>Do cacau à embalagem</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#2C1A0E' }}
              >
                <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-dancing)', color: '#C8860A' }}>
                  5★
                </span>
              </div>
              <div>
                <p className="font-bold" style={{ fontFamily: 'var(--font-playfair)', color: '#F5EDD6' }}>Sabor único</p>
                <p style={{ color: '#D4C4A0', fontFamily: 'var(--font-lato)', fontWeight: 300 }}>Aprovado por quem ama chocolate</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#2C1A0E' }}
              >
                <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-dancing)', color: '#C8860A' }}>
                  ∞
                </span>
              </div>
              <div>
                <p className="font-bold" style={{ fontFamily: 'var(--font-playfair)', color: '#F5EDD6' }}>Momentos</p>
                <p style={{ color: '#D4C4A0', fontFamily: 'var(--font-lato)', fontWeight: 300 }}>Cada mordida conta uma história</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Product Card
function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <div 
      className="card-hover rounded-2xl overflow-hidden border border-[rgba(200,134,10,0.2)] hover:border-[rgba(200,134,10,0.5)]"
      style={{ backgroundColor: '#1A0F08' }}
    >
      {/* Product Image */}
      <div className="relative aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        {/* Badge */}
        <span 
          className="absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full"
          style={{ backgroundColor: product.badgeColor, color: '#1A0F08', fontFamily: 'var(--font-lato)', letterSpacing: '0.05em' }}
        >
          {product.badge}
        </span>
      </div>
      
      {/* Product Info */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 
            className="text-lg font-bold"
            style={{ fontFamily: 'var(--font-playfair)', color: '#F5EDD6' }}
          >
            {product.name}
          </h3>
          <span 
            className="text-xs px-2 py-1 rounded"
            style={{ backgroundColor: '#2C1A0E', color: '#D4C4A0', fontFamily: 'var(--font-lato)' }}
          >
            {product.weight}
          </span>
        </div>
        <p 
          className="text-sm mb-4 leading-relaxed"
          style={{ fontFamily: 'var(--font-lato)', color: '#D4C4A0', fontWeight: 300 }}
        >
          {product.description}
        </p>
        {/* Stock indicator */}
        <div className="mb-3">
          {product.stock === 0 ? (
            <span
              className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded"
              style={{ backgroundColor: '#3D1010', color: '#FF6B6B', fontFamily: 'var(--font-lato)' }}
            >
              Esgotado
            </span>
          ) : product.stock <= 10 ? (
            <span
              className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded"
              style={{ backgroundColor: '#3D2C10', color: '#FFB347', fontFamily: 'var(--font-lato)' }}
            >
              ⚡ Últimas {product.stock} unidades
            </span>
          ) : (
            <span
              className="text-xs uppercase tracking-wider"
              style={{ color: '#7DBD7D', fontFamily: 'var(--font-lato)' }}
            >
              ✓ Em estoque ({product.stock} un.)
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span 
            className="text-2xl font-bold"
            style={{ fontFamily: 'var(--font-dancing)', color: '#C8860A' }}
          >
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          <button 
            className="px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-sm uppercase tracking-wider"
            style={{ 
              backgroundColor: 'transparent', 
              border: `1px solid ${product.stock === 0 ? '#555' : '#C8860A'}`,
              color: product.stock === 0 ? '#555' : '#C8860A',
              fontFamily: 'var(--font-lato)',
              cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
              opacity: product.stock === 0 ? 0.5 : 1,
            }}
            disabled={product.stock === 0}
            aria-label="Adicionar ao carrinho"
          >
            {product.stock === 0 ? 'Indisponível' : 'Adicionar'}
          </button>
        </div>
      </div>
    </div>
  );
}

// Collection Section
function CollectionSection() {
  return (
    <Section 
      id="colecao"
      className="py-20 md:py-32" 
      style={{ backgroundColor: '#2C1A0E' }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span 
            className="inline-block text-sm tracking-widest mb-4"
            style={{ fontFamily: 'var(--font-lato)', color: '#C8860A', fontWeight: 400 }}
          >
            NOSSA COLEÇÃO
          </span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold italic"
            style={{ fontFamily: 'var(--font-playfair)', color: '#F5EDD6' }}
          >
            Feitos para apaixonar
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Section>
  );
}

// Differentials Section
function DifferentialsSection() {
  const differentials = [
    {
      icon: (
        <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Hands icon */}
          <path d="M32 8c-4 0-8 2-10 6l-8 14c-2 4-2 8 0 12l6 10c2 4 6 6 10 6h4c4 0 8-2 10-6l6-10c2-4 2-8 0-12l-8-14c-2-4-6-6-10-6z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M28 20v24M36 20v24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="32" cy="44" r="4" fill="currentColor"/>
        </svg>
      ),
      title: '100% Artesanal',
      description: 'Cada chocolate é feito à mão, em pequenos lotes, com técnicas tradicionais italianas.',
    },
    {
      icon: (
        <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Leaf/Cacao icon */}
          <path d="M32 8C20 8 10 18 10 30c0 8 4 14 10 18l12 8 12-8c6-4 10-10 10-18 0-12-10-22-22-22z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M32 16v32M24 24l8 8 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Cacau Premium',
      description: 'Utilizamos apenas cacau de alta qualidade, selecionado dos melhores produtores.',
    },
    {
      icon: (
        <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Gift box icon */}
          <rect x="8" y="24" width="48" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M8 36h48" stroke="currentColor" strokeWidth="2"/>
          <path d="M32 24v32" stroke="currentColor" strokeWidth="2"/>
          <path d="M32 24c-8-8-16-8-16 0M32 24c8-8 16-8 16 0" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="32" cy="20" r="4" fill="currentColor"/>
        </svg>
      ),
      title: 'Embalagem Exclusiva',
      description: 'Design sofisticado e sustentável, perfeito para presentear momentos especiais.',
    },
  ];

  return (
    <Section 
      className="py-20 md:py-32" 
      style={{ backgroundColor: '#5C3317' }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span 
            className="inline-block text-sm tracking-widest mb-4"
            style={{ fontFamily: 'var(--font-lato)', color: '#C8860A', fontWeight: 400 }}
          >
            NOSSOS DIFERENCIAIS
          </span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold italic"
            style={{ fontFamily: 'var(--font-playfair)', color: '#F5EDD6' }}
          >
            Por que escolher Cioccolato?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 md:p-8 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: 'rgba(44, 26, 14, 0.5)' }}
            >
              <div className="flex justify-center mb-6" style={{ color: '#C8860A' }}>
                {item.icon}
              </div>
              <h3 
                className="text-xl md:text-2xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-playfair)', color: '#F5EDD6' }}
              >
                {item.title}
              </h3>
              <p 
                className="text-base"
                style={{ fontFamily: 'var(--font-lato)', color: '#D4C4A0', fontWeight: 300 }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// CTA Section
function CTASection() {
  return (
    <Section 
      className="py-20 md:py-32" 
      style={{ backgroundColor: '#2C1A0E' }}
    >
      <div className="container mx-auto px-4 md:px-8 text-center">
        {/* Mascot */}
        <div className="w-40 h-40 md:w-[200px] md:h-[200px] relative mx-auto mb-8">
          <Image
            src={MASCOT_URL}
            alt="Cioccolato Mascote"
            fill
            className="object-contain"
          />
        </div>

        <h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold italic mb-6"
          style={{ fontFamily: 'var(--font-playfair)', color: '#F5EDD6' }}
        >
          Pronto para se apaixonar?
        </h2>
        <p 
          className="text-lg md:text-xl mb-8 max-w-md mx-auto"
          style={{ fontFamily: 'var(--font-lato)', color: '#D4C4A0', fontWeight: 300 }}
        >
          Faça seu pedido pelo WhatsApp e receba em casa com todo o carinho.
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/5511999999999?text=Olá!%20Vim%20pelo%20site%20e%20quero%20fazer%20um%20pedido%20🍫"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{ 
            backgroundColor: '#25D366', 
            color: '#FFFFFF',
            fontFamily: 'var(--font-lato)',
            fontWeight: 400
          }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Fazer Pedido pelo WhatsApp
        </a>
      </div>
    </Section>
  );
}

// Footer
function Footer() {
  return (
    <footer 
      className="py-8 md:py-12"
      style={{ backgroundColor: '#1A0F08' }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 relative">
              <Image
                src={MASCOT_URL}
                alt="Cioccolato"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 
                className="text-xl md:text-2xl font-bold italic"
                style={{ fontFamily: 'var(--font-playfair)', color: '#F5EDD6' }}
              >
                Cioccolato
              </h3>
              <p 
                className="text-sm"
                style={{ fontFamily: 'var(--font-dancing)', color: '#C8860A' }}
              >
                Artesanal com amor
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="transition-all duration-300 hover:scale-110"
              style={{ color: '#D4C4A0' }}
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://wa.me/5511999999999" 
              className="transition-all duration-300 hover:scale-110"
              style={{ color: '#D4C4A0' }}
              aria-label="WhatsApp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="transition-all duration-300 hover:scale-110"
              style={{ color: '#D4C4A0' }}
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t text-center" style={{ borderColor: '#3D2415' }}>
          <p 
            className="text-sm"
            style={{ fontFamily: 'var(--font-lato)', color: '#D4C4A0', fontWeight: 300 }}
          >
            © 2026 Cioccolato. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <HistorySection />
        <CollectionSection />
        <DifferentialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
