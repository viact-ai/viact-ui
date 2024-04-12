import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function AlertFill({
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
        d="M12 5.719a7.477 7.477 0 0 1 7.477 7.476v5.461a.75.75 0 0 1-.75.75H5.274a.75.75 0 0 1-.75-.75v-5.46A7.477 7.477 0 0 1 12 5.718Zm-.656-4.125h1.313a.188.188 0 0 1 .187.187v2.25a.188.188 0 0 1-.187.188h-1.313a.188.188 0 0 1-.187-.188v-2.25a.187.187 0 0 1 .187-.187Zm-7.19 2.898a.188.188 0 0 1 .266 0l1.59 1.591a.187.187 0 0 1 0 .265l-.927.928a.187.187 0 0 1-.265 0l-1.591-1.59a.187.187 0 0 1 0-.266l.928-.928Zm15.694 0 .928.928a.187.187 0 0 1 0 .265l-1.59 1.591a.187.187 0 0 1-.266 0l-.928-.928a.189.189 0 0 1-.04-.204.189.189 0 0 1 .04-.061l1.591-1.591a.188.188 0 0 1 .265 0ZM4.5 20.906h15a.75.75 0 0 1 .75.75v.563a.187.187 0 0 1-.187.187H3.938a.187.187 0 0 1-.188-.187v-.563a.75.75 0 0 1 .75-.75Zm3.47-7.43v5.93h1.5v-5.93h-1.5Z"
      />
    </svg>
  )
}
export default AlertFill
