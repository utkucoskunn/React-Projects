import "./watch.scss"
import {ArrowBackIosNewOutlined} from "@mui/icons-material";


const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackIosNewOutlined/>
                Home
            </div>
            <video
        className="video"
        autoPlay

        controls

        src="video.mp4"
      />
        </div>
    )
}

export default Watch;

