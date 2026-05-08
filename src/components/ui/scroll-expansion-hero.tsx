'use client';

import {
  useEffect,
  useRef,
  useState,
  useCallback,
  ReactNode,
} from 'react';
import { motion } from 'framer-motion';
import { StarsBackground } from '@/components/ui/stars';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc?: string;
  starsBackground?: boolean;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  starsBackground = false,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [isMobileState, setIsMobileState] = useState(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef(0);
  const expandedRef = useRef(false);
  const touchStartRef = useRef(0);

  // Keep refs in sync with state
  useEffect(() => { progressRef.current = scrollProgress; }, [scrollProgress]);
  useEffect(() => { expandedRef.current = mediaFullyExpanded; }, [mediaFullyExpanded]);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
    progressRef.current = 0;
    expandedRef.current = false;
  }, [mediaType]);

  const isSectionInView = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    // Only activate when the section is well centered — top near viewport top
    const inView = rect.top < window.innerHeight * 0.15 && rect.bottom > window.innerHeight * 0.6;
    return inView;
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isSectionInView()) return; // Don't intercept if not in view

      const progress = progressRef.current;
      const expanded = expandedRef.current;

      // If progress is 0 and scrolling UP — let it pass (go back to hero)
      if (progress <= 0 && e.deltaY < 0) return;

      // If fully expanded and scrolling DOWN — let it pass (continue to next sections)
      if (expanded && e.deltaY > 0) return;

      // If fully expanded and scrolling UP — collapse back
      if (expanded && e.deltaY < 0) {
        e.preventDefault();
        setMediaFullyExpanded(false);
        expandedRef.current = false;
        setScrollProgress(0.95);
        progressRef.current = 0.95;
        return;
      }

      // Active expansion zone — intercept scroll
      e.preventDefault();
      const scrollDelta = e.deltaY * 0.001;
      const newProgress = Math.min(Math.max(progress + scrollDelta, 0), 1);
      setScrollProgress(newProgress);
      progressRef.current = newProgress;

      if (newProgress >= 1) {
        setMediaFullyExpanded(true);
        expandedRef.current = true;
        setShowContent(true);
      } else if (newProgress < 0.75) {
        setShowContent(false);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartRef.current) return;
      if (!isSectionInView()) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartRef.current - touchY;
      const progress = progressRef.current;
      const expanded = expandedRef.current;

      // If at 0 and swiping down (scroll up) — let pass
      if (progress <= 0 && deltaY < 0) { touchStartRef.current = touchY; return; }

      // If expanded and swiping up (scroll down) — let pass
      if (expanded && deltaY > 0) { touchStartRef.current = touchY; return; }

      // If expanded and swiping down (scroll up) — collapse
      if (expanded && deltaY < -20) {
        e.preventDefault();
        setMediaFullyExpanded(false);
        expandedRef.current = false;
        setScrollProgress(0.95);
        progressRef.current = 0.95;
        touchStartRef.current = touchY;
        return;
      }

      e.preventDefault();
      const scrollFactor = deltaY < 0 ? 0.006 : 0.004;
      const scrollDelta = deltaY * scrollFactor;
      const newProgress = Math.min(Math.max(progress + scrollDelta, 0), 1);
      setScrollProgress(newProgress);
      progressRef.current = newProgress;

      if (newProgress >= 1) {
        setMediaFullyExpanded(true);
        expandedRef.current = true;
        setShowContent(true);
      } else if (newProgress < 0.75) {
        setShowContent(false);
      }
      touchStartRef.current = touchY;
    };

    const handleTouchEnd = () => { touchStartRef.current = 0; };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isSectionInView]);

  useEffect(() => {
    const checkIfMobile = () => setIsMobileState(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div
      ref={sectionRef}
      className='overflow-x-hidden'
    >
      <section className='relative flex flex-col items-center justify-start min-h-[100dvh]' style={{ background: '#000' }}>
        <div className='relative w-full flex flex-col items-center min-h-[100dvh]'>
          {starsBackground ? (
            <div className='absolute inset-0 z-0 h-full overflow-hidden'>
              <StarsBackground
                speed={80}
                starColor='rgba(255,255,255,.7)'
                className='absolute inset-0'
              />
            </div>
          ) : (
            <motion.div
              className='absolute inset-0 z-0 h-full'
              animate={{ opacity: 1 - scrollProgress }}
              transition={{ duration: 0.1 }}
            >
              {bgImageSrc ? (
                <img
                  src={bgImageSrc}
                  alt='Background'
                  className='w-screen h-screen'
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              ) : (
                <div className='w-screen h-screen' style={{ background: '#000' }} />
              )}
              <div className='absolute inset-0 bg-black/10' />
            </motion.div>
          )}

          <div className='container mx-auto flex flex-col items-center justify-start relative z-10'>
            <div className='flex flex-col items-center justify-center w-full h-[100dvh] relative'>
              <div
                className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl'
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
                  overflow: 'hidden',
                  background: starsBackground ? '#000' : undefined,
                }}
              >
                {starsBackground && (
                  <div className='absolute inset-0 z-0 rounded-xl overflow-hidden'>
                    <StarsBackground
                      speed={80}
                      starColor='rgba(255,255,255,.7)'
                      className='absolute inset-0'
                    />
                  </div>
                )}
                {mediaType === 'video' ? (
                  <div className='relative w-full h-full pointer-events-none'>
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload='auto'
                      className='w-full h-full object-cover rounded-xl'
                      controls={false}
                      disablePictureInPicture
                    />
                    <motion.div
                      className='absolute inset-0 bg-black/30 rounded-xl'
                      animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                ) : (
                  <div className='relative w-full h-full'>
                    <img
                      src={mediaSrc}
                      alt={title || 'Media content'}
                      className='w-full h-full object-cover rounded-xl'
                    />
                    <motion.div
                      className='absolute inset-0 bg-black/50 rounded-xl'
                      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}

                <div className='flex flex-col items-center text-center relative z-10 mt-4'>
                  {date && (
                    <p className='text-2xl' style={{ transform: `translateX(-${textTranslateX}vw)`, color: 'var(--neon)' }}>
                      {date}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p className='font-medium text-center' style={{ transform: `translateX(${textTranslateX}vw)`, color: 'var(--ink-dim)' }}>
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              <div className={`flex items-center justify-center text-center gap-4 w-full relative z-10 flex-col ${textBlend ? 'mix-blend-difference' : 'mix-blend-normal'}`}>
                <motion.h2
                  className='text-4xl md:text-5xl lg:text-6xl font-bold'
                  style={{ transform: `translateX(-${textTranslateX}vw)`, color: 'var(--ink)', fontFamily: 'Anton, sans-serif' }}
                >
                  {firstWord}
                </motion.h2>
                <motion.h2
                  className='text-4xl md:text-5xl lg:text-6xl font-bold text-center'
                  style={{ transform: `translateX(${textTranslateX}vw)`, color: 'var(--ink)', fontFamily: 'Anton, sans-serif' }}
                >
                  {restOfTitle}
                </motion.h2>
              </div>
            </div>

            <motion.section
              className='flex flex-col w-full px-8 py-10 md:px-16 lg:py-20'
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
