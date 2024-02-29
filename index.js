const styleH1 = {
    'margin':'4rem 0 .5rem'
}

const h1 = React.createElement('h1',{style:styleH1},'Topics covered');


//first para
const paraStyles = {
'font-size':"16px",
'font-weight':'400',
'line-height':'28px',
'margin': '1rem 0 2rem'
}

const firstP = React.createElement('p',{style:paraStyles},'The following is a list of all the topics we cover in the MDN learning area.');


//Details Section
const headingsDetailsStyles={
    "margin-bottom": "0.5rem",
    "margin-top": "2rem"
}

const paraDetailsStyles = {
    "margin-bottom": "2rem",
    "margin-left": "1rem"
}

const detailsH1 = React.createElement('dt', {style:headingsDetailsStyles},
    React.createElement('a', { href: '#', style:{color:"#0069c2"} }, 'Getting started with the web'),
);

const detailsD1 = React.createElement('dt', {style:paraDetailsStyles},
    React.createElement('p', {}, 'Provides a practical introduction to web development for complete beginners.'),
);

const detailsH2 = React.createElement('dt', {style:headingsDetailsStyles},
    React.createElement('a', { href: '#', style:{color:"#0069c2"} }, 'HTML — Structuring the web'),
);

const detailsD2 = React.createElement('dt', {style:paraDetailsStyles},
    React.createElement('p', {}, 'HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.'),
);
const detailsH3 = React.createElement('dt', {style:headingsDetailsStyles},
    React.createElement('a', { href: '#', style:{color:"#0069c2"} }, 'CSS — Styling the web'),
);

const detailsD3 = React.createElement('dt', {style:paraDetailsStyles},
    React.createElement('p', {}, "CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS."),
);

const details = React.createElement('dl', {},[detailsH1,detailsD1,detailsH2,detailsD2,detailsH3,detailsD3])

//main Div styles
const styles = {
    'width':'550px',
    'margin':'50px auto'
}


const mainDiv = React.createElement('div',{style:styles},[h1,firstP,details]); 

ReactDOM.render(mainDiv,document.getElementById("root"));