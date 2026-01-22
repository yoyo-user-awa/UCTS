const DatabaseMngr= {

    dataKeyName: 'uctsData',

    /**
     * 
     * @param {String} string
     * @returns {Map}
     */

    _protected_decode(string) {
        if (string==='') return new Map()
        const decoded = atob(atob(string));
        const cleaned = decodeURIComponent(decoded);
        const entries = Object.entries(JSON.parse(cleaned))
        return new Map(entries);
    },

    /** 
     * @param {Map} map
     * @returns {String}
     */
    _protected_encode(map){
        const obj = Object.fromEntries(map)
        const string = JSON.stringify(obj);
        const processed = encodeURIComponent(string);
        return btoa(btoa(processed));
    },

    addItem(k,v,exists='over') {
        
        const data = this._protected_decode(localStorage.getItem(this.dataKeyName)??'');
        
        if (data.has(k)) {
            switch(exists){
                case 'over': data.set(k,v);break;
                case 'err': throw new Error('[DatabaseMngr.addItem()] Key is exists');
                case 'ign': break;
            }
        }
        else{
            data.set(k,v);
        };

        localStorage.setItem(this.dataKeyName,this._protected_encode(data))
    },

    remItem(k,nexists='ign') {
        const data = this._protected_decode(localStorage.getItem(this.dataKeyName)??'');

        if (!data.has(k)){
            switch(nexists){
                case 'ign': break;
                case 'err': throw new Error('[DatabaseMngr.remItem()] Key is not exists');
            }
        }

        data.delete(k);

        localStorage.setItem(this.dataKeyName,this._protected_encode(data));
    },
    
    clearAll() {
        localStorage.removeItem(this.dataKeyName);
    },

    getItem(k) {
        const data = this._protected_decode(localStorage.getItem(this.dataKeyName)??'');
        return data.get(k);
    },

    /** @returns {Map} */
    getMap() {
        return this._protected_decode(localStorage.getItem(this.dataKeyName)??'');
    }

}

window.DatabaseMngr = DatabaseMngr;