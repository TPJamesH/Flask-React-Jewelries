//Destructured directly from function parameter
const HeadlessCard = ({ header, body, width, height, interact, extraStyle, styleClass, titleClass, bodyClass}) => {

    if (width) {
        styleClass += ` ${width}`
    }
    if (height) {
        styleClass += ` ${height}`
    }

    if (extraStyle) {
        styleClass += ` ${extraStyle}`
    }
    return (
        <div className={styleClass}>
            <div>
                <h6 className={titleClass}>{header} {interact}</h6>
            </div>
            <div className={bodyClass} >{body}</div>
        </div>
    )
}

export default HeadlessCard