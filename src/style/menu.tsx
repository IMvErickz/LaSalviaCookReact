import {SVGAttributes} from "react"

interface LogoProps extends React.SVGAttributes<HTMLOrSVGElement>{}

function Menu(props: LogoProps) {
  return (
    <svg
      width={494}
      height={200}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill="url(#pattern0)" d="M0 0H512V512H0z" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#image0_107_2" transform="scale(.00195)" />
        </pattern>
        <image
          id="image0_107_2"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default Menu