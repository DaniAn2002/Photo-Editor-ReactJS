export const Slider = ({ min, max, value, handleChange }) => {
    return (
        <div id="slider" className="slider-container">
            <input
                type="range"
                className="slider"
                min={min}
                max={max}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}
