'use client';

import { useEffect, useRef, useState } from 'react';

type ChapterSectionProps = {
  chapter: string;
  title: string;
  text: string;
  id: string;
  priority?: boolean;
};

export function ChapterSection({
  chapter,
  title,
  text,
  id,
  priority = false
}: ChapterSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(priority);

  useEffect(() => {
    const element = ref.current;

    if (!element || priority) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.45
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [priority]);

  return (
    <section
      id={id}
      ref={ref}
      className="relative flex min-h-screen snap-start items-center justify-center px-6"
    >
      <div
        className={[
          'mx-auto max-w-5xl text-center transition-all duration-1000 ease-ethereal',
          isVisible ? 'opacity-100' : 'opacity-0',
          isVisible ? 'translate-y-0' : 'translate-y-6'
        ].join(' ')}
      >
        <p className="mb-6 text-xs uppercase tracking-breath text-ash/60 md:text-sm">
          {chapter}
        </p>
        <h2 className="text-5xl font-medium leading-tight md:text-7xl lg:text-8xl">
          {title}
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-ash/80 md:text-2xl">{text}</p>
      </div>
    </section>
  );
}
