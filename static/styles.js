import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body row": {
        "paddingTop": 2,
        "paddingLeft": "3%"
    },
    "row logo": {
        "float": "left",
        "paddingTop": 2,
        "marginRight": "5%",
        "fontFamily": "'Josefin Slab', serif"
    },
    "searchbar": {
        "paddingLeft": 0
    },
    "searchbar custom-search-input": {
        "borderBottom": "1px solid #ececec"
    },
    "searchbar btn": {
        "background": "#ffffff"
    },
    "searchbar btn:active": {
        "border": "none"
    },
    "searchbar input-lg": {
        "border": "none"
    },
    "article": {
        "paddingTop": 22,
        "paddingRight": 0,
        "paddingBottom": 12,
        "paddingLeft": 0,
        "borderBottom": "1px solid #ececec",
        "marginLeft": "21.5%"
    },
    "article-block": {
        "paddingLeft": 0
    },
    "article-title": {
        "fontFamily": "LyonText,Georgia,serif"
    },
    "article-title title-link": {
        "color": "#111111",
        "display": "block",
        "textOverflow": "ellipsis",
        "overflow": "hidden",
        "maxWidth": "calc(100% - (50px + 15px))",
        "fontWeight": 400,
        "fontSize": 1.3125,
        "lineHeight": 1.875,
        "textDecoration": "none",
        "whiteSpace": "nowrap"
    },
    "article-title title-link:hover": {
        "color": "#1e90ff"
    },
    "title-meta": {
        "marginBottom": 0.1,
        "fontFamily": "LyonText,Georgia,serif",
        "color": "#7a7a7a"
    },
    "host":{
        "padding-left": "0"
    },  
    "host-link": {
        "color": "#7a7a7a",
        "textDecoration": "none",
        "overflow": "hidden",
        "max-width": "100%",
        "white-space": "nowrap",
        "text-overflow": "ellipsis",
        "display": "block"
    },
    "host-link:hover": {
        "color": "#1e90ff",
        "textDecoration": "none"
    },
    "article-preview": {
        "paddingBottom": 10,
        "fontSize": 1,
        "lineHeight": 1.5,
        "maxWidth": 36.25,
        "fontFamily": "LyonText,Georgia,serif"
    },
    "item-date-footer": {
        "color": "#7a7a7a",
        "fontSize": 0.8
    },
    "article-image": {
        "position": "absolute",
        "top": 25,
        "right": "15%",
        "width": 150,
        "height": 120,
        "backgroundSize": "cover,auto",
        "backgroundPosition": "50% 50%,50% 50%",
        "opacity": 0.75,
        "border": "1px solid",
        "WebkitTransition": "opacity 250ms ease 0s",
        "MozTransition": "opacity 250ms ease 0s",
        "transition": "opacity 250ms ease 0s"
    },
    "article-image image": {
        "height": 120,
        "width": 150
    }
});
