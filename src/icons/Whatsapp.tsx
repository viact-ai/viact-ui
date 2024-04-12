import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Whatsapp({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 42 42"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <rect width={42} height={42} fill="#00E676" rx={8} />
      <g clipPath="url(#whatsapp_svg__a)">
        <path
          fill="#00E676"
          d="m15.343 29.553.392.194c1.635.97 3.466 1.422 5.297 1.422 5.755 0 10.464-4.654 10.464-10.343 0-2.714-1.112-5.365-3.074-7.304a10.45 10.45 0 0 0-7.39-3.038c-5.754 0-10.463 4.654-10.398 10.407 0 1.94.589 3.814 1.57 5.43l.261.388-1.046 3.813 3.924-.97Z"
        />
        <path
          fill="#fff"
          d="M29.534 12.49C27.311 10.229 24.237 9 21.098 9c-6.67 0-12.033 5.365-11.967 11.893 0 2.069.588 4.073 1.57 5.883L9 32.916l6.343-1.616c1.766.97 3.728 1.422 5.69 1.422C27.638 32.722 33 27.357 33 20.83c0-3.167-1.242-6.14-3.466-8.338ZM21.098 30.72c-1.765 0-3.531-.453-5.035-1.358l-.393-.194-3.793.97.981-3.684-.261-.388c-2.878-4.59-1.504-10.666 3.204-13.51 4.709-2.844 10.79-1.487 13.668 3.167 2.877 4.654 1.504 10.666-3.204 13.51-1.505.97-3.336 1.486-5.167 1.486Zm5.755-7.175-.72-.323s-1.046-.453-1.7-.776c-.065 0-.13-.065-.196-.065-.196 0-.327.065-.457.13 0 0-.066.064-.981 1.098a.36.36 0 0 1-.327.194h-.066a.498.498 0 0 1-.261-.129l-.327-.13c-.72-.322-1.374-.71-1.897-1.227-.13-.13-.327-.259-.458-.388-.457-.453-.915-.97-1.242-1.552l-.066-.129c-.065-.064-.065-.13-.13-.258 0-.13 0-.259.065-.323 0 0 .262-.324.458-.518.13-.129.196-.323.327-.452.13-.194.196-.453.13-.647-.065-.323-.85-2.068-1.046-2.456-.13-.194-.261-.258-.457-.323h-.72c-.13 0-.261.065-.392.065l-.066.064c-.13.065-.261.194-.392.259-.13.13-.196.258-.327.388-.458.582-.72 1.293-.72 2.003 0 .518.131 1.035.328 1.487l.065.194a10.771 10.771 0 0 0 2.42 3.297l.261.258c.196.194.393.323.523.517 1.374 1.164 2.943 2.004 4.709 2.457.196.064.458.064.654.129h.654c.327 0 .72-.13.98-.259.197-.129.328-.129.459-.258l.13-.13c.131-.129.262-.193.393-.323.13-.129.261-.258.327-.388.13-.258.196-.581.261-.904v-.453s-.065-.065-.196-.13Z"
        />
      </g>
      <defs>
        <clipPath id="whatsapp_svg__a">
          <path fill="#fff" d="M9 9h24v24H9z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Whatsapp
