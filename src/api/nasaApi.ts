const apiKey = import.meta.env.VITE_NASA_API_KEY;

interface PhotoOfTheDayData {
  title: string;
  url: string;
}

export const getPhotoOfTheDayData = async (): Promise<PhotoOfTheDayData> => {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,
  );
  return await response.json();
};

/* Start of Gallery Photos and Details Request Trello ticket mm-40 */
export interface GalleryPhotoDetails {
  img_src: string;
  id: number;
  sol: number;
  camera: {
    cameraid: number;
    name: string;
    rover_id: number;
    full_name: string;
  };
  earth_date: string;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
    max_sol: number;
    max_date: string;
    total_photos: number;
  };
}

interface GalleryDetails {
  photos: GalleryPhotoDetails[];
}

export const getGalleryPhotos = async (): Promise<GalleryDetails> => {
  const response = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&camera=mast&api_key=${apiKey}`,
  );
  return await response.json();
};
/* End of Gallery Photos and Details Request Trello ticket mm-40 */
