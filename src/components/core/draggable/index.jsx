import './index.scss'
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';    

const Draggable = ({bgColor, isLight}) => {
    return (
        <CustomCursor
            customClass={isLight ? 'drag-light' : 'drag-dark'}
            dimensions={110}
            fill={bgColor}
            opacity={1}
        />
    )
}

export default Draggable
