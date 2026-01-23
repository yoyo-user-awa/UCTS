function validCode(c){
    const pool = DatabaseMngr.getItem('pool') ?? [];
    let parts = c.split('-');
    if (parts.length!=4) return {suc: false}
    let SALT_POOL = ['CFZ','QHKAI','GPY','XQIEH','IOI','VBIEK','ITF','HVEQV','NMG','FVHKM','VBC','ZHWGA','KNU','BQLYY','PKY','KOLSO','HZR','KJUJE','PQG','BFWNV','MRS','NFJLE','GUH','UHLFF','ZCX','ROKJK','ABH','CUCAF','QLF','LJQEH','IHG','NXHHR','ELW','SJLYV','JNY','AORTM','KII','FZGKQ','OJQ','ZBAEJ','KQI','EFFCJ','JLL','BPJAV','QXR','NOCEV','YXR','XMZMW','KYA','LEGEF','RDO','QVKMU','MJD','XRZJS','YNH','PWVAE','SXA','ZTJBY','UWF','YKECL','JAO','WIDWI','QXV','SCVCQ','JVX','ACLSG','BRV','LHPKB','JQF','VIUPO','IIQ','WLRTN','UXA','QFSWE','IZT','EMEFX','YNG','KPZEI','NDA','PUEBG','XUA','RHFXW','UOV','GCGND','XFX','JRHJD','MKM','ASVYW','FMQ','KJGYU','SBJ','PHPOP','NJR','HNBMZ','WSO','SQTDS','YVM','MOSHB','HHA','MTBPK']
    if (parts[0].length == 6 && parts[1].length == 10 && parts[2].length == 3 && ((parts[3].length==3)||(parts[3].length==5))){
        let type = decodeAA26(parts[0]);
        let coin = decodeAA26(parts[1]);
        let salt = parts[2];
        let salt2 = parts[3];
        if (!['VIP','NOR','PRI'].includes(type)) return {suc: false};
        if (pool.includes(salt)) return {suc: false};
        if (!/^-?\d+$/.test(coin)) return {suc: false};
        if (!SALT_POOL.includes(salt2)) return {suc: false};
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