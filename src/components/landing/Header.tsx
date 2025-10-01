import { MountainIcon } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-6 bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex items-center justify-start">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold text-foreground">
            VoiceStream Academy
          </span>
        </Link>
      </div>
    </header>
  );
}
