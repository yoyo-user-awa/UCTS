function validCode(c){
    const pool = DatabaseMngr.getItem('pool') ?? [];
    let parts = c.split('-');
    if (parts[0].length == 6 && parts[1].length == 10 && parts[2].length == 3){
        let type = decodeAA26(parts[0]);
        let coin = decodeAA26(parts[1]);
        let salt = parts[2];
        if (!['VIP','NOR','PRI'].includes(type)) return {suc: false};
        if (pool.includes(salt)) return {suc: false};
        if (!/^-?\d+$/.test(coin)) return {suc: false};
        DatabaseMngr.addItem('pool',pool.concat([salt,]))
        return {
            suc: true,
            t: type,
            c: Number(coin),
        }

    }else{
        return {suc: false};
    }
}