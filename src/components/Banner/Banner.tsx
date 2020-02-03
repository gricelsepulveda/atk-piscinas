import React, {useState, useEffect} from "react"

import "./banner.scss"

interface Slider {
  title: string,
  text: string,
  image: string
}

export interface BannerProps {
  data: Slider[],
  active: number
}

const Banner:React.FunctionComponent<BannerProps> = (props) => {
  const [active, setActive] = useState(props.active)

  const handleActive = (index: number) => {
    setActive(index)
  }

  useEffect(() => {
  }, [active])

  const setDataToBanner = (data: Slider[]) => {
    let times = data.length / 3
    let slide_set:any[] = []
    for (let i=0; i < times; i++) {
      slide_set.push([])
      for (let x=0; x <= 2; x++) {
        slide_set[i].push({
          title: data[x+(3*i)].title,
          text: data[x+(3*i)].text,
          image: data[x+(3*i)].image
        })
      }
    }
    return slide_set
  }

  return (
    <div className="atk-banner">
      {
        setDataToBanner(props.data).map((item, index) => (
          <ul className={`atk-banner-group ${index == active ? "active" : ""}`} key={`atk-banner-group-${index}`}>
            {
              item.map((_item:Slider, _index:number) => (
                <li className="atk-banner-slide" key={`atk-banner-${_item.title}-${_index}`}>
                  <figure className="atk-banner-img" style={{ backgroundImage: `url("${_item.image}")`}}/>
                  <div className="atk-slide-description">
                    <h3>{_item.title}</h3>
                    <p>{_item.text}</p>
                  </div>
                </li>
              ))
            }
          </ul>
        ))
      }
    </div>
  )
}

export default Banner