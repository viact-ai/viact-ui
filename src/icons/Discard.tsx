import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Discard({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g clipPath="url(#discard_svg__a)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.903 21.828h-1.627q-4.906-.637-7.222-4.996a8.5 8.5 0 0 1-.852-4.182q.324-.768 1.143-.562.47.18.561.678.102 4.238 3.698 6.409 3.485 1.82 6.971 0 3.533-2.136 3.679-6.293-.18-4.11-3.679-6.216a6 6 0 0 0-2.091-.735.18.18 0 0 0-.136.135l-.039 1.51q.012.24-.212.175a209 209 0 0 1-2.982-2.401 2.4 2.4 0 0 1-.368-.368.32.32 0 0 1 .038-.271A310 310 0 0 1 13.058 2h.193q.035.073.059.155l.038 1.743q.056.062.097.135 4.2.836 6.41 4.473 2.028 3.843.464 7.9-2.226 4.73-7.416 5.422"
          clipRule="evenodd"
          opacity={0.974}
        />
      </g>
      <defs>
        <clipPath id="discard_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Discard
