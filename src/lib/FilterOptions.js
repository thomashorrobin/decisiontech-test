class FilterOptions {
    constructor(broadband, tv, mobile, speed) {
        this.broadband = broadband ? broadband : false;
        this.tv = tv ? tv : false;
        this.mobile = mobile ? mobile : false;
        this.speed = speed ? speed : -1;
    }
    nothingFiltered(){
        if (!this.broadband && !this.tv && !this.mobile && this.speedNotFiltered()) {
            return true;
        } else {
            return false;
        }
    }
    speedNotFiltered(){
        if (this.speed == -1) {
            return true;
        } else {
            return false;
        }
    }
}

export default FilterOptions;