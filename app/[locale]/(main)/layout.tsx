// file: app/[locale]/(main)/layout.tsx

import Image from 'next/image'
import InteractiveLayout from './InteractiveLayout'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Image
        src="https://logjs.site/static/images/up-left.png"
        alt=""
        width={100}
        height={100}
        className="corner-svg top-left"
      />
      <Image
        src="https://logjs.site/static/images/up-right.png"
        alt=""
        width={100}
        height={100}
        className="corner-svg top-right"
      />
      <Image
        src="https://logjs.site/static/images/down-left.png"
        alt=""
        width={100}
        height={100}
        className="corner-svg bottom-left"
      />
      <Image
        src="https://logjs.site/static/images/down-right.png"
        alt=""
        width={100}
        height={100}
        className="corner-svg bottom-right"
      />
      <InteractiveLayout>{children}</InteractiveLayout>
    </main>
  )
}
