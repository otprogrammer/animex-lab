"use client"

export function watchList() {

  let watchL ;

    const storedWatchList =
      typeof window !== "undefined" && localStorage.getItem("watchList");
    let wl = (storedWatchList ? JSON.parse(storedWatchList) : [])
    watchL = wl.sort((a: any, b: any) => {
      const timeA = a.time;
      const timeB = b.time;

      // Compare the time values
      if (timeA < timeB) {
        return 1;
      }
      if (timeA > timeB) {
        return -1;
      }

      return 0; // If timeA and timeB are equal
    })
 
    console.log(wl)


  return watchL
    

}