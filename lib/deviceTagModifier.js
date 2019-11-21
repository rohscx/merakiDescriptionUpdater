module.exports = class {
    constructor (newTags = [],existingTags = []){
        this.existingTags = typeof(existingTags) == 'string' ? existingTags.split(' ').filter((f) => f.length > 0) : existingTags;
        this.newTags = [...newTags,...this.existingTags];
        
    }
    /* 
        Tags are stored and added in the same case as they are when instanciated by the Class
        Tags are stored as the same primitive type as they are when instanciated by the Class
        Tags are added as the same primitive type string
    */
    addTag (data){
        if (Array.isArray(data)) {
            const tempArray = [...this.newTags, ...data];
            this.newTags = this._deDupe(tempArray); 
        } else if (typeof(data) == 'string') {
            this.newTags.push(data.replace(new RegExp(/\s/g),'',));
            this.newTags = this._deDupe(this.newTags);
        } else if (typeof(data) == 'number') {
            this.newTags.push(data.toString());
            this.newTags = this._deDupe(this.newTags);
        } else {
            const errorMessage = `Inccorect type of ${typeof(data)}. Valid types: Array, String, Number`;
            throw new Error(errorMessage);         
        }
    }
    deleteTag (data){
        if (Array.isArray(data)) {
            this.newTags = this._deDupe(this.newTags.filter((f) => !data.includes(f)));
        } else if (typeof(data) == 'string') {
            this.newTags = this._deDupe(this.newTags.filter((f) => f !== data));
        } else if (typeof(data) == 'number') {
            this.newTags = this._deDupe(this.newTags.filter((f) => f !== data.toString()));
        } else {
            const errorMessage = `Inccorect type of ${typeof(data)}. Valid types: Array, String, Number`;
            throw new Error(errorMessage);         
        }
    }
    get tags (){
        return this.newTags.join(' ');
    }
    get tagsToUpperCase (){
        return this.newTags.map((d) => d.toString().toUpperCase()).join(' ');
    }
    get tagsToLowerCase (){
        return this.newTags.map((d) => d.toString().toLowerCase()).join(' ');
    }
    get tagsArray (){
        return this.newTags;
    }
    get tagsArrayToUpperCase (){
        return this.newTags.map((d) => d.toString().toUpperCase());
    }
    get tagsArrayToLowerCase (){
        return this.newTags.map((d) => d.toString().toLowerCase())
    }
    _deDupe (data){
        if (Array.isArray(data) || typeof(data) == 'string' || typeof(data) == 'number') {
            return Array.from(new Set(data));
        } else {
            const errorMessage = `Inccorect type of ${typeof(data)}. Valid types: Array, String, Number`;
            throw new Error(errorMessage);         
        }
        
    }

}