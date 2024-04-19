import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function DangerZoneTowerCrane({
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
      <rect width={42} height={42} fill="#EB5757" rx={8} />
      <g clipPath="url(#danger-zone-tower-crane_svg__a)">
        <path
          fill="#fff"
          d="M29.082 21.202a8.1 8.1 0 0 0-1.332-4.516L16.21 28.212q2.095 1.362 4.545 1.362a8.1 8.1 0 0 0 3.237-.666 8.5 8.5 0 0 0 2.656-1.783 8.3 8.3 0 0 0 1.776-2.67 8.3 8.3 0 0 0 .658-3.253M13.79 25.778l11.556-11.54q-2.067-1.394-4.592-1.393-2.265 0-4.178 1.117a8.27 8.27 0 0 0-3.031 3.046 8.2 8.2 0 0 0-1.117 4.194q0 2.48 1.362 4.576m18.72-4.576q0 2.403-.935 4.592-.933 2.189-2.502 3.765t-3.75 2.51a11.5 11.5 0 0 1-4.569.934q-2.388 0-4.569-.934t-3.75-2.51-2.502-3.765A11.6 11.6 0 0 1 9 21.202q0-2.403.934-4.585.933-2.18 2.502-3.757t3.75-2.51a11.5 11.5 0 0 1 4.57-.934q2.386 0 4.568.934 2.181.933 3.75 2.51t2.502 3.758.934 4.584"
        />
      </g>
      <defs>
        <clipPath id="danger-zone-tower-crane_svg__a">
          <path fill="#fff" d="M9 9h23.51v24H9z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default DangerZoneTowerCrane
