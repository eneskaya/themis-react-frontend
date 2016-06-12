import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "backgroundColor": "rgb(240, 240, 240)"
    },
    "experiment-box inner": {
        "border": "1px solid #2e2e2e",
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4
    },
    "experiment-box": {
        "marginBottom": 10
    },
    "row logo": {
        "float": "left",
        "fontFamily": "'Josefin Slab', serif",
        "fontSize": 36
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
        "paddingBottom": 22,
        "paddingLeft": 0,
        "borderBottom": "1px solid #ececec"
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
        "fontSize": 21,
        "lineHeight": 28,
        "textDecoration": "none",
        "whiteSpace": "nowrap"
    },
    "article-title title-link:hover": {
        "color": "#1e90ff"
    },
    "title-meta": {
        "marginBottom": 1.8,
        "fontFamily": "LyonText,Georgia,serif",
        "color": "#7a7a7a"
    },
    "host": {
        "paddingLeft": 0
    },
    "host-link": {
        "color": "#7a7a7a",
        "textDecoration": "none",
        "overflow": "hidden",
        "maxWidth": "100%",
        "whiteSpace": "nowrap",
        "textOverflow": "ellipsis",
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
        "fontFamily": "LyonText,Georgia,serif",
        "textOverflow": "ellipsis",
        "color": "#404040",
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0
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
    },
    "pager-links": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "pager-links li": {
        "display": "inline",
        "color": "#7a7a7a"
    },
    "pager-links li:hover": {
        "color": "#1e90ff"
    },
    "pager-prev": {
        "float": "left"
    },
    "pager-next": {
        "float": "right"
    },
    "container": {
        "width": 960
    },
    "hr": {
        "borderTop": "1px dotted #2e2e2e"
    },
    "article h2": {
        "fontFamily": "LyonText,Georgia,serif"
    },
    "article p": {
        "fontFamily": "Georgia, serif"
    },
    "experiments-table": {
        "border": "1px solid #2e2e2e",
        "marginTop": 20
    }
});