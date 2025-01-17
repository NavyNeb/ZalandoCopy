import React from "react"

type Props = {
    icon: React.ReactNode,
    dropable?: boolean,
    children?: React.ReactNode
}

const HeaderDropdownIcons: React.FC<Props> = ({ icon, dropable, children }) => {
  return (
    <div className = "h-10 w-10 z-10 row-flex justify-center mx-1 border-r-2 border-t-2 border-l-2 border-white hover:border-black relative group" >
       {dropable && <div className="w-fit right-[-2px] z-20 top-[38px] bg-white absolute border-2 border-black hidden group-hover:block" >
            {children}
        </div>}
        <div className="w-full h-full z-30 right-0 top-[9%] left-0 bottom-0 bg-white absolute " />
        <div className = "absolute z-40" >
            {icon}
        </div>
          
    </div>
  )
}

export default HeaderDropdownIcons