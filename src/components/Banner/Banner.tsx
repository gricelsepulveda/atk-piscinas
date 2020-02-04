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
  const [data, setData] = useState([[{title:"",text:"",image:""}]])

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

  useEffect(() => {
    if (data[0][0].title == "") {
      setData(setDataToBanner(props.data))
    }
  }, [active])

  console.log(active)

  return (
    <div className="atk-banner">
      {
        data[0][0].title != "" ? data.map((item, index) => 
          <ul className={`atk-banner-group ${index == active ? "active" : ""}`} key={`atk-banner-group-${index}`}>
            {
              item.map((_item:Slider, _index:number) => 
                <li className="atk-banner-slide" key={`atk-banner-${_item.title}-${_index}`}>
                  <figure className="atk-banner-img" style={{ backgroundImage: `url("${_item.image}")`}}>
                    <div className="atk-slide-description">
                      <h3>{_item.title}</h3>
                      <p>{_item.text}</p>
                    </div>
                  </figure>
                </li>
              )
            }
          </ul>
        ):null
      }
      <div className="atk-banner-buttons">
        {
          data[0][0].title != "" ? data.map((item_, index_) => 
            <button key={`atk-button-${index_}`} className={index_ == active ? "active" : ""} onClick={()=> setActive(index_)}/>
          ):null
        }
      </div>
    </div>
  )
}

export default Banner