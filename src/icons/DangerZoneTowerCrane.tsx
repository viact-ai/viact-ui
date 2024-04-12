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
          d="M29.082 21.202a8.122 8.122 0 0 0-1.332-4.516L16.21 28.212c1.397.908 2.912 1.362 4.545 1.362a8.065 8.065 0 0 0 3.237-.666 8.468 8.468 0 0 0 2.656-1.783 8.32 8.32 0 0 0 1.776-2.67 8.256 8.256 0 0 0 .658-3.253ZM13.79 25.778l11.556-11.54c-1.378-.93-2.908-1.393-4.592-1.393-1.51 0-2.903.372-4.178 1.117a8.265 8.265 0 0 0-3.031 3.046 8.22 8.22 0 0 0-1.117 4.194c0 1.653.454 3.178 1.362 4.576Zm18.72-4.576c0 1.602-.312 3.132-.935 4.592-.622 1.459-1.456 2.714-2.502 3.765-1.046 1.05-2.296 1.888-3.75 2.51a11.493 11.493 0 0 1-4.569.934c-1.592 0-3.115-.312-4.569-.934-1.454-.622-2.704-1.46-3.75-2.51-1.046-1.051-1.88-2.306-2.502-3.765A11.584 11.584 0 0 1 9 21.202c0-1.602.311-3.13.934-4.585.622-1.454 1.456-2.706 2.502-3.757 1.046-1.051 2.296-1.888 3.75-2.51a11.492 11.492 0 0 1 4.57-.934c1.59 0 3.114.311 4.568.934 1.454.622 2.704 1.459 3.75 2.51 1.046 1.05 1.88 2.304 2.502 3.758.623 1.454.934 2.982.934 4.584Z"
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
