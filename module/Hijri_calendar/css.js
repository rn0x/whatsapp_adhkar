import fs from "fs-extra";
import path from 'path';

export default function css() {

    let __dirname = path.resolve();
    let Vazirmatn_Regular = fs.readFileSync(`${__dirname}/files/font/Vazirmatn-Regular.ttf`).toString('base64');
    let code = `
    
    @font-face {
        font-family: "Vazirmatn_Regular";
        src: url('data:application/x-font-ttf;charset=utf-8;base64, ${Vazirmatn_Regular}') format("truetype");
    }
    
    body,
    html {
        margin: 0px 0px 0px 0px;
        width: 100%;
        height: 100%;
        background-color: #f0ecec;
        background-position: center;
        background-size: cover;
        direction: rtl;
        font-family: "Vazirmatn_Regular";
    }
    
    #Calendar_top {
        font-size: 28px;
        font-weight: bold;
        text-align: center;
        color: #679767;
    }
    
    #date {
        display: flex;
        flex-wrap: wrap;
        background-color: #ffffff9c;
        justify-content: space-around;
        align-items: baseline;
        border-radius: 18px;
        box-shadow: 5px 15px 15px 0px #0000001c;
        margin-left: 25px;
        margin-right: 25px;
        padding: 5px;
    }
    
    #today {
    
        font-size: 35px;
        font-weight: 800;
        margin: auto 1em auto 0;
        color: #679767;
    }
    
    #data_block {
        text-align: center;
    }
    
    #data_block p {
        border-radius: 10px;
        background-color: #679767;
        color: white;
        padding: 4px;
        margin: 5px 0 5px 0;
        font-weight: bold;
    }
    
    #d3a {
        display: block;
        background-color: #ffffff9c;
        border-radius: 18px;
        box-shadow: 5px 15px 15px 0px #0000001c;
        margin-left: 25px;
        margin-right: 25px;
        margin-top: 20px;
        text-align: center;
        padding: 5px;
    }
    
    #d3a_top {
        font-size: 20px;
        font-weight: bold;
        color: #679767;
    }
    
    #d3a_text{
        padding: 17px;
        color: #292929;
    }
    
    #bottom {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: baseline;
        background-color: #c9c9c9;
        margin-top: 50px;
        margin-bottom: 0px;
        padding: 5px;
        font-size: 11px;
        color: #292929;
        direction: ltr;
    }
    
    #logo {
        width: 20px;
        height: 20px;
        margin: auto 0 auto 0;
    }
    
    #telegram{
        margin: auto 0 auto 0;
    }`


    return code

}
