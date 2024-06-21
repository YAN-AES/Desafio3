import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M21 9.333V3.5h2.333v7H21m0 4.667h2.333v-2.334H21M9.333 10.5c3.115 0 9.334 1.563 9.334 4.667v3.5H0v-3.5C0 12.063 6.218 10.5 9.333 10.5Zm0-10.5a4.667 4.667 0 1 1 0 9.334 4.667 4.667 0 0 1 0-9.334Zm0 12.717c-3.465 0-7.116 1.703-7.116 2.45v1.283H16.45v-1.283c0-.747-3.652-2.45-7.117-2.45Zm0-10.5a2.45 2.45 0 1 0 0 4.9 2.45 2.45 0 0 0 0-4.9Z"
    />
  </svg>
)
export default SvgComponent
