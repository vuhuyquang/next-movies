import filmService from './baseClient';
export const getFilmDetails = async (slug: string): Promise<any> => {
  try {
    return await filmService.get(`/phim/${slug}`);
  } catch (error) {
    console.error('Error fetching film details:', error);
    throw error;
  }
};
export const getFilmsByKeyword = async (keyword: string): Promise<any> => {
  try {
    return await filmService.get(`/v1/api/tim-kiem?keyword=${keyword}`);
  } catch (error) {
    console.error('Error fetching films:', error);
    throw error;
  }
};
export const getFilmsByCategory = async (slug: string): Promise<any> => {
  try {
    return await filmService.get(`/v1/api/danh-sach/${slug}`, { params: { sort_field: 'year' } });
  } catch (error) {
    console.error('Error fetching films:', error);
    throw error;
  }
};
export const getFilmsByFilter = async (slug: string, params): Promise<any> => {
  try {
    return await filmService.get(`/v1/api/danh-sach/${slug}`, { params });
  } catch (error) {
    console.error('Error fetching films:', error);
    throw error;
  }
};
