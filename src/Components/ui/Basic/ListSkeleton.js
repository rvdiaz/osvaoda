import React from 'react'

export const ListSkeleton = (props) => {
    const {children,length}=props;
    const list=new Array(length);
  return (
    list
    .fill(1)
    .map(()=>(
      children    
    ))
  )
}
