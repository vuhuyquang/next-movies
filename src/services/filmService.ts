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
export const searchFilmByFilters = async (params: {
  sort_field?: string;
  category?: string;
  country?: string;
  slug?: string;
  year?: string;
}): Promise<any> => {
  try {
    return await filmService.get(
      `/v1/api/danh-sach/phim-moi?slug=${params.slug}&sort_field=${params.sort_field}&category=${params.category}&country=${params.country}&year=${params.year}`,
    );
  } catch (error) {
    console.error('Error fetching films:', error);
    throw error;
  }
};
