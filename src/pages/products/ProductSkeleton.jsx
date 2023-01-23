import React from 'react'
import Skeleton, {SkeletonTheme} from "react-loading-skeleton"
import ContentLoader from "react-content-loader"


const ProductSkeleton = () => {
  return (
    Array(8).fill(0).map((item, id) => (
        <ContentLoader 
        speed={2}
        width={330}
        height={260}
        viewBox="0 0 330 260"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        key={id}
        >
        <rect x="0" y="0" rx="3" ry="3" width="330" height="200" /> 
        <rect x="0" y="230" rx="3" ry="3" width="330" height="6" />
        <rect x="0" y="250" rx="3" ry="3" width="330" height="6" />
        </ContentLoader>
    ))
  )
}

export default ProductSkeleton