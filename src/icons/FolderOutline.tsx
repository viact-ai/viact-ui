import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function FolderOutline({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 22 18"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.258.727Q5.633.715 9.008.75q.737.135 1.219.703l9.468.047q1.395.363 1.758 1.758.046 6.094 0 12.187-.363 1.395-1.758 1.758-8.718.046-17.437 0Q.863 16.84.5 15.445a893 893 0 0 1 0-12.937Q.876 1.113 2.258.727m.469 1.5q2.906-.012 5.812.023.413.004.633.352Q9.64 3.63 10.25 4.57q.502.492 1.195.633l7.782.047q.644.082.726.727.046 4.5 0 9-.082.644-.726.726-8.25.047-16.5 0-.645-.082-.727-.726-.046-6 0-12 .094-.645.727-.75m8.39.75q4.054-.012 8.11.023.731.11.703.82a1.3 1.3 0 0 0-.235-.07l-7.78-.047q-.631-.102-.798-.726"
        clipRule="evenodd"
        opacity={0.993}
      />
    </svg>
  )
}
export default FolderOutline
