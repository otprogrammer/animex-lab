"use client"
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import GridContainer from '../container/GridContainer'



type HomeContainerTabs = {
  Latest : any[];
  Popular : any[]
  MyList : any[];
}

export default function Tabs({Latest,Popular,MyList}:HomeContainerTabs) {

  let [categories] = useState({
    Latest: Latest,
    Popular: Popular,
    MyList: MyList
  })

  const navbar = [
    { name: "Trending" },
    { name: "Characters" },
    { name: "Similar" },
    { name: "OP/ED" },
  
  ];  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index:number, itemName:string) => {
    setActiveIndex(index);
    // Do something with the itemName, if needed
  };
  const hrStyles = {
    marginLeft: `${activeIndex * 100}%`,
    transition: "margin-left 0.3s ease-in-out",
  };
  return (
    <div className="w-full px-2  sm:px-0">
      <Tab.Group>
       
        <Tab.List className="grid grid-cols-3 md:grid-cols-3 border-b-[1px] w-full lg:max-w-[85%] xl:max-w-[75%] mx-auto border-neutral-800/75 place-self-center">

        {Object.keys(categories).map((category,index) => (

            <Tab
            key={index}
            onClick={() => handleItemClick(index, category)}

            className={`
            focus:outline-none
            ${
              activeIndex === index ? "txt-primary hover:text-white" : "hover:txt-primary"
            } text-center p-2 cursor-pointer font-bold`}
            >
            {category}
            </Tab>
          ))}
                 <hr className="hidden md:block h-0.5 w-full bg-white" style={hrStyles} />

           
        
        </Tab.List>
        <Tab.Panels className="mt-2">
        {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              
            >
              <GridContainer data={posts} heading={idx == 0 ? "Latest" : "Popular"}/>
            </Tab.Panel>
          ))}
    
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}