import { classNames } from '@/lib/utils'

type Props = {
    text: string;
    color: string
    classes?: string
}

const UnderlinedText = ({ classes, color, text }: Props) => {
  return (
    <button
    className={classNames(
        `group w-fit relative flex items-center gap-x-1 text-sm font-helveticaRegular`,
        `text-[${color}]`,
        classes!!
    )}
  >
    <span>{text}</span>
    <div className={classNames(
        `absolute h-[2px] hidden bg-white w-full bottom-0 group-hover:block`,
        `bg-[${color}]`
    )} />
  </button>
  )
}

export default UnderlinedText