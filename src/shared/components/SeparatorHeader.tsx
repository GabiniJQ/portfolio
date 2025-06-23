import { motion } from 'motion/react'

const SeparatorHeader = ({ title }: { title: string }) => {
  return (
    <motion.div className='flex gap-4 items-center w-full sm:gap-10'>
      <AnimatedSpan origin='left'/>
      <h1 className='section-title text-purple bg-transparent shrink-0'>
        {title}
      </h1>
      <AnimatedSpan origin='right'/>
    </motion.div>
  )
}

export const AnimatedSpan = ({
  origin,
}: {
  origin: 'left' | 'right'
}) => {
  const originValue = origin === 'left' ? 0 : 1
  return (
    <motion.span
      className='w-full h-[0.5px] bg-purple overflow-hidden'
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{ originX: originValue }}
    ></motion.span>
  )
}

export default SeparatorHeader
