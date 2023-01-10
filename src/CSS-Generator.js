function generateCSS () {
    return `* {
        background-color: transparent;
        margin: 0px;
    }
    
    header {
        background-color: rgb(236 71 86);
        color: white;
        text-align: center;
        font-size: 50px;
        line-height: 275%;
    }
    
    main {
        background-color: white; 
    }
    
    #orgBox{
        margin: 50px 150px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    
    .empCard {
        /* border: black 2px solid; */
        margin: 15px;
        border-radius: 10px;
        box-shadow: 4px 4px 7px black;
        background-color: rgb(246 247 249);
        width: 300px;
    
    }
    
    .name-role {
        background-color: rgb(0 119 247);
        border-radius: 10px 10px 0px 0px;
        color: white;
        font-size: 30px;
        padding: 7px;
    }
    
    .empCardBody {
        background-color: rgb(246 247 249);
        border-radius: 0px 0px 10px 10px;
        padding-bottom: 1px;
    }
    
    .empCardContent {
        margin: 20px 10px;
        background-color: white;
    }
    
    .empDetails {
        padding: 5px;
        margin: 3px;
        border: 2px solid lightgrey;
    }
    
    footer {
        background-color: rgb(236 71 86);
        color: white;
        text-align: center;
        line-height: 200%;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
    }`
};

module.exports = generateCSS;
