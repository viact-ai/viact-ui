import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function PersonNearFence({
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
      <rect width={42} height={42} fill="rgba(255, 106, 61, 1)" rx={8} />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M10.036 9.753q2.99-.09 2.556 2.85-.976 1.874-2.976 1.131-1.713-1.19-.796-3.06a2.8 2.8 0 0 1 1.216-.921"
        clipRule="evenodd"
        opacity={0.937}
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M12.718 12.603q1.006.228 1.466 1.173.751 1.29.839 2.766a.68.68 0 0 1-.378.46 1.7 1.7 0 0 1-.754 0l-.922-.46a13 13 0 0 0 0 1.928 116 116 0 0 1-.796-2.347q-.578-1.105-1.55-.336a1.3 1.3 0 0 0-.252.587q.535 2.008 1.299 3.94l2.095 1.173q.439 2.256.797 4.526a651 651 0 0 1-.378 5.197q-.664 1.173-1.885.544a1.2 1.2 0 0 1-.378-.544q.004-2.434.21-4.862a60 60 0 0 0-.545-3.604 2.9 2.9 0 0 1-1.341-1.257 10.46 10.46 0 0 1-.67-5.867q.444-1.305 1.802-1.425.798.13 1.508.461-.406-.51-.838-.964.43-.48.67-1.09"
        clipRule="evenodd"
        opacity={0.942}
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M10.958 15.62q.545-.082.963.251.595 1.615 1.09 3.27 1.498.758 2.976 1.55.569.553.167 1.257a1 1 0 0 1-.838.168 216 216 0 0 1-3.562-1.886 65 65 0 0 1-1.174-3.52q-.164-.677.378-1.09"
        clipRule="evenodd"
        opacity={0.927}
      />
      <path
        fill="#fff"
        d="M32.625 16.25h-1.583v-2.125h-1.584v2.125h-7.916v-2.125h-1.584v2.125h-1.583a.84.84 0 0 0-.56.207.67.67 0 0 0-.232.501v4.959c0 .188.084.368.232.5.149.133.35.208.56.208h1.583v4.25h1.584v-4.25h7.916v4.25h1.584v-4.25h1.583a.84.84 0 0 0 .56-.207.67.67 0 0 0 .232-.501v-4.959a.67.67 0 0 0-.232-.5.84.84 0 0 0-.56-.208m-13.126 4.958 2.262-3.541h1.823l-2.262 3.541zm6.22-3.541h1.823l-2.261 3.541h-1.823zm3.959 0H31.5l-2.262 3.541h-1.823z"
      />
    </svg>
  )
}
export default PersonNearFence
