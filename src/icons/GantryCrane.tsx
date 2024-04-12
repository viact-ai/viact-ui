import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function GantryCrane({
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
      <rect width={42} height={42} fill="#F2C94C" rx={8} />
      <path
        fill="#fff"
        d="M30 15h1v-2h-1v-1h-3v1H15v-1h-3v1h-1v2h1v14h-1v2h5v-2h-1V15h5v1h.5v3.62c-.5.17-.81.63-.81 1.14 0 .44.23.84.61 1.06V23h.62c.34 0 .62.27.63.61a.619.619 0 0 1-.931.546.63.63 0 0 1-.229-.226.618.618 0 1 0-1.07.62c.33.57.94.92 1.6.92 1.02-.01 1.84-.85 1.83-1.87-.01-.77-.49-1.46-1.22-1.72v-.06c.59-.32.81-1.04.5-1.62-.11-.2-.29-.39-.5-.5V16H22v-1h5v14h-1v2h5v-2h-1V15Zm-16 9.29v1.42l-1 1v-1.42l1-1ZM13 29v-.76l1-1v1.42l-.34.34H13Zm0-12.71 1-1v1.42l-1 1v-1.42Zm0 3 1-1v1.42l-1 1v-1.42Zm0 3 1-1v1.42l-1 1v-1.47.05Zm16 2v1.42l-1 1v-1.42l1-1ZM28 29v-.76l1-1v1.42l-.34.34H28Zm0-12.71 1-1v1.42l-1 1v-1.42Zm0 3 1-1v1.42l-1 1v-1.42Zm0 3 1-1v1.42l-1 1v-1.47.05Z"
      />
    </svg>
  )
}
export default GantryCrane
