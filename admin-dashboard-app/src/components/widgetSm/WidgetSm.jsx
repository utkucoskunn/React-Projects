import "./widgetSm.css";

import VisibilityIcon from '@mui/icons-material/Visibility';

const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Donald Trump</span>
                        <span className="widgetSmUserTitle">45th president of the United States</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Marc Zuckerberg</span>
                        <span className="widgetSmUserTitle">Co--founding the social Facebook</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Donald Trump</span>
                        <span className="widgetSmUserTitle">45th president of the United States</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Donald Trump</span>
                        <span className="widgetSmUserTitle">45th president of the United States</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Donald Trump</span>
                        <span className="widgetSmUserTitle">45th president of the United States</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
export default WidgetSm;


