import React, { useRef, MutableRefObject } from "react"
import { Colors, Size } from "../../utils/commonProps"

export interface ButtonProps {
  disabled: boolean,
  size: Size,
  color: Colors,
  width: number,
  value: string,
  name: string,
  kind: "default" | "rounded-icon" | "square-icon",
  active: boolean,
  icon: "string",
  onclick: (element: React.MutableRefObject<null | any>) => void
  onmouseover: (element: React.MutableRefObject<null | any>) => void,
  onmouseout: (element: React.MutableRefObject<null | any>) => void
}

const Button:React.FunctionComponent<ButtonProps> = (props) => {

  const buttonElement = useRef(null)

  const handlerEvent = (event_name:string) => {
    switch (event_name) {
      case "onclick":
        if (props.onclick != undefined) {
          props.onclick(buttonElement)
        }
        break
      case "onmouseover":
        if (props.onmouseover != undefined) {
          props.onmouseover(buttonElement)
        }
        break
      case "onmouseout":
        if (props.onmouseout != undefined) {
          props.onmouseout(buttonElement)
        }
        break
    }
  }

  return (
    <div className={`atk-button
      ${props.disabled ? "disabled": ""}
      ${props.size} ${props.kind}
      ${props.color} ${props.active ? "active" : ""}`}
      style={{width: `${props.width ? props.width : "auto"}`}}
    >
      <button
        name={props.name}
        ref={buttonElement}
        type="button"
        onClick={() => handlerEvent("onclick")}
        value={props.value ? props.value : undefined}
        onMouseOver={() => handlerEvent("onmouseover") } 
        onMouseOut={() => handlerEvent("onmouseout")}
      >
        {
          props.icon != undefined ? (
            <i className={`gc-font ${props.icon}`}></i>
          )
          : null
        }
        {props.kind != "icon" ? props.value : ""}
      </button>
    </div>
  )
}

export default Button