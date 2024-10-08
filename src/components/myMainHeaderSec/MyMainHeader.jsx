import './myMainHeader.css'
// eslint-disable-next-line react/prop-types
export default function MyMainHeader({subTitle, tilte, addClass}) {
    return (
        <div className={`mainHeaderSec__handler ${addClass}`}>
            <div className={`subTitle_item ${addClass}`}>
                <p>
                    {subTitle}
                </p>
            </div>
            <h1>
                {tilte}
            </h1>
        </div>
    )
}
