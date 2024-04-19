import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Alert({
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
      <path
        fill="currentColor"
        d="M4.523 18.656c0 .415.336.75.75.75h13.454a.75.75 0 0 0 .75-.75v-5.46A7.476 7.476 0 0 0 12 5.718a7.476 7.476 0 0 0-7.477 7.476zm1.688-5.46a5.79 5.79 0 0 1 11.578 0v4.523H9.47V13.71a.235.235 0 0 0-.235-.234h-1.03a.235.235 0 0 0-.235.234v4.008H6.21zM5.084 7.276l.928-.928a.19.19 0 0 0 0-.265L4.42 4.493a.19.19 0 0 0-.265 0l-.928.928a.19.19 0 0 0 0 .265L4.82 7.277c.072.073.19.073.265 0m15.693-1.856-.928-.928a.19.19 0 0 0-.265 0l-1.591 1.591a.19.19 0 0 0 0 .265l.928.928a.19.19 0 0 0 .265 0l1.591-1.591a.19.19 0 0 0 0-.265M19.5 20.906h-15a.75.75 0 0 0-.75.75v.563c0 .103.084.187.188.187h16.125a.19.19 0 0 0 .187-.187v-.563a.75.75 0 0 0-.75-.75M11.344 4.22h1.312a.19.19 0 0 0 .188-.188v-2.25a.19.19 0 0 0-.188-.187h-1.312a.19.19 0 0 0-.188.187v2.25c0 .103.085.188.188.188"
      />
    </svg>
  )
}
export default Alert
