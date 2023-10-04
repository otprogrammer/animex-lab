export const GridBreakPoints = (heading:string) => {

  return{
  
    300: {
      slidesPerView: heading === "WatchList" ? 2 :2.5,
      spaceBetween: 5,
    },
    480: {
      slidesPerView: heading === "WatchList" ? 2 :3.5,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: heading === "WatchList" ? 2.8 : 4.2,
      spaceBetween: 10,

      speed: 500,
    },
    720: {
      slidesPerView: heading === "WatchList" ? 3.2 :4,
      spaceBetween: 10,
      speed: 500,
    },
    1024: {
      slidesPerView: heading === "WatchList" ? 3.5 : 3.7,
      spaceBetween: 10,
      slidesPerGroup: 3,
      speed: 500,
    },
    1200: {
      slidesPerView: heading === "WatchList" ? 4 : 6,
      spaceBetween: 10,
      slidesPerGroup: 3,
      speed: 500,
    },
    1424: {
      slidesPerView: heading === "WatchList" ? 5 : 6.5,
      spaceBetween: 10,
      slidesPerGroup:  3,
      speed: 500,
    },
    1624: {
      slidesPerView: heading === "WatchList" ? 6 :  7,
      slidesPerGroup: 3,
      spaceBetween: 10,
      speed: 500,
     
    },
    1800: {
      slidesPerView:  heading === "WatchList" ? 6.5 :  8.7,
      slidesPerGroup: 3,
      spaceBetween: 10,
      speed: 500,
     
    },
  }
  }