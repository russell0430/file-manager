import React, { useEffect, useRef, useState } from "react"
import { useRouter } from "@/routes/router"
import { ImageContainer } from "./style"
import ChevronLeft from "@/components/icons/ChevronLeft"
import ChevronRight from "@/components/icons/ChevronRight"
import { getSupportFiles, getResource } from "@/request"
import BaseImage from "@/components/Image"
import { parseLocation } from "@/utiliities/utils"
import { Item } from "@/types"
import { toast } from "react-hot-toast"

const Image: React.FC = () => {
  const { location, navigate } = useRouter()

  const { dir, filename } = parseLocation(location)
  const [imgUrl, setImgUrl] = useState("")
  const imageIndexRef = useRef(0)

  const [folderImages, setFolderImages] = useState<Item[]>([])

  useEffect(() => {
    getSupportFiles(dir.join("/"), ["jpg", "png"]).then((response) => {
      const { msg, data, status } = response
      if (status === 200) {
        const images = data?.files
        setFolderImages((prev) => images || prev)
      }
    })
  }, [dir.join("/")])

  useEffect(() => {
    getResource(location.pathname).then((response) => {
      const { status, msg, data } = response
      setImgUrl(data?.[0].url || "")
    })
  }, [location.pathname])

  useEffect(() => {
    imageIndexRef.current = folderImages.findIndex(
      (item) => `/${item.to}` === location.pathname
    )
  }, [folderImages, location.pathname])

  const handlePrev = () => {
    if (imageIndexRef.current <= 0) {
      toast("you are visiting the first image")
    } else if (folderImages.length < imageIndexRef.current - 1) {
      toast("invalid operation")
    } else {
      navigate(`/${folderImages[imageIndexRef.current - 1].to}`)
    }
  }
  const handleNext = () => {
    if (folderImages.length <= imageIndexRef.current + 1) {
      toast("you are visiting the last image")
    } else if (imageIndexRef.current + 1 < 0) {
      toast("invalid operation")
    } else {
      navigate(`/${folderImages[imageIndexRef.current + 1].to}`)
    }
  }
  return (
    <ImageContainer className="image">
      <div className="image-left" onClick={handlePrev}>
        <ChevronLeft />
      </div>
      <div className="image-content">
        <BaseImage src={imgUrl} alt="" placeholder="" />
      </div>
      <div className="image-right" onClick={handleNext}>
        <ChevronRight />
      </div>
    </ImageContainer>
  )
}

export default Image
