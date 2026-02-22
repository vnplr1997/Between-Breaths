import { ChapterSection } from '@/components/chapter-section';

const chapters = [
  {
    id: 'existence',
    chapter: 'Chapter I',
    title: 'Existence',
    text: 'Before language, there is only breath and being.'
  },
  {
    id: 'logic',
    chapter: 'Chapter II',
    title: 'Logic',
    text: 'Thought builds its lantern, yet darkness remains the room.'
  },
  {
    id: 'ego',
    chapter: 'Chapter III',
    title: 'Ego',
    text: 'The self is a mirror learning to forget its own reflection.'
  },
  {
    id: 'future',
    chapter: 'Chapter IV',
    title: 'Future',
    text: 'Tomorrow is the shape of courage in an unseen light.'
  },
  {
    id: 'silence',
    chapter: 'Chapter V',
    title: 'Silence',
    text: 'What remains after every answer is the sacred pause.'
  }
];

export default function HomePage() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-auto">
      <section className="flex min-h-screen snap-start items-center justify-center px-6">
        <h1 className="text-center text-6xl font-semibold leading-none tracking-wide md:text-8xl lg:text-9xl">
          Between Breaths
        </h1>
      </section>

      {chapters.map((chapter, index) => (
        <ChapterSection
          key={chapter.id}
          id={chapter.id}
          chapter={chapter.chapter}
          title={chapter.title}
          text={chapter.text}
          priority={index === 0}
        />
      ))}
    </main>
  );
}
