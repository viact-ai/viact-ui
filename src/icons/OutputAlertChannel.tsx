import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function OutputAlertChannel({
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
      <rect width={40} height={40} fill="#EB5757" rx={8} />
      <path
        fill="#fff"
        d="M12.523 26.656c0 .415.336.75.75.75h13.454a.75.75 0 0 0 .75-.75v-5.46A7.476 7.476 0 0 0 20 13.718a7.476 7.476 0 0 0-7.477 7.476v5.461Zm1.688-5.46a5.79 5.79 0 0 1 11.578 0v4.523h-8.32V21.71a.235.235 0 0 0-.235-.234h-1.03a.235.235 0 0 0-.235.234v4.008H14.21v-4.524Zm-1.127-5.919.928-.928a.188.188 0 0 0 0-.265l-1.592-1.591a.188.188 0 0 0-.265 0l-.928.928a.188.188 0 0 0 0 .265l1.592 1.591c.072.073.19.073.265 0Zm15.693-1.856-.928-.928a.188.188 0 0 0-.265 0l-1.591 1.591a.188.188 0 0 0 0 .265l.928.928a.188.188 0 0 0 .265 0l1.591-1.591a.188.188 0 0 0 0-.265ZM27.5 28.906h-15a.75.75 0 0 0-.75.75v.563c0 .103.084.187.188.187h16.124a.188.188 0 0 0 .188-.187v-.563a.75.75 0 0 0-.75-.75ZM19.344 12.22h1.312a.188.188 0 0 0 .188-.188v-2.25a.188.188 0 0 0-.188-.187h-1.312a.188.188 0 0 0-.188.187v2.25c0 .103.085.188.188.188Z"
      />
    </svg>
  )
}
export default OutputAlertChannel
