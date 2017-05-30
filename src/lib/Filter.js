export default function Filter(deals, filterOptions) {
    return deals.filter(d => { 
        // if there's nothing to filter let's not make expencive includes() calls 
        if(filterOptions.nothingFiltered()) return true;
        
        let broadband = filterOptions.broadband === d.productTypes.includes('Broadband');
        let mobile = filterOptions.mobile === d.productTypes.includes('Mobile');
        let tv = filterOptions.tv === d.productTypes.includes('TV');
        let speed = filterOptions.speedNotFiltered() ? true : d.speed.sortValue >= filterOptions.speed ? true : false;
        console.log(filterOptions.speed);
        console.log(d.speed);
        console.log(speed);
        console.log(broadband, mobile, tv, speed);
        return broadband && mobile && tv && speed;
    });
}