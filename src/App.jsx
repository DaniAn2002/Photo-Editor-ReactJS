import { useState } from "react"
import { SideBarItem } from "./SideBarItem"
import { Slider } from "./Slider"

const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  }
]

function App() {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const selectedOption = options[selectedOptionIndex]

  const handleSliderChange = ({ target }) => {
    setOptions(prevOptions => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option
        return { ...option, value: target.value }

      })
    })
  }

  const getImageStyle = () => {
    const filters = options.map(options => {
      return `${options.property}(${options.value}${options.unit})`
    })

    return { filter: filters.join(' ') }
  }


  return (
    <>
      <div className="container">

        <div className="main-image" style={getImageStyle()} />
        <div className="sidebar">
          {options.map((options, index) => {
            return (
              <SideBarItem
                key={index}
                name={options.name}
                active={index === selectedOptionIndex}
                handleClick={() => setSelectedOptionIndex(index)}
              />)
          })}
        </div>
        <Slider
          min={selectedOption.range.min}
          max={selectedOption.range.max}
          value={selectedOption.value}
          handleChange={handleSliderChange}

        />

      </div>
    </>
  )
}

export default App
