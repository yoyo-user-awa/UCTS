function validCode(c){
    const SALT_POOL = [
            'XKJ', 'RTL', 'QPD', 'VHN', 'MGB',
            'ZYX', 'WVU', 'TSR', 'QPO', 'NML',
            'KJI', 'HGF', 'EDC', 'BAZ', 'YXV',
            'WUT', 'SQR', 'PON', 'MLK', 'JIH',
            'GFE', 'DCB', 'AZY', 'XWV', 'UTS',
            'RQP', 'ONM', 'LKJ', 'IHG', 'FED'
    ];
    let parts = c.split('-');
    if (parts[0].length == 6 && parts[1].length == 10 && parts[2].length == 3){
        let type = decodeAA26(parts[0]);
        let coin = decodeAA26(parts[1]);
        let salt = parts[2];
        if (!['VIP','NOR','PRI'].includes(type)) return {suc: false};
        if (!SALT_POOL.includes(salt)) return {suc: false};
        if (!/^-?\d+$/.test(coin)) return {suc: false};
        return {
            suc: true,
            t: type,
            c: Number(coin),
        }

    }else{
        return {suc: false};
    }
}