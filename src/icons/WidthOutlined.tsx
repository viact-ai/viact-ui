import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function WidthOutlined({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M3.672 16.406V3.594a.157.157 0 0 0-.156-.156H2.344a.157.157 0 0 0-.156.156v12.812c0 .086.07.157.156.157h1.172c.086 0 .156-.07.156-.157m14.14 0V3.594a.157.157 0 0 0-.156-.156h-1.172a.157.157 0 0 0-.156.156v12.812c0 .086.07.157.156.157h1.172c.086 0 .157-.07.157-.157m-5.195-4.476c0 .117.137.183.229.111l2.492-1.969a.14.14 0 0 0 0-.22l-2.492-1.97a.141.141 0 0 0-.229.112v1.303H7.383V8.07a.142.142 0 0 0-.229-.111l-2.49 1.969a.14.14 0 0 0 0 .22l2.49 1.97a.141.141 0 0 0 .229-.112v-1.303h5.234z"
      />
    </svg>
  )
}
export default WidthOutlined
