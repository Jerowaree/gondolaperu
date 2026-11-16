import { motion } from 'framer-motion'

export function BrandLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F8FAFC]"
      exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeOut' } }}
    >
      <motion.img
        src="/logos/gondolalogo.png"
        alt="GÓNDOLA PERÚ"
        className="h-20 w-auto sm:h-24"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.p
        className="mt-5 text-sm font-bold tracking-[0.25em] text-[#003865]"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.25, ease: 'easeOut' }}
      >
        GÓNDOLA PERÚ
      </motion.p>

      <motion.div
        className="mt-6 h-0.5 w-32 overflow-hidden rounded-full bg-slate-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        <motion.div
          className="h-full w-full origin-left bg-[#FCB800]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 0.6, 0.85, 1] }}
          transition={{ duration: 1.1, delay: 0.35, times: [0, 0.5, 0.8, 1], ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  )
}
