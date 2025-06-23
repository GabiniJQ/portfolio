import { cn } from '@/shared/utils/cn'
import { motion, type Variants } from 'motion/react'
import type { IconType } from 'react-icons'

const Skill = ({
  Icon,
  name,
  className,
  variants,
}: {
  Icon: IconType
  name: string
  className?: string
  variants?: Variants
}) => {
  return (
    <motion.div
      className={cn(
        'text-center space-y-1 transition hover:scale-110',
        className
      )}
      variants={variants}
    >
      <div className='flex items-center justify-center p-4 border-2 border-primary/10 shadow shadow-primary min-h-20 rounded-2xl '>
        <Icon className='size-2/3' />
      </div>

      <span className=''>{name}</span>
    </motion.div>
  )
}

export default Skill
