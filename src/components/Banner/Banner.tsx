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
    console.log(times)
    let slide_set:any[] = []
    for (let i=0; i < times; i++) {
      slide_set.push([])
      for (let x=1; x <= 3; x++) {
        if (i == 0) {
          slide_set[i].push({
            title: data[(x-1)*(i+1)].title,
            text: data[(x-1)*(i+1)].text,
            image: data[(x-1)*(i+1)].image
          })
        }
        else {
          slide_set[i].push({
            title: data[x+i].title,
            text: data[x+i].text,
            image: data[x+i].image
          })
        }
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