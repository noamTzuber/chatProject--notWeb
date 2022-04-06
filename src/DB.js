const users = [{
    name: 'itay',
    nickName: 'ity',
    password: 'itay1234',
    chats: [
        {contact:'noam',text:[{txt: 'hye', isIncoming:0}, {txt: 'bye' ,isIncoming:1}]},
        {contact:'dvir',text:[{txt: 'you', isIncoming:0}, {txt: 'me' ,isIncoming:1}]}
    ],
    lastMessage:'bye',
    lastTime:'9:00'
},
    {
        name: 'noam',
        nickName: 'nono',
        password: 'nono1234',
        chats: [
            {contact:'itay',text:[{txt: 'hye', isIncoming:0}, {txt: 'bye' ,isIncoming:1}]},
            {contact:'dvir',text:[{txt: 'you', isIncoming:0}, {txt: 'me' ,isIncoming:1}]}
        ],
        lastMessage:'bye',
        lastTime:'9:00'
    }]
export default users