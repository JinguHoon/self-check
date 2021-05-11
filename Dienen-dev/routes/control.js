"use strict";

const output = {
    login: (req, res) => {
        console.log('login');
        res.render('login');
    },
    signup: (req, res) => {
        console.log('signup');
        res.render('signup');
    },
    main: (req, res) => {
        console.log('main');
        res.render('main');
    },
}
const infomation = {
    id : ['kadeen0553', 'tmdgns6475'],
    psword : ['tmdgns0560!', 'tmdgns0560!'],
};
const process = {
    login : (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;
        
        if(infomation.id.includes(id)) {
            const idx = infomation.id.indexOf(id);
            if(infomation.psword[idx] === psword) {
                return res.json({
                    success : true,
                });
            }
        }

        return res.json({
            success : false,
            message : "로그인에 실패하셨습니다.",
        });
    },
};
module.exports = {
    output,
    process,
};