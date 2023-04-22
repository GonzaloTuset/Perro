export const formatImg = ({image,reference}) => {
  return image ? 
      (image) : reference  ?
       (`https://cdn2.thedogapi.com/images/${reference}.jpg`) : 
       ('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Missing_dog_photo.svg/1165px-Missing_dog_photo.svg.png')
}

