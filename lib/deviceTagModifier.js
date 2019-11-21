module.exports = class {
    constructor (newTags = [],existingTags = []){
        this.newTags = newTags;
        this.existingTags = existingTags;
    }

    addTag (data){
        if (Array.isArray(data)) {
            const tempArray = [...this.newTags, ...data];
            this.newTags = this.deDupe(tempArray); 
        } else if (typeof(data) == 'string') {
            this.newTags.push(data.replace(new RegExp(/\s/g),'',));
            this.newTags = this.deDupe(this.newTags);
        } else if (typeof(data) == 'number') {
            this.newTags.push(data.toString());
            this.newTags = this.deDupe(this.newTags);
        } else {
            const errorMessage = `Inccorect type of ${typeof(data)}. Valid types: Array, String, Number`;
            throw new Error(errorMessage);         
        }
    }
    deleteTag (data){
        if (Array.isArray(data)) {
            this.newTags = this.deDupe(this.newTags.filter((f) => !data.includes(f)));
        } else if (typeof(data) == 'string') {
            this.newTags = this.deDupe(this.newTags.filter((f) => f !== data));
        } else if (typeof(data) == 'number') {
            this.newTags = this.deDupe(this.newTags.filter((f) => f !== data.toString()));
        } else {
            const errorMessage = `Inccorect type of ${typeof(data)}. Valid types: Array, String, Number`;
            throw new Error(errorMessage);         
        }
    }
    get tags (){
        return this.newTags.join(' ');
    }
    get tagsToUpperCase (){
        return this.newTags.map((d) => d.toUpperCase()).join(' ');
    }
    get tagsToLowerCase (){
        return this.newTags.map((d) => d.toLowerCase()).join(' ');
    }

    deDupe (data){
        if (Array.isArray(data) || typeof(data) == 'string' || typeof(data) == 'number') {
            return Array.from(new Set(data));
        } else {
            const errorMessage = `Inccorect type of ${typeof(data)}. Valid types: Array, String, Number`;
            throw new Error(errorMessage);         
        }
        
    }

}