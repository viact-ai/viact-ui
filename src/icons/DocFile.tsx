import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function DocFile({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 36 37"
      aria-labelledby={titleId}
      {...props}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fillRule="evenodd" clipPath="url(#doc-file_svg__a)" clipRule="evenodd">
        <path
          fill="#2B518E"
          d="M8.332.465H21.2v10.547h10.265q.018 10.687-.034 21.375-.6 3.29-3.832 4.078H8.332q-2.967-.7-3.762-3.656a743 743 0 0 1-.105-14.344A743 743 0 0 1 4.57 4.12Q5.365 1.164 8.332.465"
          opacity={0.997}
        />
        <path
          fill="#B4C3F5"
          d="M21.2.465h.14a367 367 0 0 0 5.906 6.187q.24.415.633.703.527.457.984.985.487.662 1.125 1.195.246.176.422.422.416.557.914 1.055H21.2z"
        />
        <path
          fill="#CADDF5"
          d="M27.246 6.652q.395.289.633.703a2.3 2.3 0 0 1-.633-.703"
          opacity={0.471}
        />
        <path
          fill="#DAE7F8"
          d="M28.863 8.34q.639.533 1.125 1.195a6.8 6.8 0 0 1-1.125-1.195"
          opacity={0.498}
        />
        <path
          fill="#D8E6F7"
          d="M30.41 9.957q.563.492 1.055 1.055h-.14a10 10 0 0 1-.915-1.055"
          opacity={0.545}
        />
        <path
          fill="#FEFEFE"
          d="M12.902 17.622q4.993-.018 9.985.035.922.352.457 1.23a.8.8 0 0 1-.317.246q-5.062.07-10.125 0-.978-.755 0-1.511M12.902 20.786q4.993-.018 9.985.035.922.352.457 1.23a.8.8 0 0 1-.317.246q-5.062.07-10.125 0-.978-.755 0-1.511M12.902 23.95q4.993-.018 9.985.035.922.353.457 1.23a.8.8 0 0 1-.317.246q-5.062.07-10.125 0-.978-.755 0-1.511"
        />
        <path
          fill="#FDFEFE"
          d="M12.902 27.114q3.41-.018 6.82.035.923.352.458 1.23a.8.8 0 0 1-.317.246q-3.48.07-6.96 0-.98-.755 0-1.511"
        />
      </g>
      <defs>
        <clipPath id="doc-file_svg__a">
          <path fill="#fff" d="M0 .5h36v36H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default DocFile
