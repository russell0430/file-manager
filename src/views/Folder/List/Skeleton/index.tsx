import React from "react"
import { SkeletonContainer } from "./style"

const SkeletonList: React.FC<{ num: number }> = ({ num }) => {
  const skeletonNum = new Array(num).fill(0)
  console.log("skeleton")
  return (
    <SkeletonContainer>
      {skeletonNum.map((_, idx) => (
        <div className="item" key={idx}>
          <div className="index skeletons"></div>
          <div className="label skeletons"></div>
        </div>
      ))}
    </SkeletonContainer>
  )
}

export default SkeletonList
