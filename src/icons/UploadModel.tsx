import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function UploadModel({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 89 89"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M46.354 11.125H16.688a5.562 5.562 0 0 0-5.563 5.563v40.791a5.562 5.562 0 0 0 5.563 5.563h55.624a5.562 5.562 0 0 0 5.563-5.563V44.5M44.5 63.042v14.833M25.959 77.875h37.083M68.603 33.375v-22.25M59.334 20.396l9.27-9.271 9.272 9.27"
      />
    </svg>
  )
}
export default UploadModel
