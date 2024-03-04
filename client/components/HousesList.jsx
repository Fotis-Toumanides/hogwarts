import React from 'react'
import './HousesList.css';


export default function HousesList({ houses }) {

    function isColorNameSupported(colorName) {
        let checkColor = colorName.toLowerCase()

        const allColors = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"];
        if (allColors.includes(checkColor)) {

            return true
        } else {
            return false
        }

    }

    return (

        <div>

            <ul >
                {houses.map(house => {
                    // Checking if houseColors are recognized by browsers.
                    let houseColours = house.houseColours.split(" and ")
                    let colorOne, colorTwo

                    if (isColorNameSupported(houseColours[0]) && isColorNameSupported(houseColours[1])) {
                        colorOne = houseColours[0].toLowerCase()
                        colorTwo = houseColours[1].toLowerCase()
                    } else {
                        colorOne = "white"
                        colorTwo = "black"
                    }

                    return (
                        <li key={house.id} >
                            <div className='outter-div'>
                                <div className='w-2/3 sm:w-full rounded shadow-lg m-4'>
                                    <div>
                                        <div className='d-flex justify-content-between p-4'>
                                            <h3 className='house-name'>{house.name}</h3>
                                            <h5>{house.animal}</h5>

                                        </div>
                                        <div className="colorDiv" style={{ background: `linear-gradient(90deg, ${colorOne} 0%, ${colorTwo} 100%)` }} ></div>
                                    </div>

                                    <h5 className='p-4'>Founder: <strong>{house.founder}</strong></h5>
                                </div>
                            </div>
                        </li>)
                })}
            </ul>
        </div >
    )
}