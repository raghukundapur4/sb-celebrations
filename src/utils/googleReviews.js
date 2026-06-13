export function getGoogleReviewLinks({
  placeId,
  placeName,
  address,
  profileUrl,
  writeReviewUrl,
  reviewsUrl,
}) {
  if (profileUrl) {
    return {
      profileUrl,
      writeReviewUrl: writeReviewUrl || profileUrl,
      reviewsUrl: reviewsUrl || profileUrl,
    }
  }

  if (placeId) {
    return {
      profileUrl: `https://www.google.com/maps/place/?q=place_id:${placeId}`,
      writeReviewUrl: `https://search.google.com/local/writereview?placeid=${placeId}`,
      reviewsUrl: `https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${placeId}`,
    }
  }

  const query = encodeURIComponent(`${placeName} ${address} Google reviews`)
  const searchUrl = `https://www.google.com/maps/search/?api=1&query=${query}`

  return {
    profileUrl: searchUrl,
    writeReviewUrl: searchUrl,
    reviewsUrl: searchUrl,
  }
}
