const ArrowDownIcon = ({width, height, fill}) => {
    return (
        <svg width={width || '6'} height={height || '4'} viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4L0 0H6L3 4Z" fill={fill || '#03030F'}/>
        </svg>
    )
}

const ArrowUpIcon = ({width, height, fill}) => {
    return (
        <svg width={width || '6'} height={height || '4'} viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 0L0 4H6L3 0Z" fill={fill || '#03030F'}/>
        </svg>
    )
}

const ArrowTopIcon = ({width, height, fill}) => {
    return (
        <svg width={width || '10'} height={height || '11'} viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.49985 5.25791L5.25721 1.01526M5.25721 1.01526L1.01457 5.2579M5.25721 1.01526L5.25721 10.788" stroke={fill || '#FFFFFF'} strokeWidth="0.8"/>
        </svg>
    )
}

const ArrowBottomIcon = ({width, height, fill}) => {
    return (
        <svg  width={width || '13'} height={height || '15'} viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.00024 7.65588L6.6571 13.3127M6.6571 13.3127L12.3139 7.65588M6.6571 13.3127L6.65709 0.28248" stroke={fill || '#FFFFFF'} strokeWidth="1.5"/>
        </svg>
    )
}

const SliderRightIcon = ({stroke}) => {
    return (
        <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.570312 1.5L7.64138 8.57107L0.570314 15.6421" stroke={stroke || 'white'} strokeWidth="1.5"/>
        </svg>
    )
}

const SliderLeftIcon = ({stroke}) => {
    return (
        <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.42969 1.5L1.35862 8.57107L8.42969 15.6421" stroke={stroke || 'white'} strokeWidth="1.5"/>
        </svg>
    )
}

const SliderDotIcon = ({stroke}) => {
    return (
        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="3" r="3" fill={stroke || 'white'}/>
        </svg>
    )
}

const ArrowRightIcon = ({width, height, fill}) => {
    return (
        <svg width={width || '15'} height={height || '13'} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.65564 11.9998L13.3125 6.3429M13.3125 6.3429L7.65564 0.686051M13.3125 6.3429L0.282236 6.34291" stroke={fill || '#03030F'} strokeWidth="1.5"/>
        </svg>
    )
}

const PlusIcon = ({width, height, fill}) => {
    return (
        <svg width={width || '17'} height={height || '16'} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.799805 8.5H16.3154V7.375H0.799805V8.5ZM7.9873 15.6875H9.12793V0.1875H7.9873V15.6875Z" fill={fill || '#03030F'}/>
        </svg>
    )
}

const MinusIcon = ({width, height, fill}) => {
    return (
        <svg width={width || '17'} height={height || '2'} viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.12793 1.5H10.3154V0.375H0.12793V1.5Z" fill={fill || '#FFFFFF'}/>
        </svg>
    )
}

const CheckIcon = ({width, height, fill}) => {
    return (
        <svg width={width || '10'} height={height || '7'} viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4L4.00056 6L8 2" stroke={fill || '#03030F'} strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round"/>
        </svg>
    )
}

const CloseIcon = ({width, height, fill}) => {
    return (
        <svg width={width || '20'} height={height || '19'} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 17.7218L18.7052 1" stroke={fill || '#03030F'} strokeWidth="1.5"/>
            <path d="M18.7052 17.7227L1 1.00088" stroke="#03030F" strokeWidth="1.5"/>
        </svg>
    )
}

export {
    ArrowDownIcon,
    ArrowUpIcon,
    ArrowTopIcon,
    ArrowBottomIcon,
    ArrowRightIcon,
    SliderRightIcon,
    SliderLeftIcon,
    SliderDotIcon,
    PlusIcon,
    MinusIcon,
    CheckIcon,
    CloseIcon
}
