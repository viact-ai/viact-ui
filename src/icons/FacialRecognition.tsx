import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function FacialRecognition({
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
      <rect width={42} height={42} fill="#9B51E0" rx={8} />
      <path
        fill="#fff"
        d="M30.393 26.859c-.389-.383-5.097-2.204-5.95-2.547-.85-.338-1.19-1.273-1.19-1.273s-.382.212-.382-.382c0-.595.382.382.765-1.911 0 0 1.061-.298.85-2.76h-.255s.638-2.633 0-3.524c-.64-.89-.89-1.485-2.295-1.91-1.402-.426-.892-.341-1.91-.298-1.02.043-1.87.595-1.87.891 0 0-.637.043-.89.298-.256.255-.68 1.443-.68 1.74 0 .297.212 2.295.424 2.718l-.252.082c-.213 2.463.849 2.762.849 2.762.382 2.293.765 1.316.765 1.91 0 .595-.383.383-.383.383s-.34.935-1.189 1.273c-.849.34-5.562 2.165-5.945 2.547-.382.39-.34 2.172-.34 2.172h20.216s.047-1.783-.34-2.173l.002.002Zm-4.752 1.687H22.22v-.937h3.421v.937Z"
      />
    </svg>
  )
}
export default FacialRecognition
