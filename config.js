// config.js
// const CONFIG = {
//   GAS_URL: 'https://script.google.com/macros/s/AKfycby1prRB6Vpn7nfauAWXYNut9ESXgqloJpdua1WaE0DA4i21gV3yaDRaNiGSqxo_-SUNRg/exec',
//   LIFF_ID: '2007514355-N7ZqG4BK'
// };
// config.js
const CONFIG = {
    LIFF_ID: '2007514355-N7ZqG4BK', // **สำคัญมาก: ใส่ LIFF ID ของคุณที่นี่ (อันเดิมที่เคยใช้)**

    // URL ของ Google Cloud Functions ที่คุณ Deploy ได้รับมา
    CLOUD_FUNCTION_GET_URL: 'https://us-central1-crm-3rn.cloudfunctions.net/apiGet',
    CLOUD_FUNCTION_POST_URL: 'https://us-central1-crm-3rn.cloudfunctions.net/apiPost',
};

// ถ้าใช้ ES Module ให้เพิ่ม export:
// export default CONFIG;
