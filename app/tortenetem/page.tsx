import FounderIntro from '@/components/FounderIntro';
import FounderManifesto from '@/components/FounderManifesto';

export default function StoryPage() {
  return (
    <main className="bg-background transition-colors">
      <FounderIntro />
      <FounderManifesto />
    </main>
  );
}
