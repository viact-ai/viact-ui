import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function CameraDetailsStatus({
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
        d="m21.824 9 .02.057.073.243.061.217.026.1.043.18c.556 2.508.15 5.134-1.137 7.357a10.26 10.26 0 0 1-5.816 4.667l-.173.052-.212.054L14.4 22a.81.81 0 0 1-.98-.667.91.91 0 0 1 .688-1.024l.247-.062q.232-.06.399-.117a8.54 8.54 0 0 0 4.67-3.833 8.54 8.54 0 0 0 .983-5.967l-.03-.134-.04-.157-.048-.179-.06-.201a.915.915 0 0 1 .54-1.115.81.81 0 0 1 1.054.457m-18.66-.463a.91.91 0 0 1 .598 1.127q-.116.39-.167.649c-.41 2.04-.06 4.16.984 5.961a8.54 8.54 0 0 0 4.676 3.835l.13.041.075.022.168.045.297.073a.914.914 0 0 1 .696 1.026.81.81 0 0 1-.923.683l-.059-.01-.247-.059-.218-.055-.191-.054-.086-.026a10.26 10.26 0 0 1-5.803-4.664A10.26 10.26 0 0 1 1.96 9.76l.033-.137.042-.161.084-.285.032-.107a.81.81 0 0 1 1.014-.534m8.858-3.394a6.857 6.857 0 1 1 0 13.714 6.857 6.857 0 0 1 0-13.714m0 1.714a5.143 5.143 0 1 0 0 10.286 5.143 5.143 0 0 0 0-10.286m0-5.143a10.26 10.26 0 0 1 6.95 2.703l.102.097.118.118.133.138.148.158a.81.81 0 0 1-.088 1.183.91.91 0 0 1-1.231-.084 9 9 0 0 0-.26-.265l-.15-.143-.068-.061a8.54 8.54 0 0 0-5.654-2.13 8.54 8.54 0 0 0-5.66 2.133l-.048.044-.109.103-.123.122-.212.22a.915.915 0 0 1-1.235.09A.81.81 0 0 1 4.504 5l.039-.046.173-.184.158-.162q.113-.113.207-.2a10.26 10.26 0 0 1 6.94-2.694"
      />
    </svg>
  )
}
export default CameraDetailsStatus