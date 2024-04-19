import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function OutputVisualize({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 40"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <rect width={40} height={40} fill="#9B51E0" rx={8} />
      <path
        fill="#fff"
        d="m11.708 25.51 7.584 4.304a1.44 1.44 0 0 0 1.416 0l7.584-4.304c.215-.123.393-.299.518-.51.124-.212.19-.452.19-.696v-8.608c0-.245-.066-.484-.19-.696a1.4 1.4 0 0 0-.518-.51l-7.584-4.304a1.44 1.44 0 0 0-1.416 0l-7.584 4.304a1.4 1.4 0 0 0-.518.51c-.124.212-.19.451-.19.696v8.608c0 .245.066.484.19.696.125.212.303.387.518.51m9-13.716 6.876 3.902v7.717l-6.876-3.82zm-.71 9.003 6.955 3.865L20 28.608l-6.955-3.947zm-7.582-5.101 6.876-3.902v7.796l-6.876 3.82z"
      />
    </svg>
  )
}
export default OutputVisualize
