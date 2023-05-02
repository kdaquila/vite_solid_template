export interface PropsType {
  href: string
  classNames: string
  img: string
  imgAltText: string
}

export default function LogoButton(props: PropsType) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      class="h-[100px] w-[100px]"
    >
      <img
        src={props.img}
        class={`h-full w-full bg-contain p-6 transition-all ${props.classNames}`}
        alt={props.imgAltText}
      />
    </a>
  )
}
