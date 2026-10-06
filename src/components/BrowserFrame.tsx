import Image from 'next/image'

interface BrowserFrameProps {
  src: string
  alt: string
  url?: string
  className?: string
}

/**
 * Screenshot displayed in a macOS-style browser chrome frame.
 * Screenshots live in /public/screenshots/.
 */
export default function BrowserFrame({ src, alt, url, className = '' }: BrowserFrameProps) {
  return (
    <div className={`browser-frame ${className}`}>
      <div className="browser-bar">
        <div className="browser-dots" aria-hidden="true">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        {url && <div className="browser-url">{url}</div>}
      </div>
      <div className="browser-screen">
        <Image
          src={src}
          alt={alt}
          width={1280}
          height={800}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1100px"
          priority={false}
        />
      </div>
    </div>
  )
}
