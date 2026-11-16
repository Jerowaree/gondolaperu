import { useState } from 'react'
import { FALLBACK_IMAGE, handleImageError } from '@/lib/utils'

interface ImageViewerProps {
  images: string[]
  title: string
  className?: string
}

export function ImageViewer({ images, title, className = '' }: ImageViewerProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const activeImage = images[selectedIndex] || images[0] || FALLBACK_IMAGE

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Vista principal grande */}
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-md flex items-center justify-center p-4 sm:p-8">
        <img
          src={activeImage}
          alt={title}
          onError={handleImageError}
          className="w-full h-full object-contain object-center transition-all duration-300"
        />
      </div>

      {/* Selector de miniaturas */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 bg-slate-50 ${
                selectedIndex === idx
                  ? 'border-[#0082D6] ring-2 ring-[#0082D6]/30 shadow-xs'
                  : 'border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100'
              }`}
              title={`Ver foto ${idx + 1}`}
              aria-label={`Ver foto ${idx + 1} de ${title}`}
            >
              <img src={img} alt="" className="w-full h-full object-contain p-1" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
